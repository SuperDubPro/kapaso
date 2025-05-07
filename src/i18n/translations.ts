import { Locale } from "./constants"
import { enTranslations } from "./en"
import { ruTranslations } from "./ru"

export const translations = {
  [Locale.En]: enTranslations,
  [Locale.Ru]: ruTranslations,
}
