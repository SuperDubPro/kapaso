import React from 'react'
import {
  Box, Container, Wrap, WrapItem,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { BsFillStickyFill, BsFillBagFill, BsFillLayersFill } from 'react-icons/bs'
import { Carousel, PageBlock } from '../../components'
import ProductCard from './ProductCard'
import Partners from './Partners'

import HOME_DATA from './data'

const ICONS = {
  BsFillBagFill: <BsFillBagFill />,
  BsFillLayersFill: <BsFillLayersFill />,
  BsFillStickyFill: <BsFillStickyFill />,
}

export default function Home() {
  const { t } = useTranslation()
  const { PRODUCT_CARDS, CAROUSEL } = HOME_DATA

  return (
    <>
      <Box maxW="full">
        <Carousel
          data={CAROUSEL}
          settings={{
            isContrastWrapper: true,
          }}
        />
      </Box>

      <PageBlock isDark>
        <Wrap
          justify="center"
          align="center"
          spacing={10}
          py={40}
          px={10}
        >
          {PRODUCT_CARDS.map(({
            icon, header, text, to, btnText, id,
          }) => (
            <WrapItem key={id}>
              <ProductCard
                icon={ICONS[icon]}
                header={t(header)}
                text={t(text)}
                to={to}
                btnText={t(btnText)}
              />
            </WrapItem>
          ))}
        </Wrap>
      </PageBlock>

      <PageBlock>
        <Container py={16}>
          <Partners />
        </Container>
      </PageBlock>
    </>
  )
}
