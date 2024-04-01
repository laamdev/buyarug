import Image from 'next/image'
import { useState } from 'react'

import { ProductImageDetailModal } from '@/components/products/product-image-detail-modal'

interface IProps {
  images: any[]
  alt: string
}

export const ProductImageGallery = ({ images, alt }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<number | null>(null)

  const handleModalToggle = (key: number | null) => {
    setIsOpen(!isOpen)
    setSelected(key)
  }

  return (
    <div className='lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1'>
      <h2 className='sr-only'>Images</h2>

      <ul className='hidden grid-cols-2 gap-6 lg:grid '>
        {images &&
          images.map((image, idx) => (
            <li
              key={idx}
              className='relative aspect-[3/4]'
              onClick={() => handleModalToggle(idx)}
            >
              <Image
                src={image}
                alt={alt}
                fill
                className='cursor-pointer rounded bg-stone-100 object-cover object-center shadow'
              />
            </li>
          ))}
      </ul>

      <ul className='mb-6 flex h-96 gap-x-3 overflow-x-auto lg:hidden'>
        {images &&
          images.map((image, idx) => (
            <li
              key={idx}
              className='relative aspect-[3/4]'
              onClick={() => handleModalToggle(idx)}
            >
              <Image
                src={image}
                alt={alt}
                fill
                className='cursor-pointer rounded bg-stone-100 object-cover object-center shadow'
              />
            </li>
          ))}
      </ul>
      {images && (
        <ProductImageDetailModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selected={selected}
          images={images}
          alt={alt}
        />
      )}
    </div>
  )
}
