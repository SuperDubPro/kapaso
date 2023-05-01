import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

export default function Card(props) {
  const { children, isDark = false, ...otherParams } = props

  const darkBg = useColorModeValue('gray.50', 'gray.900')
  const lightBg = useColorModeValue('white', 'gray.800')
  const bgColor = isDark ? darkBg : lightBg

  return (
    <Box
      {...otherParams}
      p={10}
      borderRadius={12}
      bgColor={bgColor}
    >
      {children}
    </Box>
  )
}
