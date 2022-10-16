import React from 'react'
import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
// import { Logo } from './Logo'
import { useTranslation } from 'react-i18next'
import { BsFillStickyFill, BsFillBagFill, BsFillLayersFill } from 'react-icons/bs'
import { Carousel, ProductCard } from '../../components'

import HOME_DATA from './data'

const ICONS = {
  BsFillBagFill: <BsFillBagFill />,
  BsFillLayersFill: <BsFillLayersFill />,
  BsFillStickyFill: <BsFillStickyFill />,
}

export default function Home() {
  const { t } = useTranslation()

  return (
    <>
      <Box maxW="full">
        <Carousel />
      </Box>

      <SimpleGrid
        columns={[1, 1, 2, 3]}
        spacing={10}
        py={40}
        px={[8, 12, 20]}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
      >
        {HOME_DATA.PRODUCT_CARDS.map(({ icon, header, text }) => (
          <ProductCard icon={ICONS[icon]} header={t(header)} text={t(text)} />
        ))}
      </SimpleGrid>
    </>
  )
}
