import React from 'react'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ColorModeSwitcher(props) {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('light', 'dark')
  const SwitchIcon = useColorModeValue(FaSun, FaMoon)
  const hoverBgColor = useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      _hover={{
        backgroundColor: hoverBgColor,
      }}
    />
  )
}
