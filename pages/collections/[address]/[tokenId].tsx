import { PageWrapper, Seo } from 'components'
import { nftService } from 'services/nftService'
import { NFTObject } from '@zoralabs/nft-hooks'
import { NFTPageTemplate } from 'compositions/NFTPage'

const NFT = ({
  nft,
  tokenAddress,
  tokenId,
}: {
  nft: NFTObject | undefined
  tokenAddress: string
  tokenId: string
}) => {
  return (
    <PageWrapper
      direction="column"
      style={{ backgroundColor: 'var(--collection-background-color)' }}
    >
      <Seo
        title={nft?.metadata?.name}
        description={nft?.metadata?.description}
        ogImage={nft?.media?.poster?.uri}
      />
      <NFTPageTemplate
        initialData={nft}
        tokenAddress={tokenAddress}
        tokenId={tokenId}
        /* Styling */
        my="x8"
      />
    </PageWrapper>
  )
}

export const getServerSideProps = nftService

export default NFT
