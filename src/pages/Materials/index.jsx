import React from 'react'
import {
  Heading, Text, VStack, Box, useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import MATERIALS_DATA from './data'

const { MATERIALS, TEXTS } = MATERIALS_DATA

export default function Materials() {
  const { t } = useTranslation()

  return (
    <VStack pt={8} spacing={0}>
      <Heading pb={8}>
        {t(TEXTS.title)}
      </Heading>

      <Box
        display="flex"
        flexDir={['column', 'row']}
        pb={10}
        width="full"
        bgColor={useColorModeValue('gray.50', 'gray.900')}
      >
        <Box
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={MATERIALS.icover.image}
          minW="50%"
          minHeight="400px"
        />
        <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" p={12}>
          <Text fontSize="xl" fontWeight="bold">{t(MATERIALS.icover.title)}</Text>
          <Text>{t(MATERIALS.icover.description)}</Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDir={['column', 'row-reverse']}
        pb={10}
        width="full"
        // bgColor={useColorModeValue('gray.50', 'gray.900')}
      >
        <Box
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={MATERIALS.ipack.image}
          minW="50%"
          minHeight="400px"
        />
        <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" p={12}>
          <Text fontSize="xl" fontWeight="bold">{t(MATERIALS.ipack.title)}</Text>
          <Text>{t(MATERIALS.ipack.description)}</Text>
        </Box>
      </Box>
    </VStack>
  )
}
