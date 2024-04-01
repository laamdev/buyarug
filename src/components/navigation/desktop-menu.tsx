import { FeaturesBar } from '@/components/navigation/features-bar'
import { NavBar } from '@/components/navigation/nav-bar'

export const DesktopMenu = ({
  cartCount,
  menuData,
  setMobileMenuOpen
}: any) => {
  return (
    <header className='relative z-10'>
      <FeaturesBar />

      <NavBar
        menuData={menuData}
        cartCount={cartCount}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  )
}
