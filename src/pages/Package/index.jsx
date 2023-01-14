import React from 'react'
import {
  Text, VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import PACKAGE_DATA from './data'

const { TEXTS } = PACKAGE_DATA

export default function Package() {
  const { t } = useTranslation()

  return (
    <VStack spacing={8}>
      <Text>
        {t(TEXTS.title)}
      </Text>
      <Text>{t(TEXTS.description)}</Text>
    </VStack>
  )
}
