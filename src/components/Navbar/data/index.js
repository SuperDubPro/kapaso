import { PAGES_DATA } from '../../../pages'

const { PATHS, PAGES_NAMES } = PAGES_DATA

const NAV_ITEMS = [
  // {
  //   label: 'Inspiration',
  //   children: [
  //     {
  //       label: 'Explore Design Work',
  //       subLabel: 'Trending Design to inspire you',
  //       href: PATHS[PAGES_NAMES.home],
  //     },
  //     {
  //       label: 'New & Noteworthy',
  //       subLabel: 'Up-and-coming Designers',
  //       href: PATHS[PAGES_NAMES.home],
  //     },
  //   ],
  // },
  {
    label: 'navbar.home',
    href: PATHS[PAGES_NAMES.home],
  },
  {
    label: 'navbar.package',
    href: PATHS[PAGES_NAMES.package],
  },
  {
    label: 'navbar.materials',
    href: PATHS[PAGES_NAMES.materials],
  },
  {
    label: 'navbar.labels',
    href: PATHS[PAGES_NAMES.labels],
  },
  {
    label: 'navbar.equipment',
    href: PATHS[PAGES_NAMES.equipment],
  },
  {
    label: 'navbar.about',
    href: PATHS[PAGES_NAMES.about],
  },
  {
    label: 'navbar.contacts',
    href: PATHS[PAGES_NAMES.contacts],
  },
]

export default NAV_ITEMS
