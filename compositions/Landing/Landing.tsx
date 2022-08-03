import { Display, Grid, Stack } from '@zoralabs/zord'
import {
  landingGridWrapper,
  landingGridPanel,
  landingHeadline,
  nftRowEdition,
  nftRowCollection,
} from './Landing.css'
import { CollectionFilterProvider } from '@filter'
import { LandingNFTs } from './LandingNFTs'
import {
  collectionsAddressOnly,
  editionsAddressOnly,
} from 'constants/collection-addresses'

export function Landing() {
  return (
    <Grid className={[landingGridWrapper]}>
      <Stack className={[landingGridPanel]} style={{ backgroundColor: '#f59994' }}>
        <Display
          as="h1"
          className={['outline-font', landingHeadline]}
          style={{ backgroundColor: '#405416' }}
        >
          Collections
        </Display>
        <CollectionFilterProvider
          useSidebarClearButton
          contractAddress={collectionsAddressOnly}
          useSidebarFilter={false}
        >
          <LandingNFTs collectionType="collection" customClassName={nftRowCollection} />
        </CollectionFilterProvider>
      </Stack>
      <Stack className={[landingGridPanel]} style={{ backgroundColor: '#405416' }}>
        <Display
          as="h1"
          className={['outline-font', landingHeadline]}
          style={{ backgroundColor: '#f59994' }}
        >
          Editions
        </Display>
        <CollectionFilterProvider
          useSidebarClearButton
          contractAddress={editionsAddressOnly}
          useSidebarFilter={false}
        >
          <LandingNFTs collectionType="edition" customClassName={nftRowEdition} />
        </CollectionFilterProvider>
      </Stack>
    </Grid>
  )
}
