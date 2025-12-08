import { PageName, PATH } from "@/constants"

import { type NavItem } from "./types"

export const NAV_ITEMS: NavItem[] = [
  {
    title: "home",
    href: PATH[PageName.Home],
  },
  {
    title: "packaging",
    subItems: [
      {
        title: "packets",
        href: PATH[PageName.Packets],
      },
      {
        title: "materials",
        href: PATH[PageName.Materials],
      },
    ],
  },
  {
    title: "labels",
    href: PATH[PageName.Labels],
  },
  {
    title: "printing",
    href: PATH[PageName.Printing],
  },
  {
    title: "film",
    href: PATH[PageName.Film],
  },
  {
    title: "mission",
    href: PATH[PageName.Mission],
  },
  {
    title: "contacts",
    href: PATH[PageName.Contacts],
  },
]
