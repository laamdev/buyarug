'use client'

import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import { DesktopMenu } from '@/components/navigation/desktop-menu'
import { MobileMenu } from '@/components/navigation/mobile-menu'

export const Header = ({ menuData }: { menuData: any }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useShoppingCart()

  return (
    <>
      <MobileMenu
        menuData={menuData}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <DesktopMenu
        cartCount={cartCount}
        menuData={menuData}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  )
}
