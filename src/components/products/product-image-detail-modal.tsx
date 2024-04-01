import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Dispatch, Fragment } from 'react'
import { TbX } from 'react-icons/tb'

interface ProductImageDetailModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
  selected: number | null
  images: string[]
  alt: string
}

export const ProductImageDetailModal = ({
  isOpen,
  setIsOpen,
  selected,
  images,
  alt
}: ProductImageDetailModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsOpen(!isOpen)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div
            className='flex min-h-full items-center justify-center'
            onClick={() => setIsOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='-all h-screen w-screen overflow-hidden'>
                <Image
                  src={
                    images[selected ?? 0] ? images[selected ?? 0] : images[0]
                  }
                  alt={alt}
                  fill
                  className='rounded bg-stone-100 object-contain object-center p-3 lg:p-6'
                />
                <div>
                  <button
                    type='button'
                    className='absolute right-1.5 top-1.5 focus:ring-0 lg:right-3 lg:top-3'
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <TbX className='tw-transition size-5 text-stone-500 hover:text-stone-700 lg:size-6' />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
