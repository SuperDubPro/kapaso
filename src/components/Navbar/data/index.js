import { PAGES_DATA } from '../../../pages'

const { PATHS, PAGES_NAMES } = PAGES_DATA

const NAV_ITEMS = [
  {
    label: 'navbar.home',
    href: PATHS[PAGES_NAMES.home],
  },
  {
    label: 'navbar.packaging',
    children: [
      {
        label: 'navbar.packets',
        // subLabel: 'navbar.package',
        href: PATHS[PAGES_NAMES.packets],
      },
      {
        label: 'navbar.materials',
        // subLabel: 'navbar.materials',
        href: PATHS[PAGES_NAMES.materials],
      },
    ],
  },
  {
    label: 'navbar.labels',
    href: PATHS[PAGES_NAMES.labels],
  },
  {
    label: 'navbar.printing',
    href: PATHS[PAGES_NAMES.printing],
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
