import { type FC } from "react"
import { Box, type BoxProps, Button, Stack, Text } from "@chakra-ui/react"

import { type CardWithLink } from "@/types"

export const WithLink: FC<CardWithLink & BoxProps> = ({
  title,
  description,
  link,
  image,
  type,
  ...boxProps
}) => {

  return (
    <Box {...boxProps}>
      <Stack>
        <Box bg="gray.500">
          {image}
        </Box>

        <Text fontSize="3xl">{title}</Text>
        <Text fontSize="3xl">{description}</Text>
        <Button as="a">Подробнее</Button>
      </Stack>
    </Box>
  )
}
