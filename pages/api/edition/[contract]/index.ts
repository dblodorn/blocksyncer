// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ethers } from 'ethers'
import type { NextApiRequest, NextApiResponse } from 'next'
import editionsABI from '@zoralabs/nft-drop-contracts/dist/artifacts/ERC721Drop.sol/ERC721Drop.json'
import editionsMetadata from '@zoralabs/nft-drop-contracts/dist/artifacts/EditionMetadataRenderer.sol/EditionMetadataRenderer.json'
import { EDITIONS_METADATA_RENDERER } from '@editions/constants/addresses'
import { getContractProps } from '@editions'
import { addIPFSGateway } from 'components/@media/utils/addIPFSGateway'

const CONTRACT_METADATA_SCHEMA = {
  description: null,
  imageURI: null,
  animationURI: null,
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { contract } = req.query

  try {
    const editionsContract = new ethers.Contract(
      contract as string,
      editionsABI.abi,
      new ethers.providers.StaticJsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    )

    const metadataContract = new ethers.Contract(
      EDITIONS_METADATA_RENDERER as string,
      editionsMetadata.abi,
      new ethers.providers.StaticJsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    )

    const contractProps = await getContractProps(editionsContract)

    const contractMetadata = await metadataContract.tokenInfos(contract)

    const keys = Object.keys(CONTRACT_METADATA_SCHEMA)
    const parsedMetadata = Object.fromEntries(
      keys.map((name, index) => {
        if (name === 'imageURI' || 'animationURI') {
          return [name, addIPFSGateway(contractMetadata[index])]
        } else {
          return [name, contractMetadata[index]]
        }
      })
    )

    return res.status(200).json({
      contractMetadata: parsedMetadata,
      contractProps: contractProps,
    })
  } catch (err) {
    return res.status(403).json({ auction: undefined })
  }
}

export default handler
