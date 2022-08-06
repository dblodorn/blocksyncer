import { Box, BoxProps } from '@zoralabs/zord'
import { cardImageWrapper } from '@media/NftMedia.css'
import { nftPageHero } from './NFTPage.css'
import { useNFTProvider } from '@shared/providers/NFTProvider'
import { MediaRenderer } from '@media/MediaRenderer'

export interface NFTPageHeroProps extends BoxProps {}

export function NFTPageHero({ ...props }: NFTPageHeroProps) {
  const { tokenId, contractAddress } = useNFTProvider()

  return (
    <Box
      w="100%"
      className={[cardImageWrapper, nftPageHero]}
      backgroundColor="tertiary"
      overflow="hidden"
      {...props}
    >
      {contractAddress && tokenId && <MediaRenderer />}
    </Box>
  )
}
