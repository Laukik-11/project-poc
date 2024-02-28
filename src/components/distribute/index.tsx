"use client";
import ChainDropdown from "@/components/dropdown/ChainDropdown";
import TokenDropdown from "@/components/dropdown/TokenDropdown";
import Toast from "@/components/ui/toast";
import FAUCET_ABI from "@/constants/abi/FaucetContract.json";
import {
  ChainId,
  FaucetContracts,
  TOKENS_LIST,
  explorerLinks,
} from "@/constants/faucetConstants";
import { CircularProgress } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useAccount,
  useChainId,
  usePublicClient,
  useWalletClient,
} from "wagmi";
import Button from "@/components/ui/button";
import { addTokenToMetamask } from "@/utils";
import Image from "next/image";
import GasTokensLink from "../gasLink";

const Distribute = () => {
  const { address: userAddress, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const chainId = useChainId();

  const [selectedChain, setSelectedChain] = useState<any>("");
  const [selectedToken, setSelectedToken] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Get Tokens");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alreadySent, setAlreadySent] = useState<boolean>(false);
  const [contractBalance, setContractBalance] = useState<number>(0);

  const notify = (message: any, type: string, duration: number) => {
    switch (type) {
      case "loading":
        toast.loading(message, { duration });
        break;
      case "error":
        toast.error(message, { duration });
        break;
      case "success":
        toast.success(message, { duration });
        break;
      default:
        break;
    }
  };

  const checkIfAlreadySent = async () => {
    if (selectedChain && selectedToken && Number(selectedChain) === chainId) {
      const token = TOKENS_LIST[selectedToken].find(
        (t: any) => t.chainId === selectedChain
      );
      if (token) {
        setIsLoading(true);
        const data = await publicClient.readContract({
          address: FaucetContracts[selectedChain],
          abi: FAUCET_ABI,
          functionName: "alreadySent",
          args: [token.tokenAddress, userAddress],
        });

        if (data) {
          setButtonText("Already sent tokens");
          setAlreadySent(data as boolean);
        } else {
          setAlreadySent(data as boolean);
        }
        setIsLoading(false);
      }
    }
  };

  const checkSelectedTokenBalance = async () => {
    if (selectedChain && selectedToken && Number(selectedChain) === chainId) {
      const token = TOKENS_LIST[selectedToken].find(
        (t: any) => t.chainId === selectedChain
      );
      if (token) {
        setIsLoading(true);
        const data = await publicClient.readContract({
          address: FaucetContracts[selectedChain],
          abi: FAUCET_ABI,
          functionName: "fetchBalance",
          args: [token.tokenAddress],
        });

        setContractBalance(Number(data));
        if (Number(data) === 0) {
          setButtonText("Contract Balance is low");
        }
        setIsLoading(false);
      }
    }
  };

  const distributeToken = async () => {
    const token = TOKENS_LIST[selectedToken].find(
      (t: any) => t.chainId === selectedChain
    );
    if (token && Number(selectedChain) === chainId) {
      const { result, request } = await publicClient?.simulateContract({
        account: userAddress,
        address: FaucetContracts[selectedChain],
        abi: FAUCET_ABI,
        functionName: "distributeToken",
        args: [token.tokenAddress],
      });

      walletClient?.writeContract(request).then((hash: any) => {
        setIsLoading(true);
        publicClient
          .waitForTransactionReceipt({ hash })
          .then((receipt) => {
            // console.log("Receipt", receipt);
            setIsLoading(false);
            notify(
              <div className="flex items-center gap-4">
                <h1>Tokens distributed!</h1>
                <Link
                  href={`${explorerLinks[chainId]}${hash}`}
                  target="_blank"
                  className="border border-neutral-600 hover:backdrop-brightness-75 rounded-lg p-2 text-xs font-light duration-300"
                >
                  View on explorer
                </Link>
                <button
                  className="border border-neutral-600 hover:backdrop-brightness-75 rounded-lg p-2 text-xs font-light duration-300"
                  onClick={() =>
                    addTokenToMetamask(selectedToken, selectedChain)
                  }
                >
                  Add {selectedToken} to Metamask
                </button>
              </div>,
              "success",
              8000
            );
            checkIfAlreadySent();
          })
          .catch((err) => {
            console.error(err);
            setIsLoading(false);
          });
      });
    } else {
      notify(`Switch your network to ${ChainId[selectedChain]}`, "error", 2000);
    }
  };

  useEffect(() => {
    setButtonText("Get Tokens");
    checkIfAlreadySent();
    checkSelectedTokenBalance();
  }, [selectedChain, selectedToken, chainId, userAddress]);

  // if user is not connected to wallet, show connect button
  if (!isConnected)
    return (
      <div className="mt-24">
        <div className="flex flex-col items-center justify-center"></div>
        <ConnectButton />
      </div>
    );

  return (
    <div className="my-14 md:my-16 lg:my-20">
      <div className="md:text-lg lg:text-xl font-medium text-center max-w-lg">
        <div>
          <div className="flex flex-col gap-3 text-lg items-center justify-center text-black">
            <TokenDropdown
              selectedToken={selectedToken}
              setSelectedToken={setSelectedToken}
            />
            <ChainDropdown
              selectedToken={selectedToken}
              selectedChain={selectedChain}
              setSelectedChain={setSelectedChain}
            />
            <Button
              disabled={
                alreadySent ||
                contractBalance === 0 ||
                !selectedChain ||
                !selectedToken ||
                isLoading
              }
              altDisabledStyle={
                alreadySent ||
                contractBalance === 0 ||
                !selectedChain ||
                !selectedToken ||
                isLoading
              }
              onClick={() => distributeToken()}
            >
              {isLoading ? (
                <div className="flex items-center gap-2 md:gap-3">
                  <CircularProgress
                    size={18}
                    thickness={5}
                    sx={{ color: "#FFF" }}
                  />
                  <span>Please wait</span>
                </div>
              ) : (
                buttonText
              )}
            </Button>
          </div>

          <div className="mt-5">
            {selectedChain && <GasTokensLink selectedChainId={selectedChain} />}
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
};

export default Distribute;
