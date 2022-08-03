import { Flex, Stack, Box, Text, color } from '@zoralabs/zord'
import { useEnsName } from 'wagmi'
import { useShortAddress } from 'hooks/useShortAddress'
import { AddressWithLink } from '@market'
import { textCenter, pageHeadline } from 'styles/styles.css'
import { EnsAvatar } from './EnsAvatar'

export function ManageHeader({ ownerAddress }: { ownerAddress: string }) {
  const { data: ensName } = useEnsName({
    address: ownerAddress,
  })

  const shortAddress = useShortAddress(ownerAddress)

  return (
    <Flex
      gap="x4"
      px="x4"
      align="center"
      style={{
        borderBottom: `1px solid ${color.black50}`,
      }}
    >
      <Box px="x6" h="100%">
        <EnsAvatar height="x28" w="x28" address={ownerAddress} />
      </Box>
      <Stack
        py="x6"
        pl="x4"
        position="relative"
        style={{
          borderLeft: `1px solid ${color.black50}`,
        }}
      >
        <Text className={[textCenter, pageHeadline]} as="h1">
          {ensName ? ensName : shortAddress}
        </Text>
        <AddressWithLink
          address={ownerAddress}
          useEns={false}
          backgroundColor="secondary"
          px="x4"
          py="x2"
          borderRadius="curved"
        />
      </Stack>
    </Flex>
  )
}
