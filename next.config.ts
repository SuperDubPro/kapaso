import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    formats: ["image/webp"],
  },
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
