import { Collection } from '@zoralabs/zdk/dist/queries/queries-sdk'
import { zdk } from '@shared/utils/zdk'
import { useEffect, useState } from 'react'
import {
  collectionsAddressOnly,
  editionsAddressOnly,
} from 'constants/collection-addresses'

export type CollectionsData = Collection

export function useCollections() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(undefined)
  const [collections, setCollections] = useState<Collection[] | undefined>(undefined)
  const [editions, setEditions] = useState<any>(undefined)

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        /* @ts-ignore */
        const data = await zdk.collections({
          where: { collectionAddresses: collectionsAddressOnly },
        })
        setCollections(data?.collections?.nodes)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchCollections()
  }, [])

  useEffect(() => {
    const fetchDaos = async () => {
      try {
        /* @ts-ignore */
        const data = await zdk.collections({
          where: { collectionAddresses: editionsAddressOnly },
        })
        setEditions(data?.collections?.nodes)
      } catch (err) {
        console.error(err)
      }
    }
    fetchDaos()
  }, [])

  return {
    loading,
    error,
    collections,
    editions,
  }
}
