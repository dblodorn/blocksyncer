import { getDefaultWallets, RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit'
import * as gtag from 'lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { createClient, chain, configureChains, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { NFTFetchConfiguration } from '@zoralabs/nft-hooks'
import NextNProgress from 'nextjs-progressbar'
import { ZDKFetchStrategy } from '@zoralabs/nft-hooks/dist/strategies'
import { V3Provider } from '@market'
import { GALACTUS_BASE_URL } from 'constants/env-vars'
import { SWRConfig } from 'swr'
import { ModalContextProvider } from '@modal'
import { PopoutContextProvider } from '@popout'
import { ContractProvider } from '@market/providers/ContractProvider'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY

const { chains, provider } = configureChains(
  [chain.mainnet],
  [alchemyProvider({ alchemyId: alchemyKey }), publicProvider()]
)
const { connectors } = getDefaultWallets({
  appName: 'BlockSyncer',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export const strategy = new ZDKFetchStrategy('1', GALACTUS_BASE_URL)

export function AppWrapper({ children }: { children: JSX.Element }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        coolMode
        theme={lightTheme({
          accentColor: 'black',
          borderRadius: 'large',
        })}
      >
        <SWRConfig
          value={{
            refreshInterval: 0,
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}
        >
          <NFTFetchConfiguration networkId="1" strategy={strategy}>
            <V3Provider>
              <NextNProgress
                color="rgba(0,0,0,.5)"
                startPosition={0.125}
                stopDelayMs={200}
                height={2}
                showOnShallow={true}
                options={{ showSpinner: false }}
              />
              <ModalContextProvider>
                <PopoutContextProvider>
                  <ContractProvider>{children}</ContractProvider>
                </PopoutContextProvider>
              </ModalContextProvider>
            </V3Provider>
          </NFTFetchConfiguration>
        </SWRConfig>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
