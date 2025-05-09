export const PAGES_NAMES = {
  home: "home",
  packets: "packets",
  materials: "materials",
  labels: "labels",
  printing: "printing",
  film: "film",
  mission: "mission",
  contacts: "contacts",
}

export const PATHS = {
  [PAGES_NAMES.home]: "/",
  [PAGES_NAMES.packets]: "/packets",
  [PAGES_NAMES.materials]: "/materials",
  [PAGES_NAMES.labels]: "/labels",
  [PAGES_NAMES.printing]: "/printing",
  [PAGES_NAMES.film]: "/film",
  [PAGES_NAMES.mission]: "/mission",
  [PAGES_NAMES.contacts]: "/contacts",
}

export const NAV_ITEMS = [
  {
    title: "home",
    href: PATHS[PAGES_NAMES.home],
  },
  {
    title: "packaging",
    children: [
      {
        title: "packets",
        // subLabel: 'package',
        href: PATHS[PAGES_NAMES.packets],
      },
      {
        title: "materials",
        // subLabel: 'materials',
        href: PATHS[PAGES_NAMES.materials],
      },
    ],
  },
  {
    title: "labels",
    href: PATHS[PAGES_NAMES.labels],
  },
  {
    title: "printing",
    href: PATHS[PAGES_NAMES.printing],
  },
  {
    title: "film",
    href: PATHS[PAGES_NAMES.film],
  },
  {
    title: "mission",
    href: PATHS[PAGES_NAMES.mission],
  },
  {
    title: "contacts",
    href: PATHS[PAGES_NAMES.contacts],
  },
]
