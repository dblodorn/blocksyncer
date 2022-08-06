import { ethers } from 'ethers'
import type { NextApiRequest, NextApiResponse } from 'next'
import editionsABI from '@zoralabs/nft-drop-contracts/dist/artifacts/ERC721Drop.sol/ERC721Drop.json'
import editionsMetadata from '@zoralabs/nft-drop-contracts/dist/artifacts/EditionMetadataRenderer.sol/EditionMetadataRenderer.json'
import { getContractProps } from '@editions'
import { addIPFSGateway } from '@media/utils/addIPFSGateway'

const CONTRACT_METADATA_SCHEMA = {
  description: null,
  imageURI: null,
  animationURI: null,
}

type CONTRACT_METADATA_PROPS =
  | {
      description: string
      imageURI: string
      animationURI: string
    }
  | undefined

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { contract } = req.query

  try {
    const editionsContract = new ethers.Contract(
      contract as string,
      editionsABI.abi,
      new ethers.providers.StaticJsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    )

    const contractProps = await getContractProps(editionsContract)

    let contractMetadata: any

    try {
      const metadataContract = new ethers.Contract(
        contractProps.config.metadataRenderer as string,
        editionsMetadata.abi,
        new ethers.providers.StaticJsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
      )

      const contractMetadataResponse = await metadataContract.tokenInfos(contract)

      const keys = Object.keys(CONTRACT_METADATA_SCHEMA)

      if (contractMetadataResponse !== undefined) {
        contractMetadata = Object.fromEntries(
          keys.map((name, index) => {
            if (name === 'imageURI' || 'animationURI') {
              return [name, addIPFSGateway(contractMetadataResponse[index])]
            } else {
              return [name, contractMetadataResponse[index]]
            }
          })
        )
      }
    } catch (err) {
      console.error(err)
    }

    return res.status(200).json({
      contractMetadata: contractMetadata,
      contractProps: contractProps,
    })
  } catch (err) {
    return res.status(403).json({ auction: undefined })
  }
}

export default handler
