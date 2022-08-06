import { Text, Grid, Stack } from '@zoralabs/zord'
import {
  landingGridWrapper,
  landingGridPanel,
  landingHeadline,
  nftRowEdition,
  landingNFTRow,
  nftRowCollection,
} from './Landing.css'
import { CollectionFilterProvider } from '@filter'
import { LandingNFTs } from './LandingNFTs'
import {
  collectionsAddressOnly,
  editionsAddressOnly,
} from 'constants/collection-addresses'
import { EditionsWidget } from '@editions/EditionsWidget'

export function Landing() {
  return (
    <Grid className={[landingGridWrapper]}>
      <Stack className={[landingGridPanel]} style={{ backgroundColor: '#f59994' }}>
        <Text
          as="h1"
          className={['outline-font', landingHeadline]}
          style={{ backgroundColor: '#405416' }}
        >
          1 / 1s
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
          1 / ∞
        </Text>
        <Stack>
          {editionsAddressOnly.map((address) => (
            <EditionsWidget
              key={address}
              contractAddress={address}
              className={[landingNFTRow, nftRowEdition, 'landing-editions']}
              debug
            />
          ))}
        </Stack>
      </Stack>
    </Grid>
  )
}
