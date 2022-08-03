import { ConnectButton as RKConnectButton } from '@rainbow-me/rainbowkit'
import { Button, Flex, Box, Icon, FlexProps } from '@zoralabs/zord'
import { hideMobile, noTextWrap } from 'styles/styles.css'
import { EnsAvatar } from 'components'
import { connectButtonWrapper } from './Header.css'

export interface ConnectButtonProps extends FlexProps {}

export const ConnectButton = ({ ...props }: ConnectButtonProps) => {
  return (
    <Flex {...props} className={[connectButtonWrapper, 'connect-button-wrapper']}>
      <RKConnectButton.Custom>
        {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
          return (
            <div
              {...(!mounted && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!mounted || !account || !chain) {
                  return (
                    <Button
                      size="sm"
                      px="x4"
                      onClick={openConnectModal}
                      borderRadius="round"
                      style={{
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Connect Wallet
                    </Button>
                  )
                }
                return (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={openAccountModal}
                    type="button"
                    borderRadius="round"
                    style={{
                      gap: 8,
                      minWidth: 0,
                      height: 42,
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  >
                    <EnsAvatar address={account.address} />
                    <Box as="span" className={[hideMobile, noTextWrap]}>
                      {account.displayName}
                    </Box>{' '}
                    <Icon id="ChevronDown" />
                  </Button>
                )
              })()}
            </div>
          )
        }}
      </RKConnectButton.Custom>
    </Flex>
  )
}
