import enTranslations from './en'
import ruTranslations from './ru'
import LOCALE_DATA from './data'

const { LNG } = LOCALE_DATA

const i18nConfig = {
  resources: {
    en: { translation: enTranslations },
    ru: { translation: ruTranslations },
  },
  lng: LNG, // if you're using a language detector, do not define the lng option
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
}

export default i18nConfig
