import { AnimatePresence, motion } from 'framer-motion'
import { TbChevronRight } from 'react-icons/tb'

export const BrandsContainer = ({
  options,
  isBrandsSelected,
  handleSelectedCategory,
  setSelectedBrandRanges,
  setSelectedBrand
}: any) => {
  const handleSelectedBrandRanges = (brand: any, brandRanges: any) => {
    handleSelectedCategory('ranges')
    setSelectedBrand(brand)
    setSelectedBrandRanges(brandRanges)
  }
  return (
    <AnimatePresence>
      {isBrandsSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2 className='text-2xl font-bold capitalize text-pink-600'>
            Brands
          </h2>

          <ul className='mt-2.5 flex flex-col divide-y divide-stone-300 text-lg font-medium capitalize'>
            {options?.map((option: any, idx: number) => {
              return (
                <li
                  key={idx}
                  className='flex items-center justify-between py-2.5'
                  onClick={() =>
                    handleSelectedBrandRanges(
                      option.key,
                      option.qweranges.buckets
                    )
                  }
                >
                  <div>{option.key}</div>
                  <TbChevronRight className='size-5' />
                </li>
              )
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
