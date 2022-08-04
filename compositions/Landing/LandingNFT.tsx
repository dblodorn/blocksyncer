import { Flex, Box, Stack, Heading } from '@zoralabs/zord'
import { useNFTProvider } from '@shared'
import { ImageElement } from 'components'
import { CollectionThumbnail } from 'components'
import Link from 'next/link'
import { NFTCardMarket } from '@market'
import { MediaRenderer } from 'components/@media/MediaRenderer'

export function LandingNFT({
  collectionType,
  customClassName,
}: {
  collectionType?: 'editions' | 'collections'
  customClassName?: any
}) {
  const {
    hooksData: { data },
    contractAddress,
    tokenId,
  } = useNFTProvider()

  if (!data || !contractAddress || !tokenId) return null

  return (
    <Flex
      w="100%"
      position="relative"
      overflow="hidden"
      style={{ height: 350 }}
      className={[customClassName, 'landing-nft-row']}
    >
      <MediaRenderer />
      <Stack gap="x2" mt="x2" px="x4" pb="x4">
        <Link href={`/${collectionType}/${contractAddress}/${tokenId}`} passHref>
          <Heading as="h4" size="sm">
            {data?.metadata?.name}
          </Heading>
        </Link>
        <Flex align="center" gap="x2" justify="space-between">
          <Link href={`/${collectionType}/${contractAddress}`}>
            <Flex align="center" gap="x2">
              <CollectionThumbnail
                collectionAddress={contractAddress}
                radius="round"
                size="xs"
              />
              <Heading size="xs">{data?.nft?.contract.name}</Heading>
            </Flex>
          </Link>
        </Flex>
        {collectionType === 'collections' && <NFTCardMarket nftData={data} />}
      </Stack>
    </Flex>
  )
}
