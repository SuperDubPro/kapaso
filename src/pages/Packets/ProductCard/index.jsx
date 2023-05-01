import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { Card } from '../../../components'

export default function ProductCard({ title, image }) {
  return (
    <Card
      width={['300px', '400px']}
      height={['450px', '600px']}
      isDark
      justifyContent="center"
    >
      <Box
        borderRadius={12}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundImage={image}
        height="85%"
      />

      <Heading textAlign="center" size="md" pt={6}>
        {title}
      </Heading>
    </Card>
  )
}
