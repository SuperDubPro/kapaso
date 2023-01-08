import React from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

export default function ProductCard(props) {
  const { children } = props
  return (
    <Box
      p={10}
      borderRadius={12}
      bgColor={useColorModeValue('white', 'gray.800')}
      {...props}
    >
      {children}
    </Box>
  )
}
