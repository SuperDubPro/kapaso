import React from "react"
import { Link as ChakraLink } from "@chakra-ui/react"
import { useTranslations } from "next-intl"

import { Link } from "@/i18n"

interface Props {
  title: string
  href: string
}

export const DesktopSubNav: React.FC<Props> = ({ title, href }) => {
  const t = useTranslations("navbar")
  // const fontColor = useColorModeValue('kapaso.base', 'kapaso.lighter')
  // const hoverBgColor = useColorModeValue('kapasoAlpha.100', 'gray.900')

  return (
    <ChakraLink>
      <Link href={href}>
        {t(title)}
      </Link>
    </ChakraLink>
  )
}
