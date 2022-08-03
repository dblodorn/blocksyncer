import { PageWrapper, Seo } from 'components'
import { nftService } from 'services/nftService'
import { NFTObject } from '@zoralabs/nft-hooks'
import {
  NFTPageHero,
  NFTInfoSidebar,
  NFTAttributes,
  NFTHistory,
} from 'compositions/NFTPage'
import { Grid, Stack } from '@zoralabs/zord'
import {
  attributesHistoryWrapper,
  nftPageWrapper,
} from 'compositions/NFTPage/NFTPage.css'
import { NFTProvider } from '@shared/providers/NFTProvider'

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
    <PageWrapper direction="column">
      <Seo
        title={nft?.metadata?.name}
        description={nft?.metadata?.description}
        ogImage={nft?.media?.poster?.uri}
      />
      <NFTProvider initialData={nft} contractAddress={tokenAddress} tokenId={tokenId}>
        <Grid className={nftPageWrapper}>
          <NFTPageHero />
          <NFTInfoSidebar />
          <Stack className={attributesHistoryWrapper}>
            <NFTHistory />
            <NFTAttributes />
          </Stack>
        </Grid>
      </NFTProvider>
    </PageWrapper>
  )
}

export const getServerSideProps = nftService

export default NFT
