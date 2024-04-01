import { CirclePercentIcon, PackageIcon, TruckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { FooterLabel } from '@/components/navigation/footer-label'

const year = new Date().getFullYear()

const incentives = [
  {
    name: 'Free + fast delivery',
    description: 'On all mainland UK orders',
    href: '/policies/delivery-policy',
    icon: PackageIcon
  },
  {
    name: 'Low Prices Guaranteed',
    description: 'Price match + clearance sales',
    href: '/#clearance',
    icon: CirclePercentIcon
  },
  {
    name: 'Simple returns',
    description: 'Not a match? Return within 30 days',
    href: '/policies/return-policy',
    icon: TruckIcon
  }
]

const footerNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ],
  policies: [
    {
      name: 'Terms & Conditions',
      href: '/policies/terms-and-conditions'
    },
    {
      name: 'Return Policy',
      href: '/policies/return-policy'
    },
    {
      name: 'Delivery Policy',
      href: '/policies/delivery-policy'
    },
    {
      name: 'Cookie Policy',
      href: '/policies/cookie-policy'
    },
    {
      name: 'Privacy Policy',
      href: '/policies/privacy-policy'
    }
  ]
}

export const Footer = () => {
  return (
    <footer aria-labelledby='footer-heading' className='bg-pink-900'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>

      <div className='border-t-2 border-pink-700 bg-stone-100'>
        <h2 className='sr-only'>Why you should buy from us</h2>

        <div className='grid grid-cols-1 divide-y-2 divide-pink-700 text-center lg:grid-cols-3 lg:divide-x-2 lg:divide-y-0'>
          {incentives.map(incentive => (
            <div key={incentive.name}>
              <Link
                href={incentive.href}
                className='tw-transition mx-auto flex flex-col items-center gap-y-1 p-6 text-xs text-pink-600 hover:text-pink-600 lg:text-sm'
              >
                <incentive.icon
                  className='size-6 lg:size-8'
                  aria-hidden='true'
                />
                <div className='mt-1.5 lg:mt-2'>
                  <p className='font-bold uppercase'>{incentive.name}</p>
                  <p>{incentive.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-auto grid max-w-7xl grid-cols-2 flex-col gap-x-8 gap-y-16 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-16'>
        <div>
          <FooterLabel>Company</FooterLabel>
          <ul role='list' className='mt-6 space-y-6'>
            {footerNavigation.company.map(item => (
              <li key={item.name} className='text-sm'>
                <Link
                  href={item.href}
                  className='tw-transition text-stone-300 hover:text-stone-100'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterLabel>Policies</FooterLabel>
          <ul role='list' className='mt-6 space-y-6'>
            {footerNavigation.policies.map(item => (
              <li key={item.name} className='text-sm'>
                <Link
                  href={item.href}
                  className='tw-transition text-stone-300 hover:text-stone-100'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterLabel>Contact Us</FooterLabel>
          <ul role='list' className='mt-6 space-y-6 text-sm'>
            <li>
              <a
                href='https://goo.gl/maps/Cq48m4XZ3oSkVPb19'
                target='_blank'
                rel='noopener noreferrer'
                className='tw-transition text-stone-300 hover:text-stone-100'
              >
                91 Bean Oak Road Wokingham, Berkshire RG40 1RJ UK
              </a>
            </li>
            <li>
              <a
                href='tel:01189788050'
                className='tw-transition text-stone-300 hover:text-stone-100'
              >
                0118 9788 050
              </a>
            </li>
            <li>
              <a
                href='mailto:shop@buyarug.co.uk'
                className='tw-transition text-stone-300 hover:text-stone-100'
              >
                shop@buyarug.co.uk
              </a>
            </li>
          </ul>
        </div>

        <div>
          <FooterLabel>Follow Us</FooterLabel>
          <div className='mt-6 flex flex-col gap-y-6'>
            <a
              href='https://uk.trustpilot.com/review/buyarug.co.uk'
              target='_blank'
              rel='noreferrer'
              className='w-20 sm:w-24 lg:w-32'
            >
              <Image
                src='/images/logos/logo-trustpilot.png'
                alt='Trustpilot logo.'
                width={250}
                height={150}
                className='tw-transition object-cover object-center opacity-80 grayscale hover:opacity-100'
              />
            </a>
            <a
              href='https://twitter.com/BuyaRugUK'
              target='_blank'
              rel='noreferrer'
            >
              <div className='w-20 sm:w-24 lg:w-32'>
                <Image
                  src='/images/logos/logo-twitter.png'
                  alt='Twitter logo.'
                  width={250}
                  height={150}
                  className='tw-transition object-cover object-center opacity-80 grayscale hover:opacity-100'
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className='border-t border-stone-400 px-4 py-2 text-center sm:px-6 lg:py-3'>
        <small className='text-xs text-stone-400'>
          &copy; 2013-{year} buyarug.co.uk. All Rights Reserved.
        </small>
      </div>
    </footer>
  )
}
