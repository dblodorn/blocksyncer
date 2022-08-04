import { Box, BoxProps } from '@zoralabs/zord'
import { RawDisplayer } from 'components/utils'
import { useEditionsProvider } from '@editions/EditionsProvider'

export interface EditionsRendererProps extends BoxProps {}

export function EditionsRenderer({ ...props }: EditionsRendererProps) {
  const { contractProps } = useEditionsProvider()

  return (
    <Box {...props}>
      <RawDisplayer data={contractProps} />
    </Box>
  )
}
