import React from 'react'
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import SocialButton from './SocialButton'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        margin={0}
        maxW="100%"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        fontSize={{ base: 'md', lg: 'lg' }}
      >
        <Text>{t('footer.copyright')}</Text>
        <Stack direction="row" spacing={6}>
          <SocialButton label="Twitter" href="#">
            <FaTwitter />
          </SocialButton>
          <SocialButton label="YouTube" href="#">
            <FaYoutube />
          </SocialButton>
          <SocialButton label="Instagram" href="#">
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
