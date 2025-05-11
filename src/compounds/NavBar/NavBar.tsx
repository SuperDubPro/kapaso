import React from "react"
import {
  Box,
  Flex,
  // IconButton,
  // Collapse,
  // useColorModeValue,
  // useDisclosure,
  Stack,
} from "@chakra-ui/react"
import Image from "next/image"

// import { Link as RouterLink } from 'react-router-dom'
// import { MdClose, MdMenu } from "react-icons/md";

// import ColorModeSwitcher from '../ColorModeSwitcher'
// import LanguageSwitcher from '../LanguageSwitcher'
// import MobileNav from './MobileNav'

import { Link } from "@/i18n"
import { PATH } from "@/constants"

import { DesktopNavItem } from "./DesktopNavItem"
import { ButtonBlock } from "./ButtonBlock"
import { NAV_ITEMS } from "./data"
import logo from "./logo.svg"
// import { KapasoLogo } from '../../customIcons'
// import { PATHS, PAGES_NAMES } from './data'

export const Navbar = () => {
  // const { isOpen, onToggle, onClose } = useDisclosure()
  // const router = useRouter()

  return (
    <Box position="sticky" top="0" zIndex="sticky">
      <Flex
        // bg={useColorModeValue('white', 'gray.800')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 8 }}
        align="center"
      >
        {/** mobile hamburger toggle */}
        {/* <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            variant="ghost"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <MdClose /> : <MdMenu />}
          </IconButton>
        </Flex> */}

        <Flex
          flex={{ base: 1 }}
          justify="start"
          alignItems="center"
        >
          <Link href={PATH.home}>
            <Image src={logo} alt="logo" width={109} height={28} unoptimized />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={8}>
            <Stack direction="row" gap={4}>
              {NAV_ITEMS.map(({ title, href, subItems }) => (
                <DesktopNavItem
                  key={`navbar-desktop-item-${title}`}
                  title={title}
                  href={href}
                  subItems={subItems}
                />
              ))}
            </Stack>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          gap={1}
        >
          {/* <ColorModeSwitcher /> */}
          {/* <LanguageSwitcher /> */}
          <ButtonBlock />
        </Stack>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav onClose={onClose} />
      </Collapse> */}
    </Box>
  )
}
