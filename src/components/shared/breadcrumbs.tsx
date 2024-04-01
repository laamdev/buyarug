import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import slugify from 'slugify'

import { cn } from '@/lib/utils'

export const Breadcrumbs = ({ brand, range, model, product, filter }: any) => {
  return (
    <>
      {/* <BreadcrumbSchema breadcrumbData={breadcrumbs} /> */}
      <nav className='mb-6 flex lg:mb-12' aria-label='Breadcrumb'>
        <ol role='list' className='mx-auto flex w-full flex-wrap gap-2'>
          <li className='flex'>
            <div className='flex items-center'>
              <Link
                href='/'
                className='tw-transition text-sm font-medium capitalize text-stone-900 hover:text-pink-600'
              >
                Home
              </Link>
            </div>
          </li>
          {filter && (
            <li className='flex'>
              <div className='flex items-center'>
                <ChevronRightIcon className='size-4' />
                <p className='tw-transition ml-2 text-sm font-medium capitalize text-stone-900'>
                  {filter}
                </p>
              </div>
            </li>
          )}
          {brand && (
            <li className='flex'>
              <div className='flex items-center'>
                <ChevronRightIcon className='size-4' />
                <Link
                  href={`/brand/${slugify(brand, {
                    lower: true,
                    strict: true
                  })}`}
                  className={cn(
                    !range ? 'pointer-events-none' : 'hover:text-pink-600',
                    'tw-transition ml-2 text-sm font-medium capitalize text-stone-900'
                  )}
                >
                  {brand}
                </Link>
              </div>
            </li>
          )}
          {range && (
            <li className='flex'>
              <div className='flex items-center'>
                <ChevronRightIcon className='size-4' />
                <Link
                  href={`/brand/${slugify(brand, {
                    lower: true,
                    strict: true
                  })}/range/${slugify(range, {
                    lower: true,
                    strict: true
                  })}`}
                  className={cn(
                    !product ? 'pointer-events-none' : 'hover:text-pink-600',
                    'tw-transition ml-2 text-sm font-medium capitalize text-stone-900'
                  )}
                >
                  {range}
                </Link>
              </div>
            </li>
          )}
          {product && (
            <li className='flex'>
              <div className='flex items-center'>
                <ChevronRightIcon className='size-4' />
                <p className='tw-transition ml-2 text-sm font-medium capitalize text-stone-900'>
                  {model} - {product}
                </p>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </>
  )
}
