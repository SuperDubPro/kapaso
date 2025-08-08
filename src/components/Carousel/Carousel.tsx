"use client"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Slider, { type Settings } from "react-slick"
import { type FC, type PropsWithChildren } from "react"
import { Box, Button } from "@chakra-ui/react"

export const Carousel: FC<PropsWithChildren<Settings>> = ({ children, ...settings }) => {
  return (
    <Box
      position="relative"
      width="80vw"
      overflow="hidden"
      height="50vh"
      textAlign="center"
      mb="10"
    >
      <Slider
        dots
        arrows
        infinite
        autoplay
        autoplaySpeed={3000}
        slidesToShow={1}
        slidesToScroll={1}
        adaptiveHeight
        nextArrow={<Button>{">"}</Button>}
        prevArrow={<Button>{"<"}</Button>}
        {...settings}
      >
        {children}
      </Slider>
    </Box>
  )
}
