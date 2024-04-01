'use client'

import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { EmptyCart } from '@/components/illustrations/empty-cart'
import { CheckoutButton } from '@/components/stripe/checkout-button'
import { QuantityButtons } from '@/components/stripe/quantity-buttons'
import { RemoveFromCartButton } from '@/components/stripe/remove-from-cart-button'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { CURRENCY } from '@/lib/config'
import { getLastWord, removeLastWord } from '@/lib/utils'
import { useCartStore } from '@/store/cart'
import { useStore } from '@/store/useStore'
import { formatAmountForDisplay } from '@/utils/helpers/stripe-helpers'

export const CartSlideOver = () => {
  const [open, setOpen] = useState(false)
  const cart = useStore(useCartStore, state => state.cart)!
  const count = useStore(useCartStore, state => state.count())!

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant='ghost' size='icon' className='relative'>
          <ShoppingCartIcon className='size-6' strokeWidth={2} />
          <CartCountLabel item={count} />
        </Button>
        {/* </div> */}
      </SheetTrigger>
      <SheetContent className='overflow-y-scroll'>
        <SheetHeader>
          <SheetTitle>{`Your Cart`}</SheetTitle>
          <SheetDescription className='overflow-y-auto'>
            <div className='mt-4 flex flex-col gap-y-4'>
              {cart?.length ? (
                cart.map(product => {
                  return (
                    <div key={product.id} className='flex gap-x-4'>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={720}
                        height={1200}
                        className='w-1/5'
                      />
                      <div className='flex w-4/5 flex-col justify-between'>
                        <div className='flex flex-col gap-y-0.5'>
                          <p className='text-sm font-bold'>
                            {removeLastWord(product.name)}
                          </p>
                          <p className='text-xs font-medium'>
                            {getLastWord(product.name)}
                          </p>
                          <p className='font-bold text-black'>
                            {formatAmountForDisplay(
                              product.price / 100,
                              CURRENCY
                            )}
                          </p>
                        </div>
                        <div className='flex items-center justify-between'>
                          <QuantityButtons product={product} />
                          <RemoveFromCartButton productId={product.id} />
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <div className='mt-24 flex h-full flex-col items-center justify-center gap-y-8'>
                  <EmptyCart className='size-48 opacity-50' />
                  <p className='text-2xl font-bold text-black'>{`Your cart is empty.`}</p>
                </div>
              )}
            </div>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className='flex items-center justify-center'>
          {cart?.length ? (
            <CheckoutButton />
          ) : (
            <Button
              onClick={() => {
                setOpen(false)
              }}
            >{`Buy something`}</Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

const CartCountLabel: React.FC<{ item: number | undefined }> = ({ item }) => {
  if (item === 0) return <></>

  return (
    <span className='absolute right-0 top-0 grid size-4 place-content-center rounded-full bg-red-400 text-xs font-semibold text-white'>
      {item}
    </span>
  )
}
