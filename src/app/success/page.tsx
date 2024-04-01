import { Metadata } from 'next'
import Link from 'next/link'
import Stripe from 'stripe'

import { SuccessClearCart } from '@/components/stripe/success-clear-cart'
import { CURRENCY } from '@/lib/config'
import stripe from '@/lib/stripe'
import { formatAmountForDisplay } from '@/utils/helpers/stripe-helpers'
// // import Link from 'next/link'

// // import { CURRENCY } from '@/lib/config'
// // import { formatAmountForDisplay } from '@/utils/helpers/stripe-helpers'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Successful buy at the buyarug.com website.'
}

export default async function SuccessRoute({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id.startsWith('cs_')) {
    throw Error('Incorrect CheckoutSession ID.')
  }

  const checkout_session: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['payment_intent']
    })

  const charge: Stripe.Charge = await stripe.charges.retrieve(
    // @ts-expect-error
    checkout_session?.payment_intent?.latest_charge
  )

  return (
    <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
      {checkout_session ? (
        <div>
          <SuccessClearCart />
          <h1 className='text-sm font-medium text-pink-600'>
            {`Payment successful`}
          </h1>
          <p className='mt-2 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl'>
            Thanks for ordering!
          </p>
          <p className='mt-4 text-base text-stone-500'>
            {`We appreciate your order, we’re currently processing it. So hang tight and we’ll send a full receipt to your email inbox very soon!`}
          </p>

          <div className='mt-8 rounded border bg-white p-6 shadow'>
            <div className='grid gap-y-6 lg:grid-cols-2'>
              <dl className=' text-sm font-medium'>
                <dt className='text-stone-900'>{`Receipt`}</dt>
                <dd className='mt-2 text-pink-600'>
                  <a
                    href={charge.receipt_url!}
                    target='_blank'
                    rel='noreferrer'
                  >{`View Receipt`}</a>
                </dd>
              </dl>

              <dl className='text-sm text-stone-600'>
                <div>
                  <dt className='font-medium text-stone-900'>
                    Shipping Address
                  </dt>
                  <dd className='mt-2'>
                    <address className='not-italic'>
                      <span className='block'>
                        {checkout_session?.shipping_details?.name}
                      </span>
                      <span className='block'>
                        {checkout_session?.shipping_details?.address?.line1}{' '}
                        {checkout_session?.shipping_details?.address?.line2}
                      </span>
                      <span className='block'>
                        {checkout_session?.shipping_details?.address?.city},{' '}
                        {
                          checkout_session?.shipping_details?.address
                            ?.postal_code
                        }
                        , {checkout_session?.shipping_details?.address?.country}
                      </span>
                    </address>
                  </dd>
                </div>
              </dl>
            </div>

            <dl className='mt-3 space-y-6 border-t border-stone-200 pt-6 text-sm font-medium text-stone-500 lg:mt-6'>
              <div className='flex justify-between'>
                <dt>Subtotal</dt>
                <dd className='text-stone-900'>
                  {formatAmountForDisplay(
                    (checkout_session?.amount_total! -
                      checkout_session?.total_details?.amount_tax!) /
                      100,
                    CURRENCY
                  )}
                </dd>
              </div>

              <div className='flex justify-between'>
                <dt>VAT UK (20%)</dt>
                <dd className='text-stone-900'>
                  {formatAmountForDisplay(
                    checkout_session?.total_details?.amount_tax! / 100,
                    CURRENCY
                  )}
                </dd>
              </div>

              <div className='flex justify-between'>
                <dt>Shipping</dt>
                <dd className='text-stone-900'>Free</dd>
              </div>

              <div className='flex items-center justify-between border-t border-stone-200 pt-6 text-stone-900'>
                <dt className='text-base'>Amount Paid</dt>
                <dd className='text-base'>
                  {formatAmountForDisplay(
                    checkout_session?.amount_total! / 100,
                    CURRENCY
                  )}
                </dd>
              </div>
            </dl>

            <div className='mt-8 border-t border-stone-200 py-6 text-right'>
              <Link
                href='/'
                className='text-sm font-medium text-pink-600 hover:text-pink-500'
              >
                Continue Shopping
                <span aria-hidden='true'> &rarr;</span>
              </Link>
            </div>
          </div>

          <p className='mt-8 text-sm text-stone-500'>
            Any issues? Contact us with your tracking number at{' '}
            <a
              href='mailto:shop@buyarug.co.uk'
              className='tw-transition font-semibold hover:text-pink-600'
            >
              shop@buyarug.co.uk
            </a>{' '}
            or call us at{' '}
            <a
              href='tel:+441189788050'
              className='tw-transition font-semibold hover:text-pink-600'
            >
              +44 118 978 8050
            </a>
            .
          </p>
        </div>
      ) : (
        <div
          role='status'
          className='mt-24 flex flex-col items-center justify-center'
        >
          <svg
            aria-hidden='true'
            className='mr-2 size-8 animate-spin fill-pink-600 text-stone-200'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
          <span className='sr-only'>Loading...</span>
        </div>
      )}
    </div>
  )
}
