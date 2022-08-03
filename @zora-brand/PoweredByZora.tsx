import { Flex, Label, Button } from '@zoralabs/zord'
import { Zorb, ZorbProps } from './Zorb'
import { zoraTagline, zoraBrand } from './ZoraBrand.css'

export function PoweredByZora({ ...props }: ZorbProps) {
  return (
    <Flex
      variant="unset"
      as="a"
      display="flex"
      direction="row"
      justify="flex-start"
      align="center"
      gap="x3"
      href="https://zora.co"
      target="_blank"
      rel="noreferrer"
    >
      <Zorb {...props} />
      <Flex>
        <Label size="md" className={[zoraTagline, 'light-font']}>
          POWERED BY
        </Label>
        <Label size="md" textTransform="uppercase" className={zoraBrand}>
          &nbsp;ZORA
        </Label>
      </Flex>
    </Flex>
  )
}
