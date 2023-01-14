import React from 'react'
import {
  Text, VStack,
} from '@chakra-ui/react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export default function Contacts() {
  return (
    <VStack spacing={8}>
      <Text>
        Contacts page
      </Text>
      <YMaps style={{ width: '100%' }}>
        <Map
          defaultState={{
            center: [55.108658, 36.618008],
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
          width="100%"
          height="350px"
        >
          <Placemark
            modules={['geoObject.addon.balloon']}
            defaultGeometry={[55.107760, 36.632923]}
            properties={{
              balloonContentBody:
                'This is balloon loaded by the Yandex.Maps API module system',
            }}
          />
        </Map>
      </YMaps>
    </VStack>
  )
}
