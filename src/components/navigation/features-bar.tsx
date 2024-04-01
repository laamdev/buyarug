import { HeadsetIcon, PackageIcon, TruckIcon } from 'lucide-react'
import Link from 'next/link'

export const FeaturesBar = () => {
  return (
    <div className='flex h-16 items-center justify-between bg-pink-800 px-4 text-xs font-medium uppercase text-white sm:px-6 lg:h-12 lg:px-8 lg:text-sm'>
      <div>
        <Link
          href='/policies/delivery-policy'
          className='tw-transition flex flex-col items-center gap-y-1 hover:text-pink-100 lg:flex-row lg:gap-x-2 lg:gap-y-0'
        >
          <PackageIcon className='size-5 lg:size-6' />
          <span className='block'>Free Shipping</span>
        </Link>
      </div>
      <div>
        <a
          href='tel:01189788050'
          className='tw-transition flex flex-col items-center gap-y-1 hover:text-pink-100 lg:flex-row lg:gap-x-2 lg:gap-y-0'
        >
          <HeadsetIcon className='size-5 lg:size-6' />
          <span className='block'>Expert Advice</span>
        </a>
      </div>
      <div>
        <Link
          href='/policies/return-policy'
          className='tw-transition flex flex-col items-center gap-y-1 hover:text-pink-100 lg:flex-row lg:gap-x-2 lg:gap-y-0'
        >
          <TruckIcon className='size-5 lg:size-6' />
          <span className='block'>Simple Returns</span>
        </Link>
      </div>
    </div>
  )
}
