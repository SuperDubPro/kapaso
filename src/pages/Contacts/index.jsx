import React from 'react'
import { Text } from '@chakra-ui/react'
import YaMap from './YaMap'
import CONTACTS_DATA from './data'
import { PageBlock } from '../../components'

const { TARGET_COORDS, MAP_CENTER_COORDS } = CONTACTS_DATA

export default function Contacts() {
  return (
    <>
      <Text>
        Contacts page
      </Text>
      <PageBlock height="40vh">
        <YaMap target={TARGET_COORDS} mapCenter={MAP_CENTER_COORDS} />
      </PageBlock>
    </>
  )
}
