import { Button, ButtonProps } from '@zoralabs/zord'
import { buttonStyle } from '@market/components/MarketComponents.css'

interface TriggerProps extends ButtonProps {
  cta: string
}

export function CardMarketTrigger({ cta, ...props }: TriggerProps) {
  return (
    <Button as="span" variant="secondary" size="sm" borderRadius="round" {...props}>
      {cta}
    </Button>
  )
}
