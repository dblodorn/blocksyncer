import { useMemo } from 'react'
import { Box, BoxProps } from '@zoralabs/zord'
import { useNFTProvider } from '@shared'
import { AudioPlayer } from '@media-player'
import { ImageElement } from 'components'

export interface MediaRendererProps extends BoxProps {}

export function MediaRenderer({ ...props }: MediaRendererProps) {
  const {
    hooksData: { data },
    contractAddress,
    tokenId,
  } = useNFTProvider()

  const renderer = useMemo(() => {
    const mimeType = data?.content?.mimeType
    if (mimeType) {
      if (mimeType.startsWith('audio')) {
        return (
          <AudioPlayer
            src={data?.content?.large?.uri}
            style={{ zIndex: 100 }}
            position="absolute"
            bottom="x0"
            left="x0"
            h="x16"
            px="x2"
            pb="x2"
            w="100%"
          />
        )
      }
    }
  }, [data?.content?.mimeType])

  if (!data || !contractAddress || !tokenId) return null

  return (
    <Box {...props} position="relative">
      <Box
        h="100%"
        style={{ aspectRatio: '1/1' }}
        backgroundColor="tertiary"
        position="relative"
        className="media-renderer"
      >
        {renderer}
        <ImageElement src={data?.media?.poster?.uri} />
      </Box>
    </Box>
  )
}
