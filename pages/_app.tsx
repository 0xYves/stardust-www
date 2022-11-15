import '@fontsource/karla/400.css'
import '@fontsource/karla/700.css'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import Layout from '../components/Layout'
import '../styles/globals.css'

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#5E5CE6',
      primaryBackground: '#1C1C1E',
    },
    fonts: { sans: 'Karla' },
  },
})

const { chains, provider } = configureChains(
  [chain.goerli, chain.mainnet],
  [publicProvider()],
)
const { connectors } = getDefaultWallets({
  appName: 'stardust',
  chains,
})
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

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
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NextUIProvider>
        </NextThemesProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
