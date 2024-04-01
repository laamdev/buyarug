import Image from 'next/image'
import Link from 'next/link'
import { TbPhotoOff } from 'react-icons/tb'

import { CURRENCY } from '@/lib/config'
import { Product } from '@/types/product'
import { formatAmountForDisplay } from '@/utils/helpers/stripe-helpers'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const discounts = product.aggregateOffer.offers.map(
    offer => offer.salePercentage
  )

  const maxDiscount = Math.max(...discounts)

  return (
    <Link href={`/product/${product.slug}`} className='group block'>
      <div
        aria-hidden='true'
        className='tw-transition relative aspect-[3/4] overflow-hidden rounded bg-stone-200 shadow group-hover:opacity-75'
      >
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-stone-500'>
          <TbPhotoOff className='size-8 opacity-25 lg:size-24' />
        </div>
        {product?.images && (
          <Image
            src={product?.images[0]}
            fill
            alt={product.productName}
            className='object-cover object-center'
          />
        )}
      </div>
      <div>
        <div>
          <h3 className='mt-2 text-sm font-bold text-stone-900 lg:text-base'>
            {product.model} - {product.productName}
          </h3>
          <h5 className='text-xs font-medium text-stone-700 lg:text-sm'>
            by {product.manufacturerName}
          </h5>
        </div>

        <div className='mt-2 uppercase text-pink-600'>
          {maxDiscount !== 0 && (
            <div className='text-xs font-medium lg:text-sm'>
              Save up to {Math.round(maxDiscount)}%
            </div>
          )}
          <div className='text-base font-semibold'>
            {product.minSalePrice !== 0 || product.maxSalePrice !== 0 ? (
              <>
                <span>
                  {formatAmountForDisplay(product.minSalePrice, CURRENCY)}
                </span>
                <span> — </span>
                <span>
                  {formatAmountForDisplay(product.maxSalePrice, CURRENCY)}
                </span>
              </>
            ) : (
              <div className='text-stone-900'>
                <span>
                  {formatAmountForDisplay(product.minPrice, CURRENCY)}
                </span>
                <span> — </span>
                <span>
                  {formatAmountForDisplay(product.maxPrice, CURRENCY)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
