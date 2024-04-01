import Image from 'next/image'

import { SectionHeading } from '@/components/shared/section-heading'
import { SectionText } from '@/components/shared/section-text'
import { contactInfo } from '@/data/info'

export const ContactInfo = () => {
  return (
    <section className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2'>
      <div className='relative col-span-1'>
        <div className='h-96 rounded shadow'>
          <Image
            src='/images/contact/contact-hero.jpg'
            alt='Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen.'
            fill
            className='rounded object-cover object-center shadow'
          />
        </div>
      </div>

      <div className='col-span-1'>
        <div className='lg:col-start-2'>
          <SectionHeading>Contact Us</SectionHeading>
          <SectionText>
            If you like to talk through your options with an expert, feel free
            to call us.
          </SectionText>

          <dl className='mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2'>
            {contactInfo.map(contact => (
              <>
                <div className='flex items-center gap-x-6'>
                  <contact.icon className='size-8 text-pink-700' />
                  <div>
                    <dt className='text-lg font-medium text-stone-900'>
                      {contact.name}
                    </dt>
                    <dd className='mt-2 text-stone-500'>
                      <a href={contact.value}>{contact.label}</a>
                    </dd>
                  </div>
                </div>
              </>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
