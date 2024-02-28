export const ChainId: { [chainId in number]: string } = {
    80001: 'MUMBAI',
    43113: 'FUJI',
    5: 'GOERLI',
}

export const TOKENS_LIST: any = {
    'USDT': [
        {
            chainId: 43113,
            chainName: 'FUJI',
            tokenAddress: '0xb452b513552aa0B57c4b1C9372eFEa78024e5936',
            tokenURI: "/token-logos/usdt-token.svg",
        },
        {
            chainId: 80001,
            chainName: 'MUMBAI',
            tokenAddress: '0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054',
            tokenURI: "/token-logos/usdt-token.svg",
        },
        {
            chainId: 5,
            chainName: 'GOERLI',
            tokenAddress: '0x2227E4764be4c858E534405019488D9E5890Ff9E',
            tokenURI: "/token-logos/usdt-token.svg",
        },
    ],
    'ETH': [
        {
            chainId: 43113,
            chainName: 'FUJI',
            tokenAddress: '0xce811501ae59c3E3e539D5B4234dD606E71A312e',
            tokenURI: "/token-logos/eth-logo.svg",
        },
        {
            chainId: 80001,
            chainName: 'MUMBAI',
            tokenAddress: '0x3C6Bb231079c1023544265f8F26505bc5955C3df',
            tokenURI: "/token-logos/eth-logo.svg",
        },
        {
            chainId: 5,
            chainName: 'GOERLI',
            tokenAddress: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
            tokenURI: "/token-logos/eth-logo.svg",
        },
    ],
    'USDC': [
        {
            chainId: 43113,
            chainName: 'FUJI',
            tokenAddress: '0x5425890298aed601595a70ab815c96711a31bc65',
            tokenURI: "/token-logos/usdc-token.svg",
        },
        {
            chainId: 5,
            chainName: 'GOERLI',
            tokenAddress: '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
            tokenURI: "/token-logos/usdc-token.svg",
        },
    ],
    'PEPE': [
        {
            chainId: 43113,
            chainName: 'FUJI',
            tokenAddress: '0x669365a664E41c3c3f245779f98118CF23a20789',
            tokenURI: "/token-logos/pepeLogo.svg"
        },
        {
            chainId: 80001,
            chainName: 'MUMBAI',
            tokenAddress: '0xFee7De539Dd346189A33E954c8A140df95F94B89',
            tokenURI: "/token-logos/pepeLogo.svg"
        },
        {
            chainId: 5,
            chainName: 'GOERLI',
            tokenAddress: '0x9bAA6b58bc1fAB3619f1387F27dCC18CbA5A9ca1',
            tokenURI: "/token-logos/pepeLogo.svg"
        },
    ],
    'PK': [
        {
            chainId: 43113,
            chainName: 'FUJI',
            tokenAddress: '0x00A7318DE94e698c3683db8f78dE881de4E5d18C',
            tokenURI: "/token-logos/pk_token.png"
        },
        {
            chainId: 80001,
            chainName: 'MUMBAI',
            tokenAddress: '0xa78044353cB8C675E905Ce7339769872Edd8E637',
            tokenURI: "/token-logos/pk_token.png"
        },
        {
            chainId: 5,
            chainName: 'GOERLI',
            tokenAddress: '0x7085f7c56Ef19043874CA3F2eA781CDa788be5E4',
            tokenURI: "/token-logos/pk_token.png"
        },
    ],
    'SHI': [
        {
            chainId: 43113,
            chainName: 'FUJI',
            tokenAddress: '0xB94EC038E5cF4739bE757dF3cBd2e1De897fCA2e',
            tokenURI: "/token-logos/shiba.png"
        },
        {
            chainId: 80001,
            chainName: 'MUMBAI',
            tokenAddress: '0x418049cA499E9B5B983c9141c341E1aA489d6E4d',
            tokenURI: "/token-logos/shiba.png"
        },
        {
            chainId: 5,
            chainName: 'GOERLI',
            tokenAddress: '0xDC17183328e81b5c619D58F6B7E480AB1c2EA152',
            tokenURI: "/token-logos/shiba.png"
        },
    ],
    'ROUTE': [
        {
            chainId: 80001,
            chainName: 'MUMBAI',
            tokenAddress: '0x908aC4f83A93f3B7145f24f906327018c9e54B3a',
            tokenURI: "/token-logos/route-coin.svg"
        },
    ],
}

export const FaucetContracts: { [chainId in number]: `0x${string}` } = {
    80001: "0xe423c267026c9685bE26dc83b4f25a11C969ea17",
    5: "0xdD7c63502eb7772913BD978FEC9b3588b8dA3f25",
    43113: "0x4aF116eC56307EC30CBc9875590c53a0d05e7dd7",
};

export const Chains: string[] = ['FUJI', 'GOERLI', 'MUMBAI']

export const ChainOptions: { name: string, chainId: number, native: string }[] = [
    {
        name: "FUJI",
        chainId: 43113,
        native: "AVAX",
    },
    {
        name: "GOERLI",
        chainId: 5,
        native: "ETH",
    },
    {
        name: "MUMBAI",
        chainId: 80001,
        native: "MATIC",
    },
]

export const explorerLinks: { [key: string]: string } = {
    80001: "https://mumbai.polygonscan.com/tx/",
    43113: "https://testnet.snowtrace.io/tx/",
    5: "https://goerli.etherscan.io/tx/",
};

export const CHAIN_FAUCETS: { [key: string]: { primary: string, fallback: string[] } } = {
    80001: { primary: "https://faucets.chain.link/mumbai", fallback: ["https://faucet.polygon.technology/"] },
    43113: { primary: "https://faucets.chain.link/fuji", fallback: ["https://faucets.chain.link/fuji"] },
    5: { primary: "https://goerlifaucet.com/", fallback: ["https://goerli-faucet.pk910.de/"] },
}