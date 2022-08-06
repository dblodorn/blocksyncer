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
import { AudioPlayer } from '@media-player'
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
    <Stack p="x4" gap="x2" w="100%" overflowX="hidden">
      {name && (
        <Heading
          as="h2"
          size="md"
          style={{ overflowWrap: 'break-word', hyphens: 'auto', wordWrap: 'break-word' }}
        >
          {name}
        </Heading>
      )}
      {description && (
        <Paragraph
          as="p"
          display={{
            '@initial': 'none',
            '@1024': 'inline',
          }}
          style={{ overflowWrap: 'break-word', hyphens: 'auto', wordWrap: 'break-word' }}
        >
          {description}
        </Paragraph>
      )}
      {children}
    </Stack>
  )
}

export function EditionsRenderer({ debug, ...props }: EditionsRendererProps) {
  const { contractProps, contractAddress } = useEditionsProvider()

  return (
    <Box {...props} w="100%">
      <Flex
        w="100%"
        position="relative"
        direction={{
          '@initial': 'column',
          '@1024': 'row',
        }}
        h={{
          '@initial': 'auto',
          '@1024': '100%',
        }}
      >
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
                <Box
                  px="x4"
                  pb="x4"
                  position={{
                    '@initial': 'relative',
                    '@1024': 'absolute',
                  }}
                  bottom={{
                    '@initial': 'auto',
                    '@1024': 'x0',
                  }}
                  right={{
                    '@initial': 'auto',
                    '@1024': 'x0',
                  }}
                >
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
