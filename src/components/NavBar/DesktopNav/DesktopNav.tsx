import React from "react"
import { HoverCard, IconButton, Stack } from "@chakra-ui/react"
// import { Link as RouterLink } from 'react-router-dom'
// import { useRouter } from 'next/router'

// import { useTranslation } from 'react-i18next'
import { DesktopSubNav } from "../DesktopSubNav/DesktopSubNav"
import { NAV_ITEMS } from "../data"

export const DesktopNav = () => {
  //   const { t } = useTranslation()
  // const router = useRouter()

  // const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  // const linkHoverBg = useColorModeValue('gray.50', 'whiteAlpha.200')

  return (
    <Stack direction="row" gap={4}>
      {NAV_ITEMS.map((navItem) => (
        <IconButton
          key={`navbar-item-${navItem.title}`}
          _hover={{
            // backgroundColor: linkHoverBg,
            backgroundColor: "gray.50",
          }}
          variant="ghost"
          aria-label=""
        >
          <HoverCard.Root positioning={{ placement: "bottom-start" }}>
            <HoverCard.Trigger asChild>
              {/* <Link
                as={RouterLink}
                p={2}
                to={navItem.href}
                fontSize="sm"
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: 'none',
                }}
              > */}
              <a>{navItem.title}</a>
              {/* {t(navItem.title)} */}
              {/* {t(navItem.title)} */}
              {/* </Link> */}
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
        </IconButton>
      ))}
    </Stack>
  )
}
