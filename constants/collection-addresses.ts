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
  {
    tokenContract: '0x674fb9ed86b847db9aee0a19e9055d5d2c0e6cc4',
    contractType: 'EDITION',
  },
  {
    tokenContract: '0xf11915f3dc44519a7217f6b1e0978f29f8a0ed4b',
    contractType: 'EDITION',
  },
]

export const collectionAddresses = collections.map<ContractObject>((collection) => ({
  tokenContract: collection.tokenContract.toLowerCase(),
  contractType: collection.contractType,
}))

export const editionAddresses = editions.map<ContractObject>((edition) => ({
  tokenContract: edition.tokenContract.toLowerCase(),
  contractType: edition.contractType,
}))

export const collectionsAddressOnly = collections.map((collection) =>
  collection.tokenContract.toLowerCase()
)

export const editionsAddressOnly = editions.map((edition) =>
  edition.tokenContract.toLowerCase()
)

export const allAddresses = editions.concat(collectionAddresses)

export const allAddressesById = editionsAddressOnly.concat(collectionsAddressOnly)
