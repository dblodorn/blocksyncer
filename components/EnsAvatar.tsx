import { Flex, FlexProps, Box } from '@zoralabs/zord'
import { useEnsAvatar } from 'wagmi'
import { fullSizeImage } from 'styles/styles.css'
import { Zorb } from '@zora-brand'

export interface EnsAvatarProps extends FlexProps {
  address: string
}

export function EnsAvatar({ address, ...props }: EnsAvatarProps) {
  const { data: ensAvatar } = useEnsAvatar({
    addressOrName: address,
  })

  return (
    <Flex
      w="x7"
      h="x7"
      borderRadius="round"
      overflow="hidden"
      position="relative"
      backgroundColor="tertiary"
      {...props}
    >
      {ensAvatar ? (
        <Box as="img" src={ensAvatar} className={fullSizeImage} />
      ) : (
        <Box className={fullSizeImage}>
          <Zorb size="100%" address={address} />
        </Box>
      )}
    </Flex>
  )
}
