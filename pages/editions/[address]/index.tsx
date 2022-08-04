import { PageWrapper } from 'components/PageWrapper'
import { collectionService, CollectionServiceProps } from 'services/collectionService'
import { Seo } from 'components'
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
