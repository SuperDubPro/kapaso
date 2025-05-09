import { use } from "react"
import { setRequestLocale } from "next-intl/server"

import { type Locale, routing } from "@/i18n"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }))
}

export default function Page({ params }: PageProps) {
  const { locale } = use(params)
  setRequestLocale(locale)

  return (
    <div>mission</div>
  )
}
