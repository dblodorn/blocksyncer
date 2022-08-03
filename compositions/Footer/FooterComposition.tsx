import { Flex, FlexProps } from '@zoralabs/zord'
import { PoweredByZora } from '@zora-brand'
import { footerWrapper } from './Footer.css'
import { useWindowWidth } from 'hooks/useWindowWidth'

export interface FooterCompositionProps extends FlexProps {}

export function FooterComposition({ ...props }: FooterCompositionProps) {
  const { isLarge } = useWindowWidth()
  return (
    <Flex as="footer" className={footerWrapper} {...props}>
      <PoweredByZora size={isLarge ? 32 : 28} />
    </Flex>
  )
}
