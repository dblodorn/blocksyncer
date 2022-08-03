import { Stack, StackProps } from '@zoralabs/zord'
import { CollectionLink } from './CollectionLink'

interface CollectionNavListProps extends StackProps {
  items: any[]
  onClickHandler?: () => void
}

export function CollectionNavList({
  items,
  onClickHandler = () => {},
  ...props
}: CollectionNavListProps) {
  return (
    <Stack gap="x4" {...props}>
      {items.map((collection) => (
        <CollectionLink
          key={`${collection.address}-${collection.name}r`}
          collection={collection}
          onClickHandler={onClickHandler}
        />
      ))}
    </Stack>
  )
}
