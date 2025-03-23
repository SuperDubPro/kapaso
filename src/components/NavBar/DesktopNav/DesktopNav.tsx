import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  IconButton, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

// import { useTranslation } from 'react-i18next'
import { NAV_ITEMS } from '../data'
import DesktopSubNav from '../DesktopSubNav'

export const DesktopNav = () => {
//   const { t } = useTranslation()
    const router = useRouter()

  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const linkHoverBg = useColorModeValue('gray.50', 'whiteAlpha.200')

  return (
    <Stack direction="row" gap={4}>
      {NAV_ITEMS.map((navItem) => (
        <IconButton
          key={`navbar-item-${navItem.label}`}
          _hover={{
            backgroundColor: linkHoverBg,
          }}
          variant="ghost"
          aria-label=""
        >
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                as={RouterLink}
                p={2}
                to={navItem.href}
                fontSize="sm"
                fontWeight={500}
                // color={linkColor}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                {t(navItem.label)}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={`DesktopSubNav-${child.label}`} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </IconButton>
      ))}
    </Stack>
  )
}
