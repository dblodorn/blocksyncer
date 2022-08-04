# ϐׁׅ֒ᥣׁׅ֪ᨵׁׅᝯׁƙׁׅ֑꯱ׁׅ֒ᨮ꫶ׁׅ֮ꪀׁׅᝯׁꫀׁׅܻ᥅

![ׁׅ֒ᥣׁׅ֪ᨵׁׅᝯׁƙׁׅ֑꯱ׁׅ֒ᨮ꫶ׁׅ֮ꪀׁׅᝯׁꫀׁׅܻ᥅](https://db13.mypinata.cloud/ipfs/QmYmeLSKkkes8NH7uM8fJNkdSq7txsHMXZaFmbWQ8cxV6D)

Example repo to render and interact with NFT Editions / ...ꪖꪀᦔ ᭙ꫀꪶꪶ --- any nft on~chain (ETH Mainnet Only). This is tailored to assist in presenting specific contracts specified by the builder and provide a foundation for unique UIs.

The intention here is to expose much of the frontend functionality we have been working on collectively in the context of a fun exploratory project. I'll be adding more features as they come. And expect a general purpose, Zora Official, template very soon.

Examples of styling included with heaps of componentry to provide inspiration.

## Specifying contracts:

```
    export type ContractObject = {
        tokenContract: string
        contractType: 'EDITION' | 'MINTING_CONTRACT'
    }

    const collections: ContractObject[] = [
        {
            tokenContract: '0x4d48138b03Aa25aE6919A4a3901B4e5295F0e8E6',
            contractType: 'MINTING_CONTRACT',
        },
        {
            tokenContract: '0x5BBC122E437A0F418b64454De76A431658C5162B',
            contractType: 'MINTING_CONTRACT',
        },
        {
            tokenContract: '0xf68CC00F5bF70bD39542D2E2dee3F718733408D9',
            contractType: 'MINTING_CONTRACT',
        },
        {
            tokenContract: '0xfd05b04a0040325C0D975B89F6F3AeB188FB1fBD',
            contractType: 'MINTING_CONTRACT',
        },
    ]

    const editions: ContractObject[] = [
        {
            tokenContract: '0x77927bedd1e19d10405ce787eed3e96dc1d048b6',
            contractType: 'EDITION',
        },
        {
            tokenContract: '0x02238b7ac19b331780fddb8d002a501a2631d3e2',
            contractType: 'EDITION',
        },
        {
            tokenContract: '0xb7a791c3b5a0aa833e638250f982ebd29194f02c',
            contractType: 'EDITION',
        },
    ]
```

## About

Much of the code in this repo is the product of the amazing work done accross the teams at [@ourzora](https://github.com/ourzora/zora-co). From protocol to backend to frontend and product this ecosystem is ꪀׁׅꫀׁׅܻ᥊ׁׅtׁׅ ᥣׁׅ֪ꫀׁׅܻ᥎꫶ׁׅꫀׁׅܻᥣׁׅ֪.

The goal of this repo

Use it as a template, enjoy, have a play.

Any and all feedback is welcome, as we develop these frontends we aim to minimize the friction against υׁׅꪀׁׅhׁׅ֮ꪱׁׅꪀׁׅժׁׅ݊ꫀׁׅܻrꫀׁׅܻժׁׅ݊ ᝯׁrꫀׁׅܻɑׁׅ֮tׁׅꪱׁׅᨵׁׅꪀׁׅ

## Features

[ ] List and Sell Tokens with Zora V3 Asks  
[ ] Mint off of edition contracts deployed with Zora Creator Toolkit.

```
    THE STACK

    "@zoralabs/nft-hooks"
    "@zoralabs/v3"
    "@zoralabs/zdk"
    "@zoralabs/zord"
    "@zoralabs/nft-drop-contracts"

    &&&
    "@rainbow-me/rainbowkit"
    "wagmi"

```
