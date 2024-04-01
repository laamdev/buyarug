import { MetadataRoute } from 'next'

import { siteMetadata } from '@/data/global'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: siteMetadata.title,
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#9D174D',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
