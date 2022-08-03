import {
  ReactNode,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { collectionAddresses, editionAddresses } from 'constants/collection-addresses'
import { CollectionsData } from 'hooks/zdk/useCollections'
import { MENU_CTA } from 'constants/strings'

const CollectionsContext = createContext<{
  collections: CollectionsData[] | []
  collectionAmount: number
  editions: any[]
  editionsAmount: number
  currentCollection: string
  setCurrentCollection: Dispatch<SetStateAction<string>>
  currentCollectionCount: string | undefined
  setCurrentCollectionCount: Dispatch<SetStateAction<string | undefined>>
}>({
  collections: [],
  collectionAmount: collectionAddresses.length,
  editions: [],
  editionsAmount: editionAddresses.length,
  currentCollection: MENU_CTA,
  setCurrentCollection: () => {},
  currentCollectionCount: undefined,
  setCurrentCollectionCount: () => {},
})

type CollectionsProps = {
  children?: ReactNode
  collections: CollectionsData[] | undefined
  editions: any[] | undefined
}

export function useCollectionsContext() {
  return useContext(CollectionsContext)
}

export function CollectionsProvider({
  children,
  collections,
  editions,
}: CollectionsProps) {
  const [currentCollection, setCurrentCollection] = useState<string>(MENU_CTA)
  const [currentCollectionCount, setCurrentCollectionCount] = useState<
    string | undefined
  >(undefined)

  return (
    <CollectionsContext.Provider
      value={{
        /* @ts-ignore */
        collections: collections ? collections : [],
        collectionAmount: collectionAddresses.length,
        currentCollection,
        editions: editions ? editions : [],
        editionsAmount: editionAddresses.length,
        /* NAVIGATION */
        setCurrentCollection,
        currentCollectionCount,
        setCurrentCollectionCount,
      }}
    >
      {children}
    </CollectionsContext.Provider>
  )
}
