'use client'

import { cn } from '@/lib/utils'
import { useCartStore } from '@/store/cart'

export const AddToCartButton = ({ displayProduct, selectedCartProduct }) => {
  const { add: handleAddToCart } = useCartStore()
  return (
    <button
      className={cn(
        'tw-transition mt-10 flex w-full items-center justify-center rounded border border-transparent bg-pink-600 px-10 py-5 text-lg font-medium uppercase text-stone-50 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:opacity-50 disabled:hover:bg-stone-500'
      )}
      disabled={!displayProduct && true}
      onClick={() => handleAddToCart(selectedCartProduct)}
    >
      {`Add to cart`}
    </button>
  )
}
