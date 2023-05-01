import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const breakpoints = {
  sm: '30em', // 480px default
  md: '54em', // 864px
  lg: '62em', // 992px default
  xl: '80em', // 1280px default
  '2xl': '96em', // 1536px default
}

const colors = {
  kapaso: {
    darker: '#15264b',
    dark: '#1e3668',
    base: '#2B4D95',
    light: '#527acd',
    lighter: '#84a0db',
  },
  kapasoAlpha: {
    50: 'rgba(43, 77, 149, 0.04)',
    100: 'rgba(43, 77, 149, 0.06)',
    200: 'rgba(43, 77, 149, 0.08)',
    300: 'rgba(43, 77, 149, 0.16)',
    400: 'rgba(43, 77, 149, 0.24)',
    500: 'rgba(43, 77, 149, 0.36)',
    600: 'rgba(43, 77, 149, 0.48)',
    700: 'rgba(43, 77, 149, 0.64)',
    800: 'rgba(43, 77, 149, 0.80)',
    900: 'rgba(43, 77, 149, 0.92)',
  },
}

const theme = extendTheme({ config, colors, breakpoints })

export default theme
