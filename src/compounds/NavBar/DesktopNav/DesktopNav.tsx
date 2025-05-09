import React from "react"
import { HoverCard, Stack, Icon, Link as ChakraLink  } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { IoChevronDown } from "react-icons/io5"

import { Link } from "@/i18n"

import { DesktopSubNav } from "../DesktopSubNav"
import { NAV_ITEMS } from "../data"

export const DesktopNav = () => {
  const t = useTranslations("navbar")
  // const router = useRouter()

  // const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  // const linkHoverBg = useColorModeValue('gray.50', 'whiteAlpha.200')

  return (
    <Stack direction="row" gap={4}>
      {NAV_ITEMS.map((navItem) => (
        <HoverCard.Root
          key={`navbar-item-${navItem.title}`}
          positioning={{ placement: "bottom-start" }}
        >
          <HoverCard.Trigger asChild>
            <ChakraLink>
              {navItem.href && (
                <Link key={navItem.title} href={navItem.href}>
                  {t(navItem.title)}
                </Link>
              )}

              {!navItem.href && t(navItem.title)}

              {navItem.children && (
                <Icon size="sm">
                  <IoChevronDown />
                </Icon>
              )}
            </ChakraLink>
          </HoverCard.Trigger>

          {navItem.children && (
            <HoverCard.Content
              border={0}
              boxShadow="xl"
              // bg={popoverContentBgColor}
              p={4}
              rounded="xl"
              minW="sm"
            >
              <Stack>
                {navItem.children.map((child) => (
                  <DesktopSubNav
                    key={`DesktopSubNav-${child.title}`}
                    {...child}
                  />
                ))}
              </Stack>
            </HoverCard.Content>
          )}
        </HoverCard.Root>
      ))}
    </Stack>
  )
}
