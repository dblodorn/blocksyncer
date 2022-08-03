import type { AppProps } from 'next/app'
import { CollectionsProvider } from 'providers/CollectionsProvider'
import { useCollections } from 'hooks/zdk/useCollections'
import { HeaderComposition } from 'compositions/Header'
import { FooterComposition } from 'compositions/Footer'
import { AppWrapper } from 'components/AppWrapper'
import { color } from '@zoralabs/zord'

import '@rainbow-me/rainbowkit/styles.css'
import '@zoralabs/zord/index.css'
import 'styles/globals.css'
import 'styles/reset.css'
import 'styles/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  const { collections, editions } = useCollections()

  return (
    <AppWrapper>
      <CollectionsProvider collections={collections} editions={editions}>
        <HeaderComposition
          style={{ borderBottom: `1px solid ${color.black50}` }}
          menuStyle="popout"
        />
        <Component {...pageProps} />
        <FooterComposition style={{ borderTop: `1px solid ${color.black50}` }} />
      </CollectionsProvider>
    </AppWrapper>
  )
}

export default MyApp
