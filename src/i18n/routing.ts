import { defineRouting } from "next-intl/routing"

import { Locale } from "./constants"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [Locale.Ru, Locale.En],

  // Used when no locale matches
  defaultLocale: Locale.Ru,
})
