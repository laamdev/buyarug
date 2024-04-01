import { ArrowRightIcon } from 'lucide-react'

import { Hero } from '@/components/home/hero'
import { Products as FeaturedProducts } from '@/components/home/products'
import { Products as ClearanceProducts } from '@/components/home/products'
import { Testimonials } from '@/components/home/testimonials'
import { MaxWidthContainer } from '@/components/shared/max-width-container'
import {
  getClearanceProducts,
  getFeaturedProducts,
  getMenu
} from '@/lib/elasticSearch/fetchers'
import { getFormattedProduct } from '@/utils/helpers/product'

export default async function HomePage() {
  const featuredProductsDataRes = getFeaturedProducts()
  const clearanceProductsDataRes = getClearanceProducts()
  const menuDataRes = getMenu()

  const [featuredProductsRaw, clearanceProductsRaw, menuData] =
    await Promise.all([
      featuredProductsDataRes,
      clearanceProductsDataRes,
      menuDataRes
    ])

  const featuredProducts = featuredProductsRaw.map(product =>
    getFormattedProduct(product._source)
  )
  const clearanceProducts = clearanceProductsRaw.map(product =>
    getFormattedProduct(product._source)
  )

  return (
    <div>
      <Hero />

      <MaxWidthContainer className='tw-page-space flex flex-col'>
        {featuredProducts && featuredProducts.length !== 0 && (
          <div id='featured'>
            <FeaturedProducts
              products={featuredProducts}
              heading='Best Sellers'
            />
          </div>
        )}

        {clearanceProducts && clearanceProducts.length !== 0 && (
          <div id='clearance'>
            <ClearanceProducts
              products={clearanceProducts}
              heading='Clearance Deals'
            />
          </div>
        )}

        <div className='mx-auto grid max-w-2xl'>
          <Testimonials />
          <a
            href='https://uk.trustpilot.com/review/buyarug.co.uk'
            target='_blank'
            rel='noreferrer'
            className='tw-transition mt-5 flex justify-center gap-x-1 text-pink-600 hover:text-pink-700 lg:mt-10'
          >
            <span className='block text-xs font-bold uppercase lg:text-sm'>
              More Reviews
            </span>
            <ArrowRightIcon className='size-5 lg:size-6' />
          </a>
        </div>
      </MaxWidthContainer>
    </div>
  )
}
