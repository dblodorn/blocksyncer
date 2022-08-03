import { useState } from 'react'
import { Box, Icon, Button, Stack, color, BoxProps } from '@zoralabs/zord'
import { ModalComposition } from '@modal'
import { useCollectionsContext } from 'providers/CollectionsProvider'
import { modalWrapper } from './CollectionMenu.css'
import { noTextWrap } from 'styles/styles.css'
import { CollectionNavList } from './CollectionNavList'
import { HorizontalMenu } from 'components'
import { collectionTrigger } from './CollectionMenu.css'
import { useModal } from '@modal'

enum tabs {
  EDITIONS = 'Editions',
  COLLECTIONS = 'Collections',
}

export interface PopoverMenuProps extends BoxProps {}

export function PopoverMenu({ ...props }: PopoverMenuProps) {
  const {
    collections,
    collectionAmount,
    editions,
    editionsAmount,
    currentCollection,
    currentCollectionCount,
  } = useCollectionsContext()

  const [tab, setTab] = useState<string>(tabs.EDITIONS)

  const { requestClose } = useModal()

  const menuCategories = [
    {
      id: tabs.EDITIONS,
      label: tabs.EDITIONS,
      items: editions,
      count: editionsAmount,
    },
    {
      id: tabs.COLLECTIONS,
      label: tabs.COLLECTIONS,
      items: collections,
      count: collectionAmount,
    },
  ]

  return (
    <ModalComposition
      modalName={`collections-menu`}
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
          {currentCollection}
          {currentCollectionCount ? ` ${currentCollectionCount}` : null}
          <Icon id="ChevronDown" size="md" color="secondary" />
        </Button>
      }
      content={
        <Box p="x8">
          <Stack as="menu" gap="x6" className={modalWrapper}>
            <HorizontalMenu
              items={menuCategories}
              setId={setTab}
              currentId={tab}
              position="sticky"
              top="x0"
              backgroundColor="primary"
              style={{
                borderBottom: `1px solid ${color.black10}`,
                zIndex: 100,
              }}
            />
            {menuCategories.map((category) => (
              <CollectionNavList
                key={category.id}
                items={category.items}
                display={category.id === tab ? 'flex' : 'none'}
                onClickHandler={requestClose}
              />
            ))}
          </Stack>
        </Box>
      }
    />
  )
}
