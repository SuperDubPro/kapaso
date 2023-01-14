import React from 'react'
import {
  Box, Circle, Heading, SimpleGrid, Text, useColorModeValue, VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { TbResize, TbTemperature } from 'react-icons/tb'
import { IoSunny, IoSnow } from 'react-icons/io5'
import { Card, Carousel } from '../../components'
import LABELS_DATA from './data'

const { CAROUSEL, DESCRIPTION, TEXTS } = LABELS_DATA

const ICONS = {
  TbResize: <TbResize />,
  IoSunny: <IoSunny />,
  IoSnow: <IoSnow />,
  TbTemperature: <TbTemperature />,
}

export default function Labels() {
  const { t } = useTranslation()
  const cardColor = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box display="flex" flexDir={['column', 'column', 'row']} pb={8}>
      <VStack px={8} py={8}>
        <Heading pb={8}>
          {t(TEXTS.title)}
        </Heading>

        <SimpleGrid columns={[1, 2]} spacing={8} minW="45vw">
          {DESCRIPTION.map(({ id, iconName, text }) => (
            <Card
              key={id}
              bgColor={cardColor}
            >
              <VStack>
                <Circle
                  size={8}
                  bgColor="teal.500"
                  color="white"
                >
                  {ICONS[iconName]}
                </Circle>
                <Text textAlign="center">
                  {t(text)}
                </Text>
              </VStack>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>

      <Box overflow="hidden" borderRadius="12px" height="fit-content">
        <Carousel
          data={CAROUSEL}
        />
      </Box>
    </Box>
  )
}
