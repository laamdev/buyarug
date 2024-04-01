import { Metadata } from 'next'
import Image from 'next/image'

import { MaxWidthContainer } from '@/components/shared/max-width-container'
import { SectionHeading } from '@/components/shared/section-heading'
import { SectionText } from '@/components/shared/section-text'
import { features } from '@/data/about/features'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About information about the www.buyarug.com website and the Alexander Carpets showroom.'
}

export default async function AboutPage() {
  return (
    <MaxWidthContainer className='tw-page-space flex flex-col'>
      <section
        aria-labelledby='features-heading'
        className='grid gap-x-12 gap-y-10 lg:grid-cols-2 lg:gap-y-0'
      >
        <div className='relative col-span-1 h-96 lg:h-full'>
          <Image
            src='/images/about/about-hero.jpg'
            alt='Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen.'
            fill
            className='rounded object-cover object-center shadow lg:size-full'
          />
        </div>

        <div className='col-span-1'>
          <div className='lg:col-start-2'>
            <SectionHeading>About Us</SectionHeading>
            <SectionText>
              BuyaRug.co.uk offers a huge range of rugs, carpets and mats in one
              place. You can choose from a wide range of styles, colours and
              sizes using our easy to use, informative and secure website.
            </SectionText>

            <dl className='mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2'>
              {features.map(feature => (
                <div key={feature.name}>
                  <dt className='text-lg font-medium text-stone-900'>
                    {feature.name}
                  </dt>
                  <dd className='mt-2 text-stone-500'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </MaxWidthContainer>
  )
}
