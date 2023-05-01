import React from 'react'
import {
  Box, Heading, Text, VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { PageBlock } from '../../components'
import LABELS_DATA from './data'

const { DESCRIPTION, TEXTS } = LABELS_DATA

export default function Labels() {
  const { t } = useTranslation()

  return (
    <VStack spacing={0} width="100%">
      <PageBlock pt={8} pb={12} display="flex" justifyContent="center">
        <Heading>
          {t(TEXTS.title)}
        </Heading>
      </PageBlock>

      {DESCRIPTION.map(({
        id, title, text, image,
      }, i) => (
        <PageBlock
          key={id}
          display="flex"
          flexDir={['column', 'row']}
          pb={24}
          isDark={((i + 1) % 2) === 0}
        >
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" p={12} width="100%">
            <Heading size="md" pb={4}>{t(title)}</Heading>
            <Text textAlign="center">{t(text)}</Text>
          </Box>
          <Box
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={image}
            minW="60%"
            minHeight="400px"
          />
        </PageBlock>
      ))}
    </VStack>
  )
}
