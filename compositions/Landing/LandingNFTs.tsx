import { Filter, useCollectionFilters } from '@filter'
import { NFTGrid } from '@media/NFTGrid'
import { landingTokenGrid } from './Landing.css'
import { LandingNFT } from './LandingNFT'

export function LandingNFTs({
  collectionType,
  customClassName,
}: {
  collectionType?: 'editions' | 'collections'
  customClassName?: any
}) {
  const {
    items,
    isValidating,
    isReachingEnd,
    handleLoadMore,
    filterStore: { clearFilters },
  } = useCollectionFilters()

  return (
    <Filter
      grid={
        <NFTGrid
          items={items}
          handleLoadMore={handleLoadMore}
          isReachingEnd={isReachingEnd}
          isValidating={isValidating}
          nftRenderer={
            <LandingNFT
              collectionType={collectionType}
              customClassName={customClassName}
            />
          }
          className={landingTokenGrid}
        />
      }
    />
  )
}
