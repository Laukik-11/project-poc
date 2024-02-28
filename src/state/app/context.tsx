"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
  avalancheFuji,
  goerli,
} from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

import { Chain } from "viem";

export const scroll_alpha_testnet = {
  id: 53_4353,
  name: "Scroll Alpha Testnet",
  network: "scroll_testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
  },
  rpcUrls: {
    public: { http: ["https://alpha-rpc.scroll.io/l2"] },
    default: { http: ["https://alpha-rpc.scroll.io/l2"] },
  },
  blockExplorers: {
    etherscan: { name: "BlockScout", url: "https://blockscout.scroll.io" },
    default: { name: "BlockScout", url: "https://blockscout.scroll.io" },
  },
  contracts: {},
} as const satisfies Chain;

export const shardeum_sphinx_testnet = {
  id: 8081,
  name: "Shardeum Sphinx DApp 1.X",
  network: "shardeum_sphinx_dapp_1.x",
  nativeCurrency: {
    decimals: 18,
    name: "Shardeum",
    symbol: "SHM",
  },
  rpcUrls: {
    public: { http: ["https://dapps.shardeum.org/"] },
    default: { http: ["https://dapps.shardeum.org/"] },
  },
  blockExplorers: {
    etherscan: {
      name: "Explorer",
      url: "https://explorer-dapps.shardeum.org/",
    },
    default: { name: "Explorer", url: "https://explorer-dapps.shardeum.org/" },
  },
  contracts: {},
} as const satisfies Chain;

const mumbaiUpdatedRpc = {
  ...polygonMumbai,
  rpcUrls: {
    public: { http: ["https://rpc-mumbai.maticvigil.com"] },
    default: { http: ["https://rpc-mumbai.maticvigil.com"] },
  },
}

const { chains, publicClient } = configureChains(
  [mumbaiUpdatedRpc, avalancheFuji, goerli],
  [
    alchemyProvider({ apiKey: "aDKJq_J0-enA7NOA3ln8Ra7eujzxWx70" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "fb0efb64b8910b28a54d3f0567ab31db",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider theme={darkTheme()} chains={chains}>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryProvider>
  );
};

export default AppProvider;
