import React from 'react'
import {
  Code, Link, Text, VStack, Box,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { Carousel } from '../../components'

export default function Home() {
  return (
    <>
      <Box maxW="full" pb={4}>
        <Carousel />
      </Box>
      <VStack spacing={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>
          Edit
          {' '}
          <Code fontSize="xl">src/App.js</Code>
          {' '}
          and save to reload.
        </Text>
        <Link
          color="teal.500"
          href="https://chakra-ui.com"
          fontSize="2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Chakra
        </Link>
      </VStack>
    </>
  )
}
