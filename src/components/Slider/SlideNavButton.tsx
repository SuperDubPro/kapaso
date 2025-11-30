"use client"

import { Button, type ButtonProps } from "@chakra-ui/react"
import { type FC } from "react"
import type Swiper from "swiper"
import { useSwiper } from "swiper/react"

interface Props {
  onNavClick?: (swiper?: Swiper) => void
}

export const SlideNavButton: FC<Props & ButtonProps> = ({ onNavClick, ...other }) => {
  const swiper = useSwiper()

  const handleClick = () => {
    onNavClick?.(swiper)
  }

  return (
    <Button
      variant="subtle"
      {...other}
      onClick={handleClick}
      height="64px"
      width="48px"
      borderRadius="15px"
      // bg="whiteAlpha.300"
      colorPalette="whiteAlpha"
      bg={{ base: "whiteAlpha.500", _hover: "whiteAlpha.700" }}
      color="blackAlpha.500"
    >
      {other?.children}
    </Button>
  )
}
