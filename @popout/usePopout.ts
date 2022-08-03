import { PopoutContext, PopoutContextType, PopoutType } from './PopoutProvider'
import { useCallback, useContext } from 'react'

export function usePopout() {
  const [state, setState] = useContext<PopoutContextType>(PopoutContext)
  const { popoutType, popoutOptions = {} } = state

  const handleSetPopoutOptions = useCallback(
    (update: any) => {
      setState((prev) => ({ ...prev, options: { ...prev?.popoutOptions, ...update } }))
    },
    [setState]
  )

  const requestClose = useCallback(async () => {
    setState({ popoutType: undefined, popoutOptions: {} })
  }, [setState])

  const requestOpen = useCallback(
    async (nextPopoutType: PopoutType, options?: { [key: string]: any }) => {
      if (nextPopoutType === popoutType) {
        return
      }
      return setState({
        popoutType: nextPopoutType,
        ...(options && { popoutOptions: options }),
      })
    },
    [popoutType, setState]
  )

  const setPopoutType = useCallback(
    (popoutType: PopoutType) => setState({ popoutType }),
    [setState]
  )

  return {
    popoutType,
    setPopoutType,
    popoutOptions,
    setPopoutOptions: handleSetPopoutOptions,
    requestClose,
    requestOpen,
  }
}
