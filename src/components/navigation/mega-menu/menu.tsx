import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useRef } from 'react'
import { BiCaretDown } from 'react-icons/bi'
import slugify from 'slugify'

import { cn } from '@/lib/utils'

interface IProps {
  category: string
  subcategory?: string
  options: any
}

export const Menu = ({ category, options }: IProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <Popover className='flex'>
      {({ open }: { open: boolean }) => (
        <>
          <div className='relative flex'>
            <Popover.Button
              ref={buttonRef}
              className={cn(
                open
                  ? 'text-pink-600 underline'
                  : 'border-transparent text-stone-700 hover:text-stone-800',
                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium outline-none transition-colors duration-200 ease-out'
              )}
            >
              <div className='flex items-end gap-x-1'>
                <span className='capitalize'>{`${category}s`}</span>
                <BiCaretDown />
              </div>
            </Popover.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Popover.Panel className='absolute inset-x-0 top-full sm:text-sm'>
              <div
                className='absolute inset-0 top-1/2 bg-white shadow'
                aria-hidden='true'
              />

              <div className='relative bg-stone-100'>
                <div className='mx-auto max-w-7xl overflow-x-auto py-12'>
                  <ul
                    role='list'
                    aria-labelledby={`desktop-options-heading-${category}`}
                    className='flex max-h-96 flex-col flex-wrap gap-x-12 gap-y-3 '
                  >
                    {options?.map((option: any, idx: string) => (
                      <li key={idx} className='px-6'>
                        <Link
                          href={`/${slugify(category, {
                            lower: true,
                            strict: true
                          })}/${slugify(option.key, {
                            lower: true,
                            strict: true
                          })}`}
                          onClick={() => buttonRef.current?.click()}
                          className='tw-transition text-lg font-medium hover:text-pink-600'
                        >
                          {option.key}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
