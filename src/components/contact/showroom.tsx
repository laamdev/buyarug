import { Suspense } from 'react'

import { ShowroomMap } from '@/components/contact/showroom-map'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionText } from '@/components/shared/section-text'
import { storeLocation } from '@/data/info'

export const Showroom = () => {
  return (
    <section className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2'>
      <div className='col-span-1'>
        <div className='lg:col-start-2'>
          <SectionHeading>Visit Us</SectionHeading>
          <SectionText>
            BuyaRug.co.uk offers a huge range of rugs, carpets and mats in one
            place. You can choose from a wide range of styles, colours and sizes
            using our easy to use, informative and secure website.
          </SectionText>

          <dl className='mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2'>
            <div>
              <div className='flex items-center gap-x-6'>
                <storeLocation.icon className='size-12 text-pink-700' />
                <div>
                  <dt className='text-lg font-medium text-stone-900'>
                    {storeLocation.name}
                  </dt>
                  <dd className='mt-2 text-stone-500'>
                    <a
                      href='https://goo.gl/maps/Cq48m4XZ3oSkVPb19'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {storeLocation.address}
                    </a>
                  </dd>
                </div>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <div className='col-span-1 h-96 w-full bg-zinc-500'>
        <ShowroomMap />
      </div>
    </section>
  )
}
