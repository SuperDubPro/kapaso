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
  // {
  //   label: 'Find Work',
  //   children: [
  //     {
  //       label: 'Job Board',
  //       subLabel: 'Find your dream design job',
  //       href: PATHS[PAGES_NAMES.home],
  //     },
  //     {
  //       label: 'Freelance Projects',
  //       subLabel: 'An exclusive list for contract work',
  //       href: PATHS[PAGES_NAMES.home],
  //     },
  //   ],
  // },
  {
    label: 'navbar.home',
    href: PATHS[PAGES_NAMES.home],
  },
  {
    label: 'navbar.about',
    href: PATHS[PAGES_NAMES.about],
  },
]

export default NAV_ITEMS
