const ADDRESSES = require('../helper/coreAssets.json')

const { sumTokensExport } = require('../helper/unwrapLPs')
const { staking } = require('../helper/staking')

const tokens = [
  '0x136471a34f6ef19fe571effc1ca711fdb8e49f2b', // USYC
  '0x437cc33344a0B27A429f795ff6B469C72698B291',  // wM
  '0xC139190F447e929f090Edeb554D95AbB8b18aC1C', // USDtb
  ADDRESSES.ethereum.WSTETH // wstEth
]

const owners = [
  '0xdd82875f0840AAD58a455A70B88eEd9F59ceC7c7', // treasury
  '0x4Cbc25559DbBD1272EC5B64c7b5F48a2405e6470',  // USUALM
  '0x58073531a2809744D1bF311D30FD76B27D662abB', // USUALUSDtb
  '0xc912B5684a1dF198294D8b931B3926a14d700F64', // treasury ETH0
]


module.exports = {
  methodology: 'TVL represents the value in RWA held by the protocol',
  ethereum: { 
    staking: staking('0x06B964d96f5dCF7Eae9d7C559B09EDCe244d4B8E', '0xc4441c2be5d8fa8126822b9929ca0b81ea0de38e'), // USUAL
    tvl: sumTokensExport({ tokens, owners })}, 
  doublecounted: true 
}