import { Stack, StackProps, Heading } from '@zoralabs/zord'
import { useNFTProvider } from '@shared'
import { nftMarketWrapper } from './NFTPage.css'

export interface NFTHistoryProps extends StackProps {}

export function NFTHistory({ ...props }: NFTHistoryProps) {
  const { contractAddress, tokenId } = useNFTProvider()

  return (
    <Stack
      {...props}
      px={{
        '@initial': 'x4',
        '@1024': 'x0',
      }}
    >
      <Stack className={nftMarketWrapper}>
        <Heading as="h3">History</Heading>
      </Stack>
    </Stack>
  )
}
