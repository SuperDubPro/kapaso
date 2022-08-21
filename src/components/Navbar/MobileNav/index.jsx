import React from 'react'
import { Stack, useColorModeValue } from '@chakra-ui/react'
import NAV_ITEMS from '../data'
import MobileNavItem from '../MobileNavItem'

export default function MobileNav({ onClose }) {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={`MobileNavItem-${navItem.label}`}
          onBurgerClose={onClose}
          {...navItem}
        />
      ))}
    </Stack>
  )
}
