// import { contract } from './contract'
import { BigNumber } from 'ethers'
import merge from 'lodash/merge'
import mapValues from 'lodash/mapValues'

const CONTRACT_PROPS_SCHEMA = {
  config: {
    metadataRenderer: null,
    editionSize: null,
    royaltyBPS: null,
    fundsRecipient: null,
  },
  contractURI: null,
  name: null,
  saleDetails: {
    presaleActive: null,
    publicSaleActive: null,
    publicSaleStart: null,
    publicSaleEnd: null,
    publicSalePrice: null,
    presaleStart: null,
    presaleEnd: null,
    presaleMerkleRoot: null,
    maxSalePurchasePerAddress: null,
    totalMinted: null,
    maxSupply: null,
  },
  symbol: null,
  totalSupply: null,
}

export async function getContractProps(contract) {
  const contractProps = await readContractProps(CONTRACT_PROPS_SCHEMA, contract)
  return merge(contractProps, serializeContractProps({}))
}

const deserialize = (value) => {
  if (typeof value === 'object') {
    if (value.type === 'BigNumber') return BigNumber.from(value)
    return mapValues(value, deserialize)
  }

  return value
}

const serialize = (value) => {
  if (Array.isArray(value)) {
    const stringKeys = Object.keys(value).filter((key) => isNaN(key))

    if (stringKeys.length)
      return Object.fromEntries(stringKeys.map((key) => [key, serialize(value[key])]))

    return value.map((v) => serialize(v))
  }

  if (BigNumber.isBigNumber(value)) return value.toJSON()

  if (typeof value === 'object' && value !== null) return mapValues(value, serialize)

  return value
}

function serializeContractProps(props) {
  return mapValues(props, serialize)
}

async function readContractProps(props, contract) {
  const keys = Object.keys(props)

  const values = await Promise.all(keys.map((name) => contract[name]()))

  const rawProps = Object.fromEntries(keys.map((name, index) => [name, values[index]]))

  return serializeContractProps(rawProps)
}
