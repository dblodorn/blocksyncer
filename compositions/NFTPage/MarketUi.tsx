import { NFTCardMarket } from '@market'
import { NFTObject } from '@zoralabs/nft-hooks'
import { nftMarketWrapper } from './NFTPage.css'

export function MarketUi({
  contractAddress,
  tokenId,
  nft,
}: {
  contractAddress: string
  tokenId: string
  nft: NFTObject
}) {
  return (
    <NFTCardMarket
      className={nftMarketWrapper}
      nftData={nft}
      p="x4"
      align="flex-start"
      direction="column"
    />
  )
}
