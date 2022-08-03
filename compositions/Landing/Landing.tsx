import { Display, Grid, Stack } from '@zoralabs/zord'
import { landingGridWrapper, landingGridPanel, landingHeadline } from './Landing.css'
import { CollectionNavList } from 'compositions/Menu/CollectionNavList'
import { useCollectionsContext } from 'providers'
import { CollectionFilterProvider } from '@filter'
import { Collections } from 'compositions/Collections'
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
          <Stack mt="x4">
            <Collections />
          </Stack>
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
          <Stack mt="x4">
            <Collections />
          </Stack>
        </CollectionFilterProvider>
      </Stack>
    </Grid>
  )
}
