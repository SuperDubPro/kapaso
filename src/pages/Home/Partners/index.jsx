import React from 'react'
import {
  Circle,
  Heading,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { SiSamsung } from 'react-icons/si'
import {
  LogoArkhbum,
  LogoGrandLine,
  LogoNovoNordisk,
  LogoHayat,
} from '../../../customIcons'

export default function Partners() {
  const { t } = useTranslation()
  const bgColor = useColorModeValue('gray.200', 'white')

  return (
    <VStack>
      <Heading pb={6}>{t('home.partners')}</Heading>
      <Wrap justify="center">
        <WrapItem>
          <Circle size={20} bgColor={bgColor} color="gray.800">
            <SiSamsung size="54" />
          </Circle>
        </WrapItem>
        <WrapItem>
          <Circle size={20} bgColor={bgColor}>
            <LogoArkhbum size="54" />
          </Circle>
        </WrapItem>
        <WrapItem>
          <Circle size={20} bgColor={bgColor} color="gray.800">
            <LogoGrandLine size="54" />
          </Circle>
        </WrapItem>
        <WrapItem>
          <Circle size={20} bgColor={bgColor} color="gray.800">
            <LogoNovoNordisk size="54" />
          </Circle>
        </WrapItem>
        <WrapItem>
          <Circle size={20} bgColor={bgColor} color="gray.800">
            <LogoHayat size="54" />
          </Circle>
        </WrapItem>
      </Wrap>
    </VStack>
  )
}
