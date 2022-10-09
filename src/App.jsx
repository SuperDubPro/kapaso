import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  theme,
} from '@chakra-ui/react'
import { Navbar } from './components'
import { Home, About, PAGES_DATA } from './pages'

const { PATHS, PAGES_NAMES } = PAGES_DATA

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Navbar />
        <SimpleGrid columns={1} width="full">
          <Routes>
            <Route path={PATHS[PAGES_NAMES.home]} element={<Home />} />
            <Route path={PATHS[PAGES_NAMES.about]} element={<About />} />
          </Routes>
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  )
}

export default App
