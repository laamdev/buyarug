import { UndoIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { MaxWidthContainer } from '@/components/shared/max-width-container'

export const metadata: Metadata = {
  title: '404',
  description: 'Page not found.'
}

export default async function ErrorPage() {
  return (
    <MaxWidthContainer className='grid min-h-screen place-content-center'>
      <div className='mx-auto -mt-24 flex max-w-2xl flex-col items-center justify-center px-3 text-center lg:px-0'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-black  uppercase text-pink-700 lg:text-7xl'>
            {`Oops!`}
          </h1>
          <h2 className='mt-1 text-2xl font-medium lg:mt-2 lg:text-4xl'>
            {`We're very sorry, but the page you requested cannot be found.`}
          </h2>
        </div>

        <div className='mt-3 w-fit lg:mt-6'>
          <Link
            href='/'
            className='tw-transition flex flex-col items-center text-lg font-bold uppercase text-pink-600 hover:text-pink-700 lg:text-xl'
          >
            <UndoIcon />
            <p>{`Back Home`}</p>
          </Link>
        </div>
      </div>
    </MaxWidthContainer>
  )
}
