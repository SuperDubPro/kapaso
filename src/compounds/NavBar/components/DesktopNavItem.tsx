import React, { type FC } from "react"
import { HoverCard, Stack, Icon  } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { IoChevronDown } from "react-icons/io5"
// import Link from "next/link"

import { NavLink } from "@/components"

import { type NavItem } from "../types"

export const DesktopNavItem: FC<NavItem> = ({ title, href, subItems }) => {
  const t = useTranslations("navbar")
  // const router = useRouter()

  // const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  // const linkHoverBg = useColorModeValue('gray.50', 'whiteAlpha.200')

  if (href) {
    return (
      <NavLink href={href}>
        {t(title)}
      </NavLink>
    )
  }

  if (!subItems) {
    return null
  }

  return (
    <HoverCard.Root
      key={`navbar-item-${title}`}
      positioning={{ placement: "bottom-start" }}
      openDelay={0}
      closeDelay={300}
    >
      <HoverCard.Trigger asChild>
        <NavLink>
          {t(title)}
          <Icon size="sm">
            <IoChevronDown />
          </Icon>
        </NavLink>

        {/* </ChakraLink> */}
      </HoverCard.Trigger>

      <HoverCard.Positioner>
        <HoverCard.Content
          border={0}
          // boxShadow="xl"
          // bg={popoverContentBgColor}
          p={4}
          // rounded="xl"
          minW="sm"
        >
          <Stack>
            {subItems.map((subItem) => (
              <NavLink key={`navbar-subitem-${subItem.title}`} href={subItem.href}>
                {t(subItem.title)}
              </NavLink>
            ))}
          </Stack>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  )
}
