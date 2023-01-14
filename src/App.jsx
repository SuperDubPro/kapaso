import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  ChakraProvider,
  Box,
  SimpleGrid,
  theme,
} from '@chakra-ui/react'
import { Navbar, Footer } from './components'
import {
  Home, About, PAGES_DATA, Package, Materials, Equipment, Contacts, Labels,
} from './pages'

const { PATHS, PAGES_NAMES } = PAGES_DATA

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="80vh" position="relative" pb={0}>
        <Navbar />
        <SimpleGrid columns={1} width="100%" minH="80vh" overflowX="hidden">
          <Routes>
            <Route path={PATHS[PAGES_NAMES.home]} element={<Home />} />
            <Route path={PATHS[PAGES_NAMES.about]} element={<About />} />
            <Route path={PATHS[PAGES_NAMES.package]} element={<Package />} />
            <Route path={PATHS[PAGES_NAMES.materials]} element={<Materials />} />
            <Route path={PATHS[PAGES_NAMES.labels]} element={<Labels />} />
            <Route path={PATHS[PAGES_NAMES.equipment]} element={<Equipment />} />
            <Route path={PATHS[PAGES_NAMES.contacts]} element={<Contacts />} />
          </Routes>
        </SimpleGrid>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
