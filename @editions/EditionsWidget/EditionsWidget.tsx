import { BoxProps } from '@zoralabs/zord'
import { EditionsProvider } from '@editions/EditionsProvider'
import { EditionsRenderer } from './EditionsRenderer'

export interface EditionsWidgetProps extends BoxProps {
  contractAddress: string
  debug?: boolean
}

export function EditionsWidget({
  contractAddress,
  debug,
  ...props
}: EditionsWidgetProps) {
  return (
    <EditionsProvider contractAddress={contractAddress}>
      <EditionsRenderer {...props} debug={debug} />
    </EditionsProvider>
  )
}
