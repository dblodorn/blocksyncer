import { useMemo } from 'react'
import { Box, BoxProps } from '@zoralabs/zord'
import { useNFTProvider } from '@shared'
import { ImageElement } from 'components'

export interface MediaRendererProps extends BoxProps {}

export function MediaRenderer({ ...props }: MediaRendererProps) {
  const {
    hooksData: { data },
    contractAddress,
    tokenId,
  } = useNFTProvider()

  console.log(data?.content?.mimeType)

  const renderer = useMemo(() => {}, [data?.content?.mimeType])

  if (!data || !contractAddress || !tokenId) return null

  return (
    <Box {...props}>
      <Box
        h="100%"
        style={{ aspectRatio: '1/1' }}
        backgroundColor="tertiary"
        position="relative"
      >
        <ImageElement src={data?.media?.poster?.uri} />
      </Box>
    </Box>
  )
}
