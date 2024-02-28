import { TOKENS_LIST } from "@/constants/faucetConstants";

// function to trim address
export const trimAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export const addTokenToMetamask = async (selectedToken: string, selectedChain: string) => {
    const token = TOKENS_LIST[selectedToken].find(
        (chain: any) => chain.chainId === selectedChain
    )

    //@ts-ignore
    if (window.ethereum) {
        try {
            //@ts-ignore
            const wasAdded = await ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: {
                        address: token.tokenAddress,
                        symbol: selectedToken,
                        decimals: 18,
                        image: token.tokenURI,
                    },
                },
            });

            if (wasAdded) {
                console.log(`${selectedToken} was successfully added to metamask`);
            } else {
                console.log(`${selectedToken} coin has not been added`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}