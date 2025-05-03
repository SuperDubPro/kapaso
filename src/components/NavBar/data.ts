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
    title: "navbar.home",
    href: PATHS[PAGES_NAMES.home],
  },
  {
    title: "navbar.packaging",
    children: [
      {
        title: "navbar.packets",
        // subLabel: 'navbar.package',
        href: PATHS[PAGES_NAMES.packets],
      },
      {
        title: "navbar.materials",
        // subLabel: 'navbar.materials',
        href: PATHS[PAGES_NAMES.materials],
      },
    ],
  },
  {
    title: "navbar.labels",
    href: PATHS[PAGES_NAMES.labels],
  },
  {
    title: "navbar.printing",
    href: PATHS[PAGES_NAMES.printing],
  },
  {
    title: "navbar.equipment",
    href: PATHS[PAGES_NAMES.equipment],
  },
  {
    title: "navbar.about",
    href: PATHS[PAGES_NAMES.about],
  },
  {
    title: "navbar.contacts",
    href: PATHS[PAGES_NAMES.contacts],
  },
]
