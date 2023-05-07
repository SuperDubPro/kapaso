import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box, Heading, Text, VStack,
} from '@chakra-ui/react'
import PRINTING_DATA from './data'
import { PageBlock } from '../../components'

const { TEXTS, SECTIONS } = PRINTING_DATA

export default function Printing() {
  const { t } = useTranslation()

  return (
    <VStack spacing={0} width="100%">
      <Heading py={10}>
        {t(TEXTS.title)}
      </Heading>

      {SECTIONS.map(({ title, text, image }, i) => (
        <PageBlock
          display="flex"
          flexDir={['column-reverse', i % 2 === 0 ? 'row' : 'row-reverse']}
          pb={24}
        >
          <Box
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={image}
            minW="50%"
            minHeight="400px"
          />
          <Box display="flex" flexDir="column" alignItems="center" justifyContent="center" p={24}>
            <Heading size="md" pb={4}>{t(title)}</Heading>
            <Text>{t(text)}</Text>
          </Box>
        </PageBlock>
      ))}
    </VStack>
  )
}
