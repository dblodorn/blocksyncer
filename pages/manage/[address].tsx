import { useMemo } from 'react'
import { PageWrapper } from 'components/PageWrapper'
import { manageNftsService, ManageNFTsServiceProps } from 'services/manageNftsService'
import { allAddressesById } from 'constants/collection-addresses'
import { ManageHeader } from 'components/ManageHeader'
import { Seo } from 'components/Seo'
import { Collections } from 'compositions/Collections'
import { CollectionFilterProvider } from '@filter'
import { color, Separator } from '@zoralabs/zord'

const Manage = ({ ownerAddress }: ManageNFTsServiceProps) => {
  return (
    <PageWrapper direction="column" gap="x4">
      <Seo title={`Manage | ${ownerAddress}`}></Seo>
      <ManageHeader ownerAddress={ownerAddress} />
      {ownerAddress && (
        <CollectionFilterProvider
          ownerAddress={ownerAddress}
          contractWhiteList={allAddressesById}
          useFilterOwnerCollections
        >
          <Collections />
        </CollectionFilterProvider>
      )}
    </PageWrapper>
  )
}

export const getServerSideProps = manageNftsService

export default Manage
