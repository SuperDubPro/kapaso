import React from 'react'
import {
  Heading, Text, VStack, Wrap, WrapItem,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { PageBlock } from '../../components'
import PACKETS_DATA from './data'
import ProductCard from './ProductCard'

const { TEXTS, CARDS } = PACKETS_DATA

export default function Packets() {
  const { t } = useTranslation()

  return (
    <VStack pb={12} spacing={8}>
      <Heading pt={[4, 8]} pb={[0, 4]}>
        {t(TEXTS.title)}
      </Heading>

      <PageBlock pb={[4, 6]}>
        <Wrap
          justify="center"
          align="center"
          spacing={10}
        >
          {CARDS.map(({ id, title, image }) => (
            <WrapItem key={id}>
              <ProductCard title={t(title)} image={image} />
            </WrapItem>
          ))}
        </Wrap>
      </PageBlock>

      <PageBlock px={8}>
        <Text textAlign="center">{t(TEXTS.description)}</Text>
      </PageBlock>
    </VStack>
  )
}
