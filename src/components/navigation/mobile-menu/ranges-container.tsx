import { motion } from 'framer-motion'
import Link from 'next/link'
import slugify from 'slugify'

export const RangesContainer = ({ options, handleCloseMenu, selectedBrand }: any) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className='text-2xl font-bold capitalize text-pink-600'>Ranges</h2>

      <ul className='mt-2.5 flex flex-col divide-y divide-stone-300 text-lg font-medium capitalize'>
        <li>
          <Link
            href={`/brand/${slugify(selectedBrand ?? '', {
              lower: true,
              strict: true
            })}`}
            onClick={() => handleCloseMenu()}
            className='flex py-2.5 text-lg font-black'
          >
            All {selectedBrand}
          </Link>
        </li>
        {options?.map((option: any, idx: number) => (
          <li key={idx}>
            <Link
              href={`/brand/${slugify(selectedBrand, {
                lower: true,
                strict: true
              })}/range/${slugify(option.key, {
                lower: true,
                strict: true
              })}`}
              onClick={() => handleCloseMenu()}
              className='flex py-2.5 text-lg font-medium'
            >
              {option.key}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

