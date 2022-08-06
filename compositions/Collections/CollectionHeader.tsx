import { Stack, Paragraph, GridProps, Grid, Flex } from '@zoralabs/zord'
import {
  Collection,
  CollectionStatsAggregateQuery,
} from '@zoralabs/zdk/dist/queries/queries-sdk'
import { AddressWithLink } from '@market'
import { PageHeader } from '../../components/PageHeader'
import { clickAnimation, collectionHeaderWrapper } from 'styles/styles.css'
import { CollectionThumbnail } from '@media/CollectionThumbnail'

export interface CollectionHeaderProps extends GridProps {
  collection: Collection
  aggregateStats: CollectionStatsAggregateQuery
  children?: JSX.Element
  currentAuction?: JSX.Element | null
}

export function CollectionHeader({
  collection,
  aggregateStats,
  children,
  currentAuction,
  ...props
}: CollectionHeaderProps) {
  return (
    <Grid className={[collectionHeaderWrapper, 'collections-header-wrapper']} {...props}>
      <Stack align="center" gap="x4">
        <Stack
          gap="x2"
          px={{
            '@initial': 'x4',
            '@1024': 'x0',
          }}
        >
          <Grid
            align="center"
            pt={{
              '@initial': 'x6',
              '@1024': 'x0',
            }}
          >
            <CollectionThumbnail collectionAddress={collection.address} m="auto" />
            <PageHeader
              headline={collection.name}
              copy={`${aggregateStats.aggregateStat.nftCount} NFTs`}
              align="center"
              px="x4"
            />
          </Grid>
          <Flex w="100%" justify="center">
            <AddressWithLink
              address={collection.address}
              useEns={false}
              className={clickAnimation}
              backgroundColor="tertiary"
              px="x4"
              py="x2"
              borderRadius="curved"
              mt="x2"
              mb="x2"
            />
          </Flex>
          {collection.description !== "''" && collection.description && (
            <Paragraph>{collection.description}</Paragraph>
          )}
        </Stack>
        <Flex w="100%" justify="center">
          {children}
        </Flex>
      </Stack>
    </Grid>
  )
}
