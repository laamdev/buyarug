import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import { Fragment, useRef } from 'react'
import slugify from 'slugify'

import { cn } from '@/lib/utils'

export const MenuWithNested = ({ category, subcategory, options }: any) => {
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
                <ChevronDownIcon className='size-3' />
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

              <div className='relative overflow-auto bg-stone-100'>
                <div className='mx-auto max-w-7xl'>
                  <ul
                    role='list'
                    aria-labelledby={`desktop-options-heading-${category}`}
                    className='flex max-h-96 flex-col flex-wrap gap-x-12 gap-y-3 '
                  >
                    {options?.map((option: any, idx: string) => (
                      <li key={idx} className='px-5 py-10'>
                        <Link
                          href={`/${slugify(category, {
                            lower: true,
                            strict: true
                          })}/${slugify(option.key, {
                            lower: true,
                            strict: true
                          })}`}
                          className='tw-transition text-xl font-bold hover:text-pink-600'
                          onClick={() => buttonRef.current?.click()}
                        >
                          {option.key}
                        </Link>
                        <ul
                          role='list'
                          className='mt-4 flex flex-col gap-y-2 text-stone-700'
                        >
                          {option?.qweranges?.buckets?.map((range: any) => (
                            <li
                              key={idx}
                              onClick={() => buttonRef.current?.click()}
                            >
                              <Link
                                href={`/${slugify(category, {
                                  lower: true,
                                  strict: true
                                })}/${slugify(option.key, {
                                  lower: true,
                                  strict: true
                                })}/${slugify(subcategory!, {
                                  lower: true,
                                  strict: true
                                })}/${slugify(range.key, {
                                  lower: true,
                                  strict: true
                                })}`}
                                className='tw-transition text-lg font-medium hover:text-pink-600'
                              >
                                {range.key}
                              </Link>
                            </li>
                          ))}
                        </ul>
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
