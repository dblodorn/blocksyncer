import React from 'react'
import { createPortal } from 'react-dom'
import { isClientSide } from 'constants/window'

export const PopoutPortal: React.FC<{}> = ({ children }) => {
  if (!isClientSide) return null

  const el = React.useRef(document.createElement('div'))

  React.useEffect(() => {
    const popoutRoot = document.querySelector('#popout-root') as HTMLElement
    popoutRoot!.appendChild(el.current)
    return () => void popoutRoot!.removeChild(el.current)
  }, [])

  return createPortal(children, el.current)
}
