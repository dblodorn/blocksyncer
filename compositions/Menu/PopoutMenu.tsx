import { Button, ButtonProps, Box, Icon, Stack, Heading } from '@zoralabs/zord'
import { PopoutComposition } from '@popout'
import { collectionTrigger } from './CollectionMenu.css'
import { noTextWrap } from 'styles/styles.css'
import { MENU_CTA } from 'constants/strings'
import { useCollectionsContext } from 'providers'
import { CollectionNavList } from './CollectionNavList'
import { usePopout } from '@popout/usePopout'

export interface PopoutMenuProps extends ButtonProps {}

export function PopoutMenu({ ...props }: PopoutMenuProps) {
  const { collections, collectionAmount, editions, editionsAmount } =
    useCollectionsContext()

  const { requestClose } = usePopout()

  return (
    <PopoutComposition
      trigger={
        <Button
          as="span"
          size="md"
          variant="secondary"
          borderRadius="round"
          display="flex"
          w="100%"
          className={[collectionTrigger, noTextWrap]}
          style={{
            height: 42,
            paddingLeft: 16,
            paddingRight: 16,
            gridGap: 10,
          }}
        >
          {MENU_CTA}
        </Button>
      }
      closeTrigger={
        <Box>
          <Icon id="Close" size="xl" />
        </Box>
      }
      content={
        <Stack mt="x4" gap="x4">
          {collectionAmount > 0 && (
            <Stack gap="x4" px="x4">
              <Heading as="h1" size="md">
                Collections
              </Heading>
              <CollectionNavList items={collections} onClickHandler={requestClose} />
            </Stack>
          )}
          {editionsAmount > 0 && (
            <Stack gap="x4" px="x4">
              <Heading as="h1" size="md">
                Editions
              </Heading>
              <CollectionNavList items={editions} onClickHandler={requestClose} />
            </Stack>
          )}
        </Stack>
      }
      popoutName={'main-menu'}
      bgColor={'var(--menu-bg-color'}
    />
  )
}
