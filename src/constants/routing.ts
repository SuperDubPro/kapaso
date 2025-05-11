export enum Page {
  Home = "home",
  Packets = "packets",
  Materials = "materials",
  Labels = "labels",
  Printing = "printing",
  Film = "film",
  Mission = "mission",
  Contacts = "contacts",
}

export const PATH: Record<Page, string> = {
  [Page.Home]: "/",
  [Page.Packets]: "/packets",
  [Page.Materials]: "/materials",
  [Page.Labels]: "/labels",
  [Page.Printing]: "/printing",
  [Page.Film]: "/film",
  [Page.Mission]: "/mission",
  [Page.Contacts]: "/contacts",
}
