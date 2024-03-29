import React from 'react'
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Text,
  Container,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

// Settings for the slider
const defaultSettings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CaptionCarousel({ data, settings = {} }) {
  const { t } = useTranslation()
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null)
  const { isContrastWrapper, height = '600px' } = settings
  const contrastWrapper = useColorModeValue('255,255,255,0.2', '0,0,0,0.4')
  const titleColor = useColorModeValue('black', 'white')
  const textColor = useColorModeValue('black', 'gray.100')

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Box
      position="relative"
      height={height}
      width="full"
      overflow="hidden"
      textAlign="center"
    >
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...defaultSettings} {...settings} ref={(s) => setSlider(s)}>
        {data.map((card) => (
          <Box
            key={card.id}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Box
              position="absolute"
              left="0"
              right="0"
              top="0"
              bottom="0"
              background={isContrastWrapper && `rgba(${contrastWrapper})`}
            />
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w="full"
                maxW="lg"
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={titleColor}>
                  {t(card.title)}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} fontWeight="medium" color={textColor}>
                  {t(card.text)}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
