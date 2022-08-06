import { Flex, Stack, Label, Eyebrow, Icon, FlexProps } from '@zoralabs/zord'
import { useModal } from '@modal'
import { Link } from 'components/Link'
import { CollectionThumbnail } from '@media/CollectionThumbnail'
import { lightGreyType, leadingTight, lightFont } from 'styles/styles.css'
import { CollectionsData } from 'hooks/zdk/useCollections'
import { useAggregate } from 'hooks/zdk/useAggregate'

export interface CollectionLinkProps extends FlexProps {
  collection: CollectionsData
  onClickHandler: () => void
}

export function CollectionLink({
  collection,
  onClickHandler = () => {},
  ...props
}: CollectionLinkProps) {
  const { aggregate } = useAggregate(collection.address)

  return (
    <Link href={`/collections/${collection.address}`}>
      <Flex
        align="center"
        justify="space-between"
        gap="x4"
        onClick={onClickHandler}
        {...props}
      >
        <Flex align="center" gap="x4">
          <CollectionThumbnail collectionAddress={collection.address} />
          <Stack>
            <Label size="lg" className={leadingTight}>
              {collection.name}
            </Label>
            {aggregate?.aggregateStat?.floorPrice !== null && (
              <Eyebrow className={[lightGreyType, lightFont]}>
                Floor Price: {aggregate?.aggregateStat?.floorPrice} ETH
              </Eyebrow>
            )}
          </Stack>
        </Flex>
        <Flex gap="x2" align="center">
          <Label color="tertiary" className={[lightFont]}>
            {aggregate?.aggregateStat?.nftCount} NFTs
          </Label>
          <Icon id="ChevronRight" color="tertiary" />
        </Flex>
      </Flex>
    </Link>
  )
}
