import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x2EC59ea306593dd0cC79E65E804b259fB9791C1C',
  [ChainId.BSCTESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A' // TODO
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
