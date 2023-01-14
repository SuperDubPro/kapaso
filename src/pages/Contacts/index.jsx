import React from 'react'
import { Box, Text, VStack } from '@chakra-ui/react'
import YaMap from './YaMap'
import CONTACTS_DATA from './data'

const { TARGET_COORDS, MAP_CENTER_COORDS } = CONTACTS_DATA

export default function Contacts() {
  return (
    <VStack spacing={8}>
      <Text>
        Contacts page
      </Text>
      <Box
        width="100%"
        height="350px"
      >
        <YaMap target={TARGET_COORDS} mapCenter={MAP_CENTER_COORDS} />
      </Box>
    </VStack>
  )
}
