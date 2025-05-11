"use client"

import { Link as ChakraLink, type LinkProps } from "@chakra-ui/react"
import { type FC } from "react"

import { Link } from "@/i18n"

export const NavLink: FC<LinkProps> = ({ children, href = "", ...otherProps }) => {
  return (
    <ChakraLink
      color={{ _light: "black", _dark: "white", _hover: "iloks.600" }}
      textDecoration="none"
      focusRing="none"
      asChild
      {...otherProps}
    >
      <Link href={href}>
        {children}
      </Link>
    </ChakraLink>
  )
}
