import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

export default function PageBlock(params) {
  const { children, isDark = false, ...otherParams } = params
  const darkBg = useColorModeValue('gray.50', 'gray.900')
  const lightBg = useColorModeValue('white', 'gray.800')
  const bgColor = isDark ? darkBg : lightBg

  return (
    <Box width="100%" bgColor={bgColor}>
      <Box {...otherParams} maxW="1400px" ml="auto" mr="auto">
        {children}
      </Box>
    </Box>
  )
}
