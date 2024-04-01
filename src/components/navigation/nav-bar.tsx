import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { CartSlideOver } from '@/components/navigation/cart-slide-over'
import { Logo } from '@/components/navigation/logo'
import { MegaMenu } from '@/components/navigation/mega-menu'
import { SearchBar } from '@/components/navigation/search-bar'

export const NavBar = ({
  menuData,
  cartCount,
  setMobileMenuOpen
}: {
  menuData: any
  cartCount: number
  setMobileMenuOpen: any
}) => {
  return (
    <nav aria-label='Top'>
      {/* Secondary navigation */}
      <div className='bg-white'>
        <div className='border-b border-stone-200'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-20 items-center justify-between'>
              {/* Logo (lg+) */}
              <div className='hidden lg:flex lg:items-center'>
                <Link href='/'>
                  <span className='sr-only'>Buy a Rug</span>

                  <div className='w-24'>
                    <Logo />
                  </div>
                </Link>
              </div>

              <div className='z-50 hidden w-full lg:block'>
                <SearchBar />
              </div>

              {/* Mobile menu (lg-) */}
              <div className='flex flex-1 items-center lg:hidden'>
                <button
                  type='button'
                  className='-ml-2 rounded bg-white p-2 text-stone-400'
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='size-6' aria-hidden='true' />
                </button>
              </div>

              {/* Logo (lg-) */}
              <Link href='/' className='lg:hidden'>
                <span className='sr-only'>Buy a Rug</span>
                <div className='w-20'>
                  <Image
                    src='/images/branding/buy-a-rug-logo.png'
                    alt='Buy a Rug logo.'
                    width={196}
                    height={196}
                  />
                </div>
              </Link>

              <CartSlideOver />
            </div>
          </div>

          <MegaMenu menuData={menuData} />
          <div className='block lg:hidden'>
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  )
}
