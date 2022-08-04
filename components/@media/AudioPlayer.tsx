import { Box, BoxProps } from '@zoralabs/zord'

export interface AudioPlayerProps extends BoxProps {
  src?: string
}

export function AudioPlayer({ src, ...props }: AudioPlayerProps) {
  return (
    <Box {...props}>
      <Box as="audio" w="100%" src={src} controls></Box>
    </Box>
  )
}
