import React from 'react'
import {
  Heading, Text, VStack, Box,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import MATERIALS_DATA from './data'
import { PageBlock } from '../../components'

const { MATERIALS, TEXTS } = MATERIALS_DATA

export default function Materials() {
  const { t } = useTranslation()

  return (
    <VStack spacing={0} width="100%">
      <Heading pt={8} pb={12}>
        {t(TEXTS.title)}
      </Heading>

      <PageBlock
        display="flex"
        flexDir={['column', 'row']}
        pb={10}
        isDark
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
          <Heading size="md" pb={4}>{t(MATERIALS.icover.title)}</Heading>
          <Text>{t(MATERIALS.icover.description)}</Text>
        </Box>
      </PageBlock>

      <PageBlock
        display="flex"
        flexDir={['column', 'row-reverse']}
        pb={10}
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
          <Heading size="md" pb={4}>{t(MATERIALS.ipack.title)}</Heading>
          <Text>{t(MATERIALS.ipack.description)}</Text>
        </Box>
      </PageBlock>
    </VStack>
  )
}
