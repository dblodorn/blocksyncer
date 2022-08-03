import PreventOutsideScroll from 'react-prevent-outside-scroll'
import { usePopout } from './usePopout'
import { Box } from '@zoralabs/zord'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)

export function PopoutOverlay({ popoutName }: { popoutName: string }) {
  const { popoutType } = usePopout()

  return (
    <AnimatePresence>
      {popoutName === popoutType && (
        <PreventOutsideScroll>
          <MotionBox
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 1000,
              backdropFilter: 'blur(5px)',
            }}
          />
        </PreventOutsideScroll>
      )}
    </AnimatePresence>
  )
}
