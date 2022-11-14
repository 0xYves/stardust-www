import { NextUIProvider } from "@nextui-org/react";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "../styles/globals.css";
import { createTheme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Karla } from "@next/font/google";

const karla = Karla({
  weight: "400",
  subsets: ["latin"],
});

const theme = createTheme({
  type: "dark",
  theme: {
    fonts: {},
  },
});

const { chains, provider } = configureChains(
  [chain.goerli],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "stardust",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme()}>
        <NextThemesProvider
          defaultTheme="system"
          attribute="class"
          value={{
            dark: theme.className,
          }}
        >
          <NextUIProvider>
            <main className={karla.className}>
              <Component {...pageProps} />
            </main>
          </NextUIProvider>
        </NextThemesProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
