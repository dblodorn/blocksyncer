import { ReactNode } from 'react'
import { createContext, useContext } from 'react'
import { useContractRead, useContractWrite, useSigner, useAccount } from 'wagmi'
import { EDITIONS_METADATA_RENDERER } from './constants/addresses'
import editionsABI from '@zoralabs/nft-drop-contracts/dist/artifacts/ERC721Drop.sol/ERC721Drop.json'
import editionsMetadata from '@zoralabs/nft-drop-contracts/dist/artifacts/EditionMetadataRenderer.sol/EditionMetadataRenderer.json'

export type EditionsProps = {
  contractAddress: string
  children?: ReactNode
}

export interface EditionsContextTypes {
  contractAddress?: string
  totalSupplyData?: any
  salesConfig?: any
  contractMetadata?: any
}

const EditionsContext = createContext<EditionsContextTypes>({
  contractAddress: undefined,
  totalSupplyData: undefined,
  contractMetadata: undefined,
  salesConfig: undefined,
})

export function useEditionsProvider() {
  return useContext(EditionsContext)
}

export function EditionsProvider({ contractAddress, children }: EditionsProps) {
  const { data: signer } = useSigner()
  const { address } = useAccount()

  const { data: totalSupplyData } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: editionsABI.abi,
    functionName: 'totalSupply',
    args: [],
    watch: true,
    onError(error) {
      console.error('error: ', error)
    },
    onSuccess(data) {
      console.log('success! --> ', totalSupplyData)
    },
  })

  const { data: contractMetadata } = useContractRead({
    addressOrName: EDITIONS_METADATA_RENDERER,
    contractInterface: editionsMetadata.abi,
    functionName: 'tokenInfos',
    args: [contractAddress],
    watch: true,
    onError(error) {
      console.error('error::', error)
    },
    onSuccess(data) {
      console.log('success::', totalSupplyData)
    },
  })

  const { data: salesConfig } = useContractRead({
    addressOrName: contractAddress as string,
    contractInterface: editionsABI.abi,
    functionName: 'salesConfig',
    watch: true,
    onError(error) {
      console.error('error::', error)
    },
    onSuccess(data) {
      console.log('success::', totalSupplyData)
    },
  })

  /* @ts-ignore */
  const {
    isError,
    isLoading,
    isSuccess,
    data: successMsg,
    error: writeContractError,
    write: mintEdition,
  } = useContractWrite({
    addressOrName: contractAddress as string,
    contractInterface: editionsABI.abi,
    signerOrProvider: signer,
    functionName: 'purchase',
    /*
    args: [
      mintQuantity.queryValue
    ],
    overrides: {
      value: mintValue
    },
    */
    args: [contractAddress],
  })

  return (
    <EditionsContext.Provider
      value={{
        contractAddress: contractAddress,
        totalSupplyData: totalSupplyData,
        salesConfig: salesConfig,
        contractMetadata: contractMetadata,
      }}
    >
      {children}
    </EditionsContext.Provider>
  )
}
