import { Button, ButtonProps } from '@zoralabs/zord'
import { buttonStyle } from '@market/components/MarketComponents.css'

interface TriggerProps extends ButtonProps {
  cta: string
}

export function CardMarketTrigger({ cta, ...props }: TriggerProps) {
  return (
    <Button as="span" {...props}>
      {cta}
    </Button>
  )
}
