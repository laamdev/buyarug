import { Metadata } from 'next'

import { ContactInfo } from '@/components/contact/contact-info'
import { Showroom } from '@/components/contact/showroom'
import { MaxWidthContainer } from '@/components/shared/max-width-container'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact information about the www.buyarug.com website and the Alexander Carpets showroom.'
}

export default async function ContactPage() {
  return (
    <MaxWidthContainer className='tw-page-space flex flex-col'>
      <ContactInfo />
      <Showroom />
    </MaxWidthContainer>
  )
}
