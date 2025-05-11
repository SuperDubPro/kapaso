export type NavSubItem = {
  title: string
  href: string
}

export type NavItem = {
  title: string
  href?: string
  subItems?: NavSubItem[]
}
