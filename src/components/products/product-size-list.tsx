import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'

import { CURRENCY } from '@/lib/config'
import { cn } from '@/lib/utils'
import { Product, ProductOffer } from '@/types/product'
import { toFeet, toPercentage } from '@/utils/helpers'
import { formatAmountForDisplay } from '@/utils/helpers/stripe-helpers'

interface ProductSizeListProps {
  formattedProduct: Product
  selectedSize: string
  setSelectedSize: (setSelectedSize: string) => void
  setOpen: (open: boolean) => void
}

export const ProductSizeList = ({
  formattedProduct,
  selectedSize,
  setSelectedSize,
  setOpen
}: ProductSizeListProps) => {
  return (
    <RadioGroup
      value={selectedSize}
      onChange={setSelectedSize}
      className='mt-4'
    >
      <RadioGroup.Label className='sr-only'>Choose a size</RadioGroup.Label>
      <div className='flex flex-col gap-y-3'>
        {formattedProduct.aggregateOffer.offers.map((offer: ProductOffer) => {
          return (
            <RadioGroup.Option
              as='div'
              key={offer.sku}
              value={offer.sku}
              onClick={() => setOpen(false)}
              className={({ active }) =>
                cn(
                  active ? 'ring-2 ring-pink-500' : '',
                  'relative block cursor-pointer rounded border border-stone-300 bg-stone-100 p-4 focus:outline-none'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label
                    as='p'
                    className='flex justify-between text-base font-medium text-stone-900'
                  >
                    <div className='flex items-center gap-x-2 lg:gap-x-3'>
                      <div className='relative size-12 lg:size-12'>
                        <Image
                          src={
                            offer?.shape.toLowerCase() === 'round'
                              ? '/images/icons/shape-circle.webp'
                              : offer?.shape.toLowerCase() === 'square'
                                ? '/images/icons/shape-square.webp'
                                : '/images/icons/shape-rectangle.webp'
                          }
                          alt='Rug shape.'
                          fill
                          className='object-contain object-center'
                        />
                      </div>
                      <div className='flex flex-col uppercase'>
                        <div>
                          <span>
                            {offer?.dimensions?.width} x{' '}
                            {offer?.dimensions?.height}{' '}
                          </span>
                          <span>{offer.shape}</span>
                        </div>
                        <div>
                          <span className='text-xs text-stone-500'>
                            {toFeet(offer?.dimensions?.width)} x{' '}
                            {toFeet(offer?.dimensions?.height)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col gap-y-1 text-right uppercase text-pink-600'>
                      {offer.salePrice !== offer.price && (
                        <>
                          <span>
                            {toPercentage(offer.price, offer.salePrice)}% off
                          </span>
                          <span
                            className={`text-stone-600 ${
                              offer.salePrice !== 0
                                ? 'text-xs	text-black line-through'
                                : ''
                            }`}
                          >
                            {formatAmountForDisplay(offer.price, CURRENCY)}
                          </span>
                        </>
                      )}
                      {offer.salePrice !== offer.price ? (
                        <span className='text-pìnk-500'>
                          {formatAmountForDisplay(offer.salePrice, CURRENCY)}
                        </span>
                      ) : (
                        <span className='text-pìnk-500'>
                          {formatAmountForDisplay(offer.price, CURRENCY)}
                        </span>
                      )}
                    </div>
                  </RadioGroup.Label>

                  <div
                    className={cn(
                      active ? 'border' : 'border-2',
                      checked ? 'border-pink-500' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded'
                    )}
                    aria-hidden='true'
                  />
                </>
              )}
            </RadioGroup.Option>
          )
        })}
      </div>
    </RadioGroup>
  )
}
