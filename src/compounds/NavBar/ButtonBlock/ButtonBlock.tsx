"use client"

import { LuMoon, LuSun } from "react-icons/lu"
import { Button, ClientOnly, Skeleton } from "@chakra-ui/react"
import { useLocale, useTranslations } from "next-intl"
import { useTheme } from "next-themes"

import { ToggleButton } from "@/components"
import { Locale, useRouter } from "@/i18n"

export const ButtonBlock = () => {
  const router = useRouter()
  const locale = useLocale()
  const { theme, setTheme } = useTheme()
  const t = useTranslations("navbar")

  return (
    <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
      <ToggleButton
        bg="iloks.50"
        color="iloks.600"
        states={[
          {
            value: Locale.Ru,
            icon: "рус",
          },
          {
            value: Locale.En,
            icon: "eng",
          },
        ]}
        defaultStateValue={locale}
        onCustomToggle={(locale) => {
          router.replace("/", { locale })
        }}
      />

      <ToggleButton
        bg="iloks.50"
        color="iloks.600"
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

      <Button bg="iloks.600">{t("makeCalculation")}</Button>
    </ClientOnly>

  )
}
