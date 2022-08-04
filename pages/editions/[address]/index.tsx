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
import { EditionsProvider, useEditionsProvider } from '@editions'
import { RawDisplayer } from 'components/utils'

function ProviderData() {
  const { contractProps } = useEditionsProvider()

  return <RawDisplayer data={contractProps} />
}

const Edition = ({ contractAddress, seo }: CollectionServiceProps) => {
  const { data } = useCollection(contractAddress)
  console.log(data)

  return (
    <PageWrapper direction="column" gap="x4">
      <Seo title={seo.title} description={seo.description} />
      {contractAddress && (
        <EditionsProvider contractAddress={contractAddress}>
          <ProviderData />
        </EditionsProvider>
      )}
    </PageWrapper>
  )
}

export const getServerSideProps = collectionService

export default Edition
