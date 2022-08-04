import {
  Box,
  BoxProps,
  Button,
  Flex,
  Stack,
  Icon,
  Heading,
  Paragraph,
} from '@zoralabs/zord'
import { RawDisplayer } from 'components/utils'
import { useEditionsProvider } from '@editions/EditionsProvider'
import { ModalComposition } from '@modal'
import { ImageElement } from 'components'
import { AudioPlayer } from 'components/@media/AudioPlayer'
import { ReactNode } from 'react'

export interface EditionsRendererProps extends BoxProps {
  debug?: boolean
}

export function EditionInfo({
  description,
  name,
  children,
}: {
  description?: string
  name?: string
  children?: ReactNode
}) {
  return (
    <Stack p="x4" gap="x2">
      {name && (
        <Heading as="h1" size="md">
          {name}
        </Heading>
      )}
      {description && <Paragraph>{description}</Paragraph>}
      {children}
    </Stack>
  )
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
              <EditionInfo
                description={contractProps?.contractMetadata?.description}
                name={contractProps?.contractProps?.name}
              >
                <AudioPlayer src={contractProps?.contractMetadata?.animationURI} />
              </EditionInfo>
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
