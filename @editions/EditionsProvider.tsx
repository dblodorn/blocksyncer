import { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import useSWR from 'swr'

export type EditionsProps = {
  contractAddress: string
  children?: ReactNode
}

export interface EditionsContextTypes {
  contractAddress?: string
  contractProps?: any
}

const EditionsContext = createContext<EditionsContextTypes>({
  contractAddress: undefined,
  contractProps: undefined,
})

export function useEditionsProvider() {
  return useContext(EditionsContext)
}

export function EditionsProvider({ contractAddress, children }: EditionsProps) {
  const { data } = useSWR(`/api/edition/${contractAddress}`, { refreshInterval: 0 })

  return (
    <EditionsContext.Provider
      value={{
        contractAddress: contractAddress,
        contractProps: data ? data : undefined,
      }}
    >
      {children}
    </EditionsContext.Provider>
  )
}
