import '@/app/styles/global.css'

import { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Footer } from '@/components/navigation/footer'
import { Header } from '@/components/navigation/header'
import { CartProvider } from '@/components/stripe/cart'
import { siteMetadata } from '@/data/global'
import { getMenu } from '@/lib/elasticSearch/fetchers'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: `${siteMetadata.siteUrl}/images/og.png`,
        width: 1200,
        height: 630
      }
    ],
    locale: 'en-GB',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: siteMetadata.title,
    site: siteMetadata.title,
    card: 'summary_large_image',
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.siteUrl}/images/og.png`,
        alt: `${siteMetadata.title} logo`,
        width: 1200,
        height: 630
      }
    ]
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/apple-icon.png'
  }
}

export const viewport: Viewport = {
  themeColor: '#000'
}

interface RootLayoutProps {
  children: ReactNode
  menuData: any
}

export default async function RootLayout({
  children
}: Readonly<RootLayoutProps>) {
  const menuData = await getMenu()

  return (
    <html lang='en' className='h-full'>
      <CartProvider>
        <body
          className={cn(
            'antialised relative h-full font-sans',
            `${inter.className}`
          )}
        >
          <Header menuData={menuData} />

          <main className='relative flex min-h-screen flex-col'>
            {/* <ShoppingCartModal /> */}

            {children}
          </main>
          <Footer />
        </body>
      </CartProvider>
    </html>
  )
}
