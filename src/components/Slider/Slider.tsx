"use client"

import { type ReactNode, type FC } from "react"
import { Box, Heading, HStack, Text, Stack } from "@chakra-ui/react"
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { IoChevronForwardSharp, IoChevronBackSharp  } from "react-icons/io5"

import { SlideNavButton } from "./SlideNavButton"

interface SlideItem {
  key: string
  image: ReactNode
  title?: string
  description?: string
}

interface Props extends SwiperProps {
  items: SlideItem[]
}

export const Slider: FC<Props> = ({ items, ...other }) => {
  return (
    <Stack gap="6">
      <Box
        overflow="hidden"
        textAlign="center"
        borderRadius="2xl"
        maxW="100%"
      >
        <Swiper
          className="max-w-full"
          autoplay={{ delay: 7777 }}
          navigation
          pagination={{
            el: ".custom-slider-pagination",
            clickable: true,
            type: "bullets",
          }}
          loop
          modules={[Autoplay, Pagination]}
          {...other}
        >
          {items.map(({ key, image, title, description }) => (
            <>
              <SwiperSlide className="max-w-full" key={key}>
                {image}
                <Stack
                  position="absolute"
                  left="10"
                  bottom="10"
                  color="white"
                  textAlign="left"
                  gap="1"
                >
                  <Heading size="4xl" fontWeight="bolder">{title}</Heading>
                  <Text fontSize="lg">{description}</Text>
                </Stack>
              </SwiperSlide>
            </>
          ))}

          <SlideNavButton
            className="swiper-button-next"
            onNavClick={(swiper) => {
              swiper?.slideNext()
            }}
            size="xs"
          >
            <IoChevronForwardSharp />
          </SlideNavButton>

          <SlideNavButton
            className="swiper-button-prev"
            onNavClick={(swiper) => swiper?.slidePrev()}
            size="xs"
          >
            <IoChevronBackSharp />
          </SlideNavButton>

        </Swiper>
      </Box>
      <HStack
        className="custom-slider-pagination"
        justify="center"
        align="center"
        width="100%"
        gap="2"
      />
    </Stack>

  )
}
