/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com'
      }
    ]
  },

  async redirects() {
    return [
      {
        source: '/info/about',
        destination: '/about',
        permanent: true
      },
      {
        source: '/info/delivery-returns',
        destination: '/policies/delivery-and-returns',
        permanent: true
      },
      {
        source: '/info/international-delivery',
        destination: '/policies/delivery-and-returns',
        permanent: true
      },
      {
        source: '/designer/:slug*',
        destination: '/brand/:slug',
        permanent: true
      },
      {
        source: '/designer/louis-de-poortere/fading-world',
        destination: '/brand/louis-de-poortere/range/fading-world',
        permanent: true
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.buyarug.co.uk' }],
        destination: 'https://buyarug.co.uk/:path*',
        permanent: true
      }
    ]
  }
}

export default nextConfig
