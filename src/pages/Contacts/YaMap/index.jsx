import React from 'react'
import { useBreakpointValue } from '@chakra-ui/react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export default function YaMap({ target, mapCenter }) {
  const responsiveMapCenter = useBreakpointValue({
    base: target,
    sm: target,
    md: mapCenter,
  })

  return (
    <YMaps>
      <Map
        defaultState={{
          center: responsiveMapCenter,
          zoom: 14,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
        width="100%"
        height="100%"
      >
        <Placemark
          modules={['geoObject.addon.balloon']}
          defaultGeometry={target}
          properties={{
            balloonContentBody:
                  'This is balloon loaded by the Yandex.Maps API module system',
          }}
        />
      </Map>
    </YMaps>
  )
}
