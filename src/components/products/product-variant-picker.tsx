'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export const ProductVariantPicker = ({
  productVariantsData
}: {
  productVariantsData: any
}) => {
  const { slug } = useParams<{ slug: string }>()
  // // import { useSearchP,arams } from 'next/navigation'

  const variants = productVariantsData.filter(
    (variant: any) => variant._source.slug !== slug
  )

  return (
    <>
      {variants.length > 1 && (
        <div className='mt-8 border-t border-stone-200 pt-8'>
          <div>
            <h2 className='text-lg font-semibold text-stone-700'>
              Other Variants
            </h2>
            <ul className='mt-4 grid  grid-cols-3 gap-6 lg:grid-cols-4'>
              {variants.map((variant: any) => (
                <li key={variant._id}>
                  <Link href={variant._source.slug}>
                    <div className='relative aspect-[4/3] w-24'>
                      {variant._source.images && (
                        <Image
                          src={variant._source.images[0]}
                          alt='Model variant.'
                          fill
                          className='tw-transition object-contain object-center hover:scale-105'
                        />
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
