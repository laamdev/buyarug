'use client'

import { ReactNode } from 'react'
import { CartProvider as USCProvider } from 'use-shopping-cart'

import * as config from '@/lib/config'

export const CartProvider = ({ children }: { children: ReactNode }) => (
  <USCProvider
    // // mode="payment"
    // // // // cartMode="client-only"
    // // successUrl="http://localhost:3000"
    // // cancelUrl="http://localhost:3000/nowosci"
    // // billingAddressCollection={true}
    cartMode='checkout-session'
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
    currency={config.CURRENCY}
    language={config.LANGUAGE}
    shouldPersist
  >
    {children}
  </USCProvider>
)
