import Link from 'next/link'

const offers = [
  {
    name: 'Free delivery',
    description: 'On all mainland UK orders',
    href: '/policies/delivery-policy'
  },
  {
    name: 'Easy returns',
    description: 'Fast and free for 30 days',
    href: '/policies/return-policy'
  },
  {
    name: 'We price match',
    description: 'Lowest prices guaranteed',
    href: '#'
  }
]

export const Offers = () => {
  return (
    <nav aria-label='Offers' className='order-last lg:order-first'>
      <div className='mx-auto max-w-7xl lg:px-8'>
        <ul
          role='list'
          className='grid grid-cols-1 divide-y divide-stone-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0'
        >
          {offers.map(offer => (
            <li key={offer.name} className='flex flex-col'>
              <Link
                href={offer.href}
                className='relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10'
              >
                <span className='text-sm text-stone-500'>{offer.name}</span>
                <span className='font-semibold text-stone-900'>
                  {offer.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
