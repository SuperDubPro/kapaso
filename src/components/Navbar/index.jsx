import React from 'react'
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import ColorModeSwitcher from '../ColorModeSwitcher'
import LanguageSwitcher from '../LanguageSwitcher'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import { KapasoLogo } from '../../customIcons'
import { PAGES_DATA } from '../../pages'

const { PATHS, PAGES_NAMES } = PAGES_DATA

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Box position="sticky" top="0" zIndex="sticky">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 8 }}
        align="center"
      >
        {/** mobile hamburger toggle */}
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems="center">
          <RouterLink to={PATHS[PAGES_NAMES.home]}>
            <KapasoLogo size="xl" />
          </RouterLink>
          <Flex display={{ base: 'none', md: 'flex' }} ml={8}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={1}
        >
          <ColorModeSwitcher />
          <LanguageSwitcher />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onClose={onClose} />
      </Collapse>
    </Box>
  )
}
