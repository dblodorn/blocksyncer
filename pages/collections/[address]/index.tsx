import { PageWrapper } from 'components/PageWrapper'
import { collectionService, CollectionServiceProps } from 'services/collectionService'
import { useEffect } from 'react'
import { MarketStats } from '@market/components/MarketStats'
import { Seo } from 'components'
import { useCollectionsContext } from 'providers/CollectionsProvider'
import {
  Collections,
  CollectionActivityHeader,
  CollectionHeader,
} from 'compositions/Collections'
import { CollectionFilterProvider } from '@filter'
import { Stack } from '@zoralabs/zord'
import { useCollection } from '@filter/hooks/useCollection'
import { useWindowWidth } from 'hooks'
import { MENU_CTA } from 'constants/strings'

const Collection = ({
  contractAddress,
  seo,
  aggregateStats,
  collection,
}: CollectionServiceProps) => {
  const { setCurrentCollection, setCurrentCollectionCount } = useCollectionsContext()
  const { isLarge } = useWindowWidth()

  useEffect(() => {
    if (collection && collection?.name) {
      setCurrentCollection(collection.name)
      setCurrentCollectionCount(`${aggregateStats.aggregateStat.nftCount} NFTs`)
    }
    return () => {
      setCurrentCollection(MENU_CTA)
      setCurrentCollectionCount(undefined)
    }
  }, [aggregateStats, collection, setCurrentCollection, setCurrentCollectionCount])

  const { data } = useCollection(contractAddress)

  return (
    <PageWrapper direction="column" gap="x4">
      <Seo title={seo.title} description={seo.description} />
      <CollectionHeader collection={collection} aggregateStats={aggregateStats}>
        <MarketStats aggregateStats={aggregateStats} />
      </CollectionHeader>
      {contractAddress && (
        <CollectionFilterProvider
          useSidebarClearButton
          contractAddress={contractAddress}
          useCollectionProperties={{
            header: 'Traits',
            selector: 'blocksyncer-traits-wrapper',
            hideBorder: true,
          }}
          usePriceRange={{
            label: 'Price',
            hideBorder: true,
            hideCurrencySelect: true,
          }}
          strings={{
            NO_FILTER_RESULTS_COPY: `Sorry no ${data?.name} NFTs are available for purchase on chain.`,
          }}
        >
          <Stack>
            <CollectionActivityHeader />
            <Collections collectionAddress={contractAddress} />
          </Stack>
        </CollectionFilterProvider>
      )}
    </PageWrapper>
  )
}

export const getServerSideProps = collectionService

export default Collection
