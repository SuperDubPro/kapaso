import React from 'react'
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import SocialButton from './SocialButton'
import packageJson from '../../../package.json'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      position="relative"
      width="100%"
    >
      <Container
        as={Stack}
        margin={0}
        maxW="100%"
        pt={12}
        pb={8}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        fontSize={{ base: 'md', lg: 'lg' }}
      >
        <VStack align="start">
          <Text>{t('footer.copyright')}</Text>
        </VStack>
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

      <Box position="absolute" bottom="0" left="16px">
        <Text opacity="0.1">{`v${packageJson.version}`}</Text>
      </Box>
    </Box>
  )
}
