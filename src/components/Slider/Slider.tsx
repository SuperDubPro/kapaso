"use client"

import { type ReactNode, type FC } from "react"
import { Box } from "@chakra-ui/react"
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
    <Box
      position="relative"
      overflow="hidden"
      textAlign="center"
      mb="10"
      borderRadius="2xl"
      maxW="100%"
    >
      <Swiper
        className="max-w-full"
        navigation
        pagination={{ clickable: true, type: "bullets" }}
        loop
        modules={[Pagination]}
        autoplay={{
          delay: 7777,
        }}
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
          // position="absolute"
          // zIndex=""
          // top="50%"
          // bottom="50%"
          // marginRight="8"
        >
          <IoChevronForwardSharp />
        </SlideNavButton>

        <SlideNavButton
          className="swiper-button-prev"
          onNavClick={(swiper) => swiper?.slidePrev()}
          // position="absolute"
          // top="50%"
          // bottom="50%"
          // marginLeft="8"
        >
          <IoChevronBackSharp />
        </SlideNavButton>
      </Swiper>
    </Box>
  )
}
