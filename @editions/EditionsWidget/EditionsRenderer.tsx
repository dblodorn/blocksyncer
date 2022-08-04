import { Box, BoxProps, Button, Flex, Stack, Icon } from '@zoralabs/zord'
import { RawDisplayer } from 'components/utils'
import { useEditionsProvider } from '@editions/EditionsProvider'
import { ModalComposition } from '@modal'
import { ImageElement } from 'components'

export interface EditionsRendererProps extends BoxProps {
  debug?: boolean
}

export function EditionsRenderer({ debug, ...props }: EditionsRendererProps) {
  const { contractProps, contractAddress } = useEditionsProvider()

  return (
    <Box {...props} w="100%">
      <Flex h="100%" w="100%" position="relative">
        <>
          {contractProps ? (
            <>
              <Box
                h="100%"
                style={{
                  aspectRatio: '1/1',
                  backgroundColor: 'var(--syncer-yellow)',
                  borderRight: 'var(--dashed-border)',
                }}
                backgroundColor="tertiary"
                position="relative"
                className="media-renderer"
              >
                <ImageElement src={contractProps?.contractMetadata?.imageURI} />
              </Box>
              {debug && (
                <Box position="absolute" bottom="x3" right="x3">
                  <ModalComposition
                    modalName={`${contractAddress}-debug`}
                    trigger={
                      <Button as="div" size="sm" variant="secondary" borderRadius="round">
                        DEBUG
                      </Button>
                    }
                    content={<RawDisplayer data={contractProps} />}
                  />
                </Box>
              )}
            </>
          ) : (
            <Stack
              h="100%"
              justify="center"
              align="center"
              p="x4"
              style={{ aspectRatio: '1/1' }}
            >
              <Icon id="Spinner" size="md" />
            </Stack>
          )}
        </>
      </Flex>
    </Box>
  )
}
