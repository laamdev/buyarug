import { Popover } from '@headlessui/react'
import Link from 'next/link'

import { Menu } from '@/components/navigation/mega-menu/menu'
import { MenuWithNested } from '@/components/navigation/mega-menu/menu-with-nested'
import { colors } from '@/data/colors'

const pages = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export const MegaMenu = ({ menuData }: { menuData: any }) => {
  return (
    <div className='mx-auto hidden h-12 justify-center bg-stone-100 py-5 lg:flex'>
      {/* Mega menus */}
      <Popover.Group className='ml-8 w-full'>
        <div className='flex h-full justify-evenly'>
          <MenuWithNested
            category='brand'
            subcategory='range'
            options={menuData?.brands?.buckets}
          />
          <Menu category='style' options={menuData?.styles?.buckets} />
          <Menu category='colour' options={colors} />

          {pages.map(page => (
            <Link
              key={page.name}
              href={page.href}
              className='flex items-center text-sm font-medium text-stone-700 hover:text-stone-800'
            >
              {page.name}
            </Link>
          ))}
        </div>
      </Popover.Group>
    </div>
  )
}
