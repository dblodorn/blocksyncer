const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/collections',
        destination: '/',
        permanent: false,
      },
    ]
  },
  images: {
    domains: [
      // For debugging images
      'source.unsplash.com',
      'zora-dev.mypinata.cloud',
    ],
  },
}

module.exports = withVanillaExtract(nextConfig)
