import { BoxProps } from '@zoralabs/zord'
import { EditionsProvider } from '@editions/EditionsProvider'
import { EditionsRenderer } from './EditionsRenderer'

export interface EditionsWidgetProps extends BoxProps {
  contractAddress: string
}

export function EditionsWidget({ contractAddress, ...props }: EditionsWidgetProps) {
  return (
    <EditionsProvider contractAddress={contractAddress}>
      <EditionsRenderer {...props} />
    </EditionsProvider>
  )
}
