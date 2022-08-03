import { Box, BoxProps } from '@zoralabs/zord'
import { cardImageWrapper } from 'components/@media/NftMedia.css'
import { nftPageHero } from './NFTPage.css'
import { useSourceImage } from 'components/@media/hooks/useSrcImage'
import { useNFTProvider } from '@shared/providers/NFTProvider'
import { ImageElement } from 'components'

export interface NFTPageHeroProps extends BoxProps {}

export function NFTPageHero({ ...props }: NFTPageHeroProps) {
  const { initialData: nft, tokenId, contractAddress } = useNFTProvider()
  const { srcImg } = useSourceImage(nft?.media)

  return (
    <Box
      w="100%"
      className={[cardImageWrapper, nftPageHero]}
      backgroundColor="tertiary"
      overflow="hidden"
      {...props}
    >
      {contractAddress && tokenId && <ImageElement src={srcImg} />}
    </Box>
  )
}
