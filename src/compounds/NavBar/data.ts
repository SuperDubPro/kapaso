export const PAGES_NAMES = {
  home: "home",
  about: "about",
  packets: "packets",
  materials: "materials",
  labels: "labels",
  printing: "printing",
  equipment: "equipment",
  contacts: "contacts",
}

export const PATHS = {
  [PAGES_NAMES.home]: "/",
  [PAGES_NAMES.about]: "/about",
  [PAGES_NAMES.packets]: "/packets",
  [PAGES_NAMES.materials]: "/materials",
  [PAGES_NAMES.labels]: "/labels",
  [PAGES_NAMES.printing]: "/printing",
  [PAGES_NAMES.equipment]: "/equipment",
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
    title: "equipment",
    href: PATHS[PAGES_NAMES.equipment],
  },
  {
    title: "about",
    href: PATHS[PAGES_NAMES.about],
  },
  {
    title: "contacts",
    href: PATHS[PAGES_NAMES.contacts],
  },
]
