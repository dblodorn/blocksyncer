import { useCallback } from 'react'
import { Box, Button, color, BoxProps, Flex } from '@zoralabs/zord'
import { usePopout } from './usePopout'
import { PopoutPortal } from './PopoutPortal'
import { PopoutOverlay } from './PopoutOverlay'
import { motion, AnimatePresence } from 'framer-motion'

export interface PopoutCompositionProps extends BoxProps {
  /** Unique identifier / key for the popout */
  popoutName: string
  /** Content housed inside of popout */
  content: JSX.Element
  /** Contents that will be wrapped by an unstyled button element to open the popout */
  trigger?: JSX.Element
  closeTrigger?: JSX.Element
  /** pixel dimension of popout window (max width) */
  popoutWidth?: string
  bgColor?: string
}

export function PopoutComposition({
  popoutName,
  content,
  trigger,
  closeTrigger,
  popoutWidth = '650px',
  bgColor = '#fff',
  ...props
}: PopoutCompositionProps) {
  const { popoutType, requestClose, requestOpen } = usePopout()

  const popoutHandler = useCallback(() => {
    requestOpen(popoutName)
  }, [])

  return (
    <>
      <Box {...props}>
        <Button variant={!trigger ? 'primary' : 'unset'} onClick={popoutHandler}>
          {trigger ? trigger : `Open ${popoutName}`}
        </Button>
      </Box>
      <PopoutPortal>
        <AnimatePresence>
          {popoutType === popoutName && (
            <>
              <motion.div
                id={`popout-${popoutName}`}
                transition={{ duration: 0.25 }}
                initial={{ transform: `translateX(-${popoutWidth})` }}
                animate={{ transform: `translateX(0px)` }}
                exit={{ transform: `translateX(-${popoutWidth})` }}
                style={{
                  maxWidth: popoutWidth,
                  backgroundColor: bgColor,
                  zIndex: 3000,
                  width: '100%',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  boxShadow: '0 0 25px rgba(0,0,0,.125)',
                  height: '100vh',
                  overflowY: 'scroll',
                }}
              >
                <Flex
                  position="sticky"
                  top="x0"
                  right="x0"
                  pt="x4"
                  pr="x4"
                  style={{
                    zIndex: 10,
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    variant={!closeTrigger ? 'primary' : 'unset'}
                    onClick={requestClose}
                  >
                    {closeTrigger ? closeTrigger : `Close`}
                  </Button>
                </Flex>
                <Box
                  style={{
                    position: 'relative',
                    '@sm': {
                      '&:after': {
                        content: '',
                        position: 'relative',
                        paddingBottom: 'x10',
                        width: '100%',
                        display: 'block',
                      },
                    },
                  }}
                >
                  {content}
                </Box>
              </motion.div>
              <PopoutOverlay popoutName={popoutName} />
            </>
          )}
        </AnimatePresence>
      </PopoutPortal>
    </>
  )
}
