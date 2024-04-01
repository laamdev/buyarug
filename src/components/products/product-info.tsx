'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import slugify from 'slugify'

import { ProductDescription } from '@/components/products/product-description'
import { ProductDetails } from '@/components/products/product-details'
import { ProductImageCarousel } from '@/components/products/product-image-carousel'
import { ProductImageGallery } from '@/components/products/product-image-gallery'
import { ProductSizePicker } from '@/components/products/product-size-picker'
import { ProductVariantPicker } from '@/components/products/product-variant-picker'
import { CURRENCY } from '@/lib/config'
import { ProductOffer } from '@/types/product'
import { CartProductType } from '@/types/product'
import { formatAmountForDisplay } from '@/utils/helpers/stripe-helpers'

export const ProductInfo = ({
  formattedProduct,
  maxDiscount,
  productSizes,
  productVariantsData
}: any) => {
  const [displayProduct, setDisplayProduct] = useState<ProductOffer | null>(
    null
  )
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedCartProduct, setSelectedCartProduct] =
    useState<CartProductType | null>(null)

  return (
    <div className='flex flex-col gap-x-12 lg:flex-row'>
      <div className='hidden lg:block lg:w-3/5'>
        {formattedProduct.images && formattedProduct.images.length !== 0 ? (
          <ProductImageGallery
            images={formattedProduct.images}
            alt={formattedProduct.productName}
          />
        ) : (
          <div className='relative h-96 w-full'>
            <Image
              alt='No image placeholder.'
              src='/images/shared/placeholder.webp'
              fill
              className='object-contain object-center'
            />
          </div>
        )}
      </div>

      <div className='mb-6 w-full lg:hidden'>
        {formattedProduct.images && formattedProduct.images.length !== 0 ? (
          <ProductImageCarousel
            images={formattedProduct.images}
            alt={formattedProduct.productName}
          />
        ) : (
          <div className='relative h-96 w-full'>
            <Image
              alt='No image placeholder.'
              src='/images/shared/placeholder.webp'
              fill
              className='object-contain object-center'
            />
          </div>
        )}
      </div>

      <div className='sticky top-0 w-full lg:w-2/5'>
        <div className='flex flex-col'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight text-stone-900 sm:text-2xl lg:text-4xl'>
              {formattedProduct.model} - {formattedProduct.productName}
            </h1>
            <div className='mt-1 flex items-baseline gap-1 font-medium text-stone-700 sm:mt-1.5 lg:mt-2'>
              <p>by</p>
              <Link
                href={`/brand/${slugify(formattedProduct.brand, {
                  lower: true,
                  strict: true
                })}`}
                className='tw-transition text-lg underline hover:text-pink-600'
              >
                {formattedProduct.brand}
              </Link>
            </div>
          </div>

          {maxDiscount === 0 ? (
            <div className='mt-4'>
              <div className='flex items-baseline gap-x-3'>
                <div className='flex gap-x-1 text-base font-medium uppercase text-pink-600'>
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>
          ) : (
            <div className='mt-4'>
              <div className='flex items-baseline gap-x-3'>
                <div className='flex gap-x-1 text-base font-semibold uppercase text-pink-600'>
                  {!displayProduct ? (
                    <span>Up to {maxDiscount}% off + Free Shipping</span>
                  ) : (
                    <span>
                      Up to {displayProduct.salePercentage}% off + Free Shipping
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className='mt-4'>
            <div className='flex items-baseline gap-x-3'>
              {!displayProduct ? (
                <>
                  {formattedProduct.minSalePrice !==
                    formattedProduct.minPrice ||
                  formattedProduct.maxSalePrice !==
                    formattedProduct.maxPrice ? (
                    <>
                      <div className='flex gap-x-1 text-xl font-semibold uppercase text-pink-600'>
                        <span>
                          {formatAmountForDisplay(
                            formattedProduct.minSalePrice,
                            CURRENCY
                          )}
                        </span>
                        <span>—</span>
                        <span>
                          {formatAmountForDisplay(
                            formattedProduct.maxSalePrice,
                            CURRENCY
                          )}
                        </span>
                      </div>
                      <div className='flex gap-x-1 text-sm font-medium uppercase text-stone-700 line-through'>
                        <span>
                          {formatAmountForDisplay(
                            formattedProduct.minPrice,
                            CURRENCY
                          )}
                        </span>
                        <span>—</span>
                        <span>
                          {formatAmountForDisplay(
                            formattedProduct.maxPrice,
                            CURRENCY
                          )}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className='flex gap-x-1 text-xl font-semibold uppercase text-stone-900'>
                      <span>
                        {formatAmountForDisplay(
                          formattedProduct.minPrice,
                          CURRENCY
                        )}
                      </span>
                      <span>—</span>
                      <span>
                        {formatAmountForDisplay(
                          formattedProduct.maxPrice,
                          CURRENCY
                        )}
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {displayProduct.salePrice !== displayProduct.price ? (
                    <>
                      <div className='flex gap-x-1 text-xl font-semibold uppercase text-pink-600'>
                        {formatAmountForDisplay(
                          displayProduct.salePrice,
                          CURRENCY
                        )}
                      </div>
                      <div className='flex gap-x-1 text-sm font-medium uppercase text-stone-700 line-through'>
                        {formatAmountForDisplay(displayProduct.price, CURRENCY)}
                      </div>
                    </>
                  ) : (
                    <div className='text-xl font-semibold uppercase text-stone-900'>
                      {formatAmountForDisplay(displayProduct.price, CURRENCY)}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        <div className='mt-8 lg:col-span-5'>
          <ProductSizePicker
            formattedProduct={formattedProduct}
            displayProduct={displayProduct}
            productSizes={productSizes}
            setDisplayProduct={setDisplayProduct}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedCartProduct={selectedCartProduct}
            setSelectedCartProduct={setSelectedCartProduct}
          />
          {formattedProduct.description && (
            <ProductDescription description={formattedProduct.description} />
          )}

          <ProductDetails formattedProduct={formattedProduct} />

          <ProductVariantPicker productVariantsData={productVariantsData} />
        </div>
      </div>
    </div>
  )
}
