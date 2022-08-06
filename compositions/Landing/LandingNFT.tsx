import { Flex, Stack, Heading, Button } from '@zoralabs/zord'
import Link from 'next/link'
import { useNFTProvider } from '@shared'
import { CollectionThumbnail } from '@media/CollectionThumbnail'
import { NFTCardMarket } from '@market'
import { MediaRenderer } from '@media/MediaRenderer'
import { landingNFTRow } from './Landing.css'

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
      direction={{
        '@initial': 'column',
        '@1024': 'row',
      }}
      className={[customClassName, landingNFTRow, 'landing-nft-row']}
    >
      <MediaRenderer style={{ borderRight: 'var(--dashed-border)' }} />
      <Stack gap="x2" mt="x2" px="x4" pb="x4" w="100%" position="relative">
        <Flex align="center" gap="x2" justify="space-between" mt="x3">
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
        <Flex px="x1" py="x2" justify="flex-start">
          <Link href={`/${collectionType}/${contractAddress}/${tokenId}`} passHref>
            <Button as="a" variant="unset">
              <Heading as="h4" size="sm">
                {data?.metadata?.name}
              </Heading>
            </Button>
          </Link>
        </Flex>
        <Flex
          position={{
            '@initial': 'relative',
            '@1024': 'absolute',
          }}
          bottom={{
            '@initial': 'auto',
            '@1024': 'x4',
          }}
        >
          <NFTCardMarket nftData={data} gap="x8" />
        </Flex>
      </Stack>
    </Flex>
  )
}
