import { CHAIN_FAUCETS, ChainOptions } from "@/constants/faucetConstants";
import Link from "next/link";
import React from "react";

type Props = {
  selectedChainId: any;
};

const GasTokensLink = ({ selectedChainId }: Props) => {
  const selectedChain = ChainOptions.find(
    (chain) => chain.chainId === selectedChainId
  );
  const faucetData = CHAIN_FAUCETS[selectedChainId];
  const link = faucetData ? faucetData.primary || faucetData.fallback[0] : null;

  if (!link) return null;

  return (
    <Link href={link} target="_blank">
      <h3 className="text-sm md:text-base text-neutral-500 hover:text-neutral-300 hover:underline underline-offset-2 duration-150">
        Get gas {selectedChain!.native} for testing
      </h3>
    </Link>
  );
};

export default GasTokensLink;
