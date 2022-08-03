import { NFTObject } from '@zoralabs/nft-hooks'
import { NFTPageHero, NFTInfoSidebar, NFTAttributes } from 'compositions/NFTPage'
import { Grid, GridProps, Stack } from '@zoralabs/zord'
import {
  attributesHistoryWrapper,
  nftPageWrapper,
} from 'compositions/NFTPage/NFTPage.css'
import { NFTProvider } from '@shared/providers/NFTProvider'

export interface NFTPageTemplateProps extends GridProps {
  initialData: NFTObject | undefined
  tokenAddress: string
  tokenId: string
  customClassname?: any
}

export function NFTPageTemplate({
  initialData,
  tokenAddress,
  tokenId,
  customClassname,
  ...props
}: NFTPageTemplateProps) {
  return (
    <NFTProvider
      initialData={initialData}
      contractAddress={tokenAddress}
      tokenId={tokenId}
    >
      <Grid className={[nftPageWrapper, customClassname]} {...props}>
        <NFTPageHero />
        <NFTInfoSidebar />
        <Stack className={attributesHistoryWrapper}>
          {/*<NFTHistory />*/}
          <NFTAttributes />
        </Stack>
      </Grid>
    </NFTProvider>
  )
}
