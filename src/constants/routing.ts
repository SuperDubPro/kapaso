export enum PageName {
  Home = "home",
  Packets = "packets",
  Materials = "materials",
  Labels = "labels",
  Printing = "printing",
  Film = "film",
  Mission = "mission",
  Contacts = "contacts",
}

export const PATH: Record<PageName, string> = {
  [PageName.Home]: "/",
  [PageName.Packets]: "/packets",
  [PageName.Materials]: "/materials",
  [PageName.Labels]: "/labels",
  [PageName.Printing]: "/printing",
  [PageName.Film]: "/film",
  [PageName.Mission]: "/mission",
  [PageName.Contacts]: "/contacts",
}
