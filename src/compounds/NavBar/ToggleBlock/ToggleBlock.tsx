"use client"

import { IoLanguage } from "react-icons/io5"
import { ClientOnly, Skeleton } from "@chakra-ui/react"
import { useLocale } from "next-intl"

import { ToggleButton } from "@/components"
import { Locale, useRouter } from "@/i18n"
import { ColorModeToggle } from "@/components/color-mode-toggle"

export const ToggleBlock = () => {
  const router = useRouter()
  const locale = useLocale()

  return (
    <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
      <ColorModeToggle />
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
    </ClientOnly>

  )
}
