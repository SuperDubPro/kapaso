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

// import { Link as RouterLink } from 'react-router-dom'
// import { MdClose, MdMenu } from "react-icons/md";

// import ColorModeSwitcher from '../ColorModeSwitcher'
// import LanguageSwitcher from '../LanguageSwitcher'
// import MobileNav from './MobileNav'

import { DesktopNav } from "./DesktopNav"
import { ToggleBlock } from "./ToggleBlock"
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
          justify={{ base: "center", md: "start" }}
          alignItems="center"
        >
          {/* <RouterLink to={PATHS[PAGES_NAMES.home]}>
            <KapasoLogo size="xl" />
          </RouterLink> */}
          <Flex display={{ base: "none", md: "flex" }} ml={8}>
            <DesktopNav />
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
          <ToggleBlock />
        </Stack>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav onClose={onClose} />
      </Collapse> */}
    </Box>
  )
}
