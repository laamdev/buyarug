import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { CartProductType } from '@/types/product'

interface CartItem extends CartProductType {
  count: number
}

type CartStore = {
  cart: CartItem[]
  count: () => number
  add: (product: CartProductType) => void
  remove: (idProduct: string) => void
  removeAll: (idProduct: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      count: () => {
        const { cart } = get()
        if (cart.length)
          return cart
            .map(item => item.count)
            .reduce((prev, curr) => prev + curr)
        return 0
      },
      add: (product: CartProductType) => {
        const { cart } = get()
        const updatedCart = updateCart(product, cart)
        set({ cart: updatedCart })
      },
      remove: (idProduct: string) => {
        const { cart } = get()
        const updatedCart = removeCart(idProduct, cart)
        set({ cart: updatedCart })
      },
      removeAll: (idProduct: string) => {
        const { cart } = get()
        const updatedCart = removeAll(idProduct, cart)
        set({ cart: updatedCart })
      },
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'cart-storage'
      // // skipHydration: true
      // // storage: createJSONStorage(() => sessionStorage)
    }
  )
)

function updateCart(product: CartProductType, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem

  const productOnCart = cart.map(item => item.id).includes(product.id)

  if (!productOnCart) cart.push(cartItem)
  else {
    return cart.map(item => {
      if (item.id === product.id)
        return { ...item, count: item.count + 1 } as CartItem
      return item
    })
  }

  return cart
}

function removeCart(idProduct: string, cart: CartItem[]): CartItem[] {
  return cart
    .map(item => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 }
      return item
    })
    .filter(item => {
      return item.count
    })
}

function removeAll(idProduct: string, cart: CartItem[]): CartItem[] {
  return cart
    .map(item => {
      if (item.id === idProduct) return { ...item, count: 0 }
      return item
    })
    .filter(item => {
      return item.count
    })
}
