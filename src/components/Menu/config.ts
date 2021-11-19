import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bm.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'Exchange',
        href: 'https://bm.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://bm.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://bm.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://bm.finance/pools',
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '#',
  },
]

export default config
