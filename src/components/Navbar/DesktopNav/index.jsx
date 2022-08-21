import React from 'react'
import {
  IconButton, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue,
} from '@chakra-ui/react'
import NAV_ITEMS from '../data'
import DesktopSubNav from '../DesktopSubNav'

export default function DesktopNav() {
  const linkColor = useColorModeValue('gray.100', 'gray.200')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const linkHoverBg = useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <IconButton
          key={navItem.label}
          _hover={{
            backgroundColor: linkHoverBg,
          }}
          variant="ghost"
          aria-label=""
        >
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                {navItem.label}
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
                    <DesktopSubNav key={child.label} {...child} />
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
