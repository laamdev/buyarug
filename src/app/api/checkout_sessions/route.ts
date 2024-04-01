import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import stripe from '@/lib/stripe'
import { CartProductType } from '@/types/product'

export async function POST(req: NextRequest) {
  const headersList = headers()
  const { cart } = await req.json()

  interface CartItem extends CartProductType {
    count: number
  }

  const cartArray: CartItem[] = Object.values(cart) as CartItem[]

  const lineItems = cartArray.map((item: CartItem) => {
    return {
      price_data: {
        tax_behavior: 'inclusive',
        currency: item.currency,
        product_data: {
          name: item.name,
          images: [item.image]
        },
        unit_amount: item.price
      },
      quantity: item.count
    }
  })

  try {
    //@ts-expect-error
    const session = await stripe.checkout.sessions.create({
      submit_type: 'pay',
      payment_method_types: ['card'],
      line_items: lineItems,
      billing_address_collection: 'auto',
      mode: 'payment',
      invoice_creation: {
        enabled: true
      },
      shipping_address_collection: {
        allowed_countries: ['GB']
      },
      phone_number_collection: { enabled: true },
      automatic_tax: {
        enabled: true
      },
      locale: 'en',
      currency: 'GBP',
      success_url: `${headersList.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headersList.get('origin')}/`
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Error creating checkout session' })
  }
}
