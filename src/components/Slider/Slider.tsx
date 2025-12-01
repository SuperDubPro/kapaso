"use client"

import { type ReactNode, type FC } from "react"
import { Box, Stack } from "@chakra-ui/react"
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { IoChevronForwardSharp, IoChevronBackSharp  } from "react-icons/io5"

import { SlideNavButton } from "./SlideNavButton"

interface SlideItem {
  key: string
  image: ReactNode
}

interface Props extends SwiperProps {
  items: SlideItem[]
}

export const Slider: FC<Props> = ({ items, ...other }) => {
  return (
    <Stack mb="10">
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
          {items.map(({ key, image }) => (
            <SwiperSlide className="max-w-full" key={key}>
              {image}
            </SwiperSlide>
          ))}

          <SlideNavButton
            className="swiper-button-next"
            onNavClick={(swiper) => {
              swiper?.slideNext()
            }}
          >
            <IoChevronForwardSharp />
          </SlideNavButton>

          <SlideNavButton
            className="swiper-button-prev"
            onNavClick={(swiper) => swiper?.slidePrev()}
          >
            <IoChevronBackSharp />
          </SlideNavButton>

        </Swiper>
      </Box>
      <Box className="custom-slider-pagination" />
    </Stack>

  )
}
