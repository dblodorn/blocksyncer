// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ethers } from 'ethers'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { contract } = req.query
  /*
  try {
    const ethersContract = new ethers.Contract(
      contract as string,
      dao.abi,
      new ethers.providers.StaticJsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
    )

    const auction = await ethersContract.auction()

    return res.status(200).json({
      auction: {
        nounId: auction.nounId.toString(),
        amount: auction.amount.toString(),
        startTime: auction.startTime.toString(),
        endTime: auction.endTime.toString(),
        bidder: auction.bidder,
        settled: auction.settled,
      },
    })
  } catch (err) {
    return res.status(403).json({ auction: undefined })
  }
  */
  return res.status(403).json({ contractData: contract })
}

export default handler
