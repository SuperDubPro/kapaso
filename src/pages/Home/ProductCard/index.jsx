import React from 'react'
import {
  Circle, Text, Heading, Button, VStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Card } from '../../../components'

export default function ProductCard({
  icon, header, text, to, btnText,
}) {
  return (
    <Card
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <VStack>
        <Circle
          size={12}
          bgColor="teal.500"
          color="white"
        >
          {icon}
        </Circle>

        <Heading as="h2" fontSize="xl" mt="1em" mb="0.5em">{header}</Heading>
        <Text fontSize="lg" opacity={0.7} textAlign="center">{text}</Text>
      </VStack>

      {to && <Button as={RouterLink} variant="outline" mt="1em" to={to}>{btnText}</Button>}
    </Card>
  )
}
