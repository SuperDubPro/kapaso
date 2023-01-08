import React from 'react'
import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { BsFillStickyFill, BsFillBagFill, BsFillLayersFill } from 'react-icons/bs'
import { Carousel } from '../../components'
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

      <SimpleGrid
        columns={[1, 1, 2, 3]}
        spacing={10}
        py={40}
        px={[8, 12, 20]}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
      >
        {PRODUCT_CARDS.map(({
          icon, header, text, to, btnText, id,
        }) => (
          <ProductCard
            key={id}
            icon={ICONS[icon]}
            header={t(header)}
            text={t(text)}
            to={to}
            btnText={t(btnText)}
          />
        ))}
      </SimpleGrid>

      <Partners />
    </>
  )
}
