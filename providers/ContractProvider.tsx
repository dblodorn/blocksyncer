import { createContext, useContext, ReactNode } from 'react'

export type ContractProps = {
  children: ReactNode
}

const ContractContext = createContext<{}>({})

export function useContractProvider() {
  return useContext(ContractContext)
}

export function ContractProvider({ children }: ContractProps) {
  return <ContractContext.Provider value={{}}>{children}</ContractContext.Provider>
}
