import { Flex, Box, Stack, Heading } from '@zoralabs/zord'
import { useNFTProvider } from '@shared'
import { ImageElement } from 'components'
import { CollectionThumbnail } from 'components'
import Link from 'next/link'
import { NFTCardMarket } from '@market'

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
      <Link href={`/${collectionType}/${contractAddress}/${tokenId}`} passHref>
        <Box
          h="100%"
          style={{ aspectRatio: '1/1' }}
          backgroundColor="tertiary"
          position="relative"
        >
          <ImageElement src={data?.media?.poster?.uri} />
        </Box>
      </Link>
      <Stack gap="x2" mt="x2" px="x4" pb="x4">
        <Heading as="h4" size="sm">
          {data?.metadata?.name}
        </Heading>
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
