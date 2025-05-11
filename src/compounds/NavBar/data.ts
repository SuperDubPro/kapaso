import { Page, PATH } from "@/constants"

import { type NavItem } from "./types"

export const NAV_ITEMS: NavItem[] = [
  {
    title: "home",
    href: PATH[Page.Home],
  },
  {
    title: "packaging",
    subItems: [
      {
        title: "packets",
        href: PATH[Page.Packets],
      },
      {
        title: "materials",
        href: PATH[Page.Materials],
      },
    ],
  },
  {
    title: "labels",
    href: PATH[Page.Labels],
  },
  {
    title: "printing",
    href: PATH[Page.Printing],
  },
  {
    title: "film",
    href: PATH[Page.Film],
  },
  {
    title: "mission",
    href: PATH[Page.Mission],
  },
  {
    title: "contacts",
    href: PATH[Page.Contacts],
  },
]
