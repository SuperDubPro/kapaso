import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  ChakraProvider,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react'
import { Navbar, Footer } from './components'
import {
  Home, About, PAGES_DATA, Packets, Materials, Equipment, Contacts, Labels, Printing,
} from './pages'
import theme from './theme'

const { PATHS, PAGES_NAMES } = PAGES_DATA

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        gridTemplateColumns="100%"
        gridTemplateRows="1fr auto"
        position="absolute"
        left="0"
        right="0"
        top="0"
        bottom="0"
        pb={0}
      >
        <GridItem position="relative">
          <Navbar />
          <VStack width="100%" spacing="0">
            <Routes>
              <Route path={PATHS[PAGES_NAMES.home]} element={<Home />} />
              <Route path={PATHS[PAGES_NAMES.about]} element={<About />} />
              <Route path={PATHS[PAGES_NAMES.packets]} element={<Packets />} />
              <Route path={PATHS[PAGES_NAMES.materials]} element={<Materials />} />
              <Route path={PATHS[PAGES_NAMES.labels]} element={<Labels />} />
              <Route path={PATHS[PAGES_NAMES.printing]} element={<Printing />} />
              <Route path={PATHS[PAGES_NAMES.equipment]} element={<Equipment />} />
              <Route path={PATHS[PAGES_NAMES.contacts]} element={<Contacts />} />
            </Routes>
          </VStack>
        </GridItem>
        <GridItem>
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  )
}

export default App
