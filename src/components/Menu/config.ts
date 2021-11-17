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
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://bm.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.bm.finance/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
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
    label: 'Prediction (BETA)',
    icon: 'PredictionsIcon',
    href: 'https://bm.finance/prediction',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://bm.finance/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://bm.finance/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://bm.finance/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://bm.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://bm.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://bm.finance/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://bm.finance/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://github.com/bmfinance',
      },
      {
        label: 'Voting',
        href: 'https://github.com/bmfinance',
      },
      {
        label: 'Github',
        href: 'https://github.com/bmfinance',
      },
      {
        label: 'Docs',
        href: 'https://github.com/bmfinance',
      },
      {
        label: 'Blog',
        href: 'https://github.com/bmfinance',
      },
      {
        label: 'Merch',
        href: 'https://github.com/bmfinance',
      },
    ],
  },
]

export default config
