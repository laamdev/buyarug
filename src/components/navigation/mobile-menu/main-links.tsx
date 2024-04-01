import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { TbChevronRight } from 'react-icons/tb'

import { BrandsContainer } from '@/components/navigation/mobile-menu/brands-container'
import { CategoryContainer } from '@/components/navigation/mobile-menu/category-container'
import { RangesContainer } from '@/components/navigation/mobile-menu/ranges-container'
import { colors } from '@/data/colors'
import { navLinks, shopCategories } from '@/data/navLinks'

export const MainLinks = ({
  menuData,
  handleSelectedCategory,
  setIsBrandsSelected,
  isBrandsSelected,
  isRangesSelected,
  isStylesSelected,
  isColoursSelected,
  isMainMenu,
  setMobileMenuOpen,
  handleCloseMenu
}: any) => {
  const brands = menuData.brands.buckets
  const styles = menuData.styles.buckets
  const [selectedBrandRanges, setSelectedBrandRanges] = useState(null)
  const [selectedBrand, setSelectedBrand] = useState(null)

  return (
    <AnimatePresence>
      {isMainMenu ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div>
            <h2 className='text-2xl font-bold text-pink-600'>Shop by</h2>
            <ul className='mt-2.5 flex flex-col divide-y divide-stone-300 text-lg font-medium capitalize'>
              {shopCategories.map(category => (
                <li
                  key={category.id}
                  className='flex items-center justify-between py-2.5'
                  onClick={() => handleSelectedCategory(category.key)}
                >
                  <div>{category.key}</div>
                  <TbChevronRight className='size-5' />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='mt-5 text-2xl font-bold text-pink-600'>
              Our Company
            </h2>
            <ul className='mt-2.5 flex flex-col divide-y divide-stone-300 text-lg font-medium capitalize'>
              {navLinks.map(navLink => (
                <li
                  key={navLink.id}
                  className='flex items-center justify-between py-2.5'
                >
                  <Link href={navLink.href} onClick={() => handleCloseMenu()}>
                    {navLink.key}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ) : null}
      {isBrandsSelected && (
        <BrandsContainer
          category='brand'
          options={brands}
          setMobileMenuOpen={setMobileMenuOpen}
          isBrandsSelected={isBrandsSelected}
          setIsBrandsSelected={setIsBrandsSelected}
          isRangesSelected={isRangesSelected}
          handleSelectedCategory={handleSelectedCategory}
          setSelectedBrandRanges={setSelectedBrandRanges}
          setSelectedBrand={setSelectedBrand}
        />
      )}

      {isRangesSelected && (
        <RangesContainer
          options={selectedBrandRanges}
          handleCloseMenu={handleCloseMenu}
          selectedBrand={selectedBrand}
        />
      )}

      {isStylesSelected && (
        <CategoryContainer
          category='style'
          options={styles}
          handleCloseMenu={handleCloseMenu}
        />
      )}

      {isColoursSelected && (
        <CategoryContainer
          category='colour'
          options={colors}
          handleCloseMenu={handleCloseMenu}
        />
      )}
    </AnimatePresence>
  )
}
