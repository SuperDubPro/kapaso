import React from 'react'
import {
  Circle,
  Container,
  Heading,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { SiSamsung } from 'react-icons/si'

export default function Partners() {
  const { t } = useTranslation()
  const bgColor = useColorModeValue('gray.200', 'white')

  return (
    <Container py={16}>
      <VStack>
        <Heading pb={6}>{t('home.partners')}</Heading>
        <Wrap justify="center">
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
          <WrapItem>
            <Circle size={20} bgColor={bgColor} color="gray.800"><SiSamsung size="60" /></Circle>
          </WrapItem>
        </Wrap>
      </VStack>
    </Container>
  )
}
