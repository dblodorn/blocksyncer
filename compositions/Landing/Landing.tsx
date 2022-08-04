import { Text, Grid, Stack } from '@zoralabs/zord'
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
        <Text
          as="h1"
          className={['outline-font', landingHeadline]}
          style={{ backgroundColor: '#405416' }}
        >
          Collections
        </Text>
        <CollectionFilterProvider
          useSidebarClearButton
          contractAddress={collectionsAddressOnly}
          useSidebarFilter={false}
        >
          <LandingNFTs collectionType="collections" customClassName={nftRowCollection} />
        </CollectionFilterProvider>
      </Stack>
      <Stack className={[landingGridPanel]} style={{ backgroundColor: '#405416' }}>
        <Text
          as="h1"
          className={['outline-font', landingHeadline]}
          style={{ backgroundColor: '#f59994' }}
        >
          Editions
        </Text>
        <CollectionFilterProvider
          useSidebarClearButton
          contractAddress={editionsAddressOnly}
          useSidebarFilter={false}
        >
          <LandingNFTs collectionType="editions" customClassName={nftRowEdition} />
        </CollectionFilterProvider>
      </Stack>
    </Grid>
  )
}
