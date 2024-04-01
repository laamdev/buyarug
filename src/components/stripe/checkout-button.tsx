'use client'

import { loadStripe } from '@stripe/stripe-js'

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { useStore } from '@/store/useStore'

export const CheckoutButton = () => {
  const cart = useStore(useCartStore, state => state.cart)!
  const count = useStore(useCartStore, state => state.count())!

  const redirectToCheckout = async () => {
    try {
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
      )

      if (!stripe) throw new Error('Stripe failed to initialize.')

      const checkoutResponse = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart })
      })

      const { sessionId } = await checkoutResponse.json()
      const stripeError = await stripe.redirectToCheckout({ sessionId })

      if (stripeError) {
        console.error(stripeError)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button
      onClick={() => count > 0 && redirectToCheckout()}
      disabled={count === 0}
    >
      Checkout
    </Button>
  )
}
