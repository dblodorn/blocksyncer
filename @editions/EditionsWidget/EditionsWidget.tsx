import { Box, BoxProps } from '@zoralabs/zord'
import { EditionsProvider } from '@editions/EditionsProvider'

export interface EditionsWidgetProps extends BoxProps {
  contractAddress: string
}

export function EditionsWidget({ contractAddress, ...props }: EditionsWidgetProps) {
  return <EditionsProvider contractAddress={contractAddress}></EditionsProvider>
}
