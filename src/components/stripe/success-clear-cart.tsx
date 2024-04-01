'use client'

import { useEffect } from 'react'

import { useCartStore } from '@/store/cart'

export const SuccessClearCart = () => {
  // const clearCart = useStore(useCartStore, state => state.clearCart())!

  const { clearCart } = useCartStore()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return <div></div>
}
