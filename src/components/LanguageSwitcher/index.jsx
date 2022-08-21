import React, { useState } from 'react'
import { useColorModeValue, IconButton } from '@chakra-ui/react'
import { MdLanguage } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { LOCALE_DATA } from '../../locales'

export default function ColorModeSwitcher(props) {
  const { i18n } = useTranslation()
  const text = useColorModeValue('light', 'dark')
  const hoverBgColor = useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')
  const { LNG } = LOCALE_DATA

  const [currentLangIndex, setCurrentLangIndex] = useState(0)

  const toggleLang = () => {
    let nextIndex = currentLangIndex + 1
    if (nextIndex === LNG.length) {
      nextIndex = 0
    }
    setCurrentLangIndex(nextIndex)
    i18n.changeLanguage(LNG[nextIndex])
  }

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleLang}
      icon={<MdLanguage />}
      {...props}
      _hover={{
        backgroundColor: hoverBgColor,
      }}
    />
  )
}
