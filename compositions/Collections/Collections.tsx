import { Filter, useCollectionFilters } from '@filter'
import { NFTGrid } from 'components/@media/NFTGrid'
import { NFTCard } from 'components/@media/NFTCard'
import { useEffect } from 'react'
import { nftGridWrapper } from 'components/@media/NftMedia.css'

export type CollectionsProps = {
  collectionAddress?: string
}

export function Collections({ collectionAddress }: CollectionsProps) {
  const {
    items,
    isValidating,
    isReachingEnd,
    handleLoadMore,
    filterStore: { clearFilters },
  } = useCollectionFilters()

  useEffect(() => {
    clearFilters()
  }, [collectionAddress])

  return (
    <Filter
      grid={
        <NFTGrid
          items={items}
          handleLoadMore={handleLoadMore}
          isReachingEnd={isReachingEnd}
          isValidating={isValidating}
          nftRenderer={<NFTCard />}
          className={nftGridWrapper()}
        />
      }
    />
  )
}
