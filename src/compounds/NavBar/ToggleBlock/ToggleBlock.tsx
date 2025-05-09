"use client"

import { IoLanguage } from "react-icons/io5"
import { LuMoon, LuSun } from "react-icons/lu"
import { ClientOnly, Skeleton } from "@chakra-ui/react"
import { useLocale } from "next-intl"
import { useTheme } from "next-themes"

import { ToggleButton } from "@/components"
import { Locale, useRouter } from "@/i18n"

export const ToggleBlock = () => {
  const router = useRouter()
  const locale = useLocale()
  const { theme, setTheme } = useTheme()

  return (
    <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
      <ToggleButton
        states={[
          {
            value: Locale.Ru,
            icon: <IoLanguage />,
          },
          {
            value: Locale.En,
            icon: <IoLanguage />,
          },
        ]}
        defaultStateValue={locale}
        onCustomToggle={(locale) => {
          router.replace("/", { locale })
        }}
      />

      <ToggleButton
        states={[
          {
            value: "light",
            icon: <LuSun />,
          },
          {
            value: "dark",
            icon: <LuMoon />,
          },
        ]}
        defaultStateValue={theme}
        onCustomToggle={(value) => {
          setTheme(value)
        }}
      />
    </ClientOnly>

  )
}
