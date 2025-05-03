import React from "react"
import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react"
// import { ChevronRightIcon } from '@chakra-ui/icons'
// import { useTranslation } from 'react-i18next'
import { BiChevronRight } from "react-icons/bi"
// import { Link as RouterLink } from 'react-router-dom'

interface Props {
  title: string
  href: string
  description?: string
}

export const DesktopSubNav: React.FC<Props> = ({ title, description }) => {
  // const { t } = useTranslation()
  // const fontColor = useColorModeValue('kapaso.base', 'kapaso.lighter')
  // const hoverBgColor = useColorModeValue('kapasoAlpha.100', 'gray.900')

  return (
    // <Link
    //   as={RouterLink}
    //   to={href}
    //   role="group"
    //   display="block"
    //   p={2}
    //   rounded="md"
    //   _hover={{ bg: hoverBgColor }}
    // >
    <Stack direction="row" align="center">
      <Box>
        <Text
          transition="all .3s ease"
          // _groupHover={{ color: fontColor }}
          fontWeight={500}
        >
          {title}
          {/* {t(label)} */}
        </Text>
        <Text fontSize="sm">{description}</Text>
        {/* <Text fontSize="sm">{t(subLabel)}</Text> */}
      </Box>
      <Flex
        transition="all .3s ease"
        transform="translateX(-10px)"
        opacity={0}
        _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
        justify="flex-end"
        align="center"
        flex={1}
      >
        <Icon>
          <BiChevronRight />
        </Icon>
        {/* <Icon color={fontColor} w={5} h={5} as={ChevronRightIcon} /> */}
      </Flex>
    </Stack>
    // </Link>
  )
}
