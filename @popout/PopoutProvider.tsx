import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  ReactNode,
} from 'react'
import { Box } from '@zoralabs/zord'
export type PopoutType = string | undefined

export type PopoutState = {
  popoutType?: PopoutType
  popoutOptions?: Record<any, any>
}

export type PopoutContextType = [PopoutState, Dispatch<SetStateAction<PopoutState>>]

export const PopoutContext = createContext<PopoutContextType>([
  { popoutType: undefined },
  () => null,
] as PopoutContextType)

export const PopoutContextProvider = ({ children }: { children: ReactNode }) => {
  const [popoutState, setPopoutState] = useState<PopoutState>({
    popoutType: undefined,
  })

  return (
    <PopoutContext.Provider value={[popoutState, setPopoutState]}>
      <Box
        id="popout-root"
        position="fixed"
        top="x0"
        left="x0"
        style={{ zIndex: 9000 }}
      />
      {children}
    </PopoutContext.Provider>
  )
}
