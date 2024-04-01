import Image from 'next/image'
import Link from 'next/link'

import { getRaw } from '@/utils/helpers/elastic'

export const AutocompleteView = ({
  autocompleteResults,
  autocompletedResults,
  className,
  getItemProps,
  getMenuProps
}: {
  autocompleteResults: any
  autocompletedResults: any
  autocompleteSuggestions: any
  autocompletedSuggestions: any
  className: any
  getItemProps: any
  getMenuProps: any
}) => {
  let index = 0
  return (
    <div
      {...getMenuProps({
        className: ['sui-search-box__autocomplete-container', className].join(
          ' '
        )
      })}
    >
      <div>
        {!!autocompleteResults &&
          !!autocompletedResults &&
          autocompletedResults.length > 0 && (
            <ul className='grid gap-5 p-2 lg:grid-cols-2'>
              {autocompletedResults.map((result: any) => {
                index++
                const titleField =
                  typeof autocompleteResults === 'boolean'
                    ? null
                    : autocompleteResults.titleField
                const titleRaw = getRaw(result, titleField)
                return (
                  <li
                    {...getItemProps({
                      key: result.id.raw,
                      index: index - 1,
                      item: result
                    })}
                    key={result.id.raw}
                    className='mb-2 flex space-x-5 truncate'
                  >
                    <Link
                      href={`/product/${result.slug.raw}`}
                      className='flex gap-x-2.5'
                    >
                      <Image
                        src={
                          result?.images?.raw
                            ? result?.images?.raw[0]
                            : '/images/shared/placeholder.webp'
                        }
                        alt={result.product_name.raw}
                        width={30}
                        height={30}
                        className='m-auto shrink-0'
                      />
                      <h5 className='flex-1 whitespace-pre-line text-sm'>
                        {result.brand.raw} - {result.range.raw} -{' '}
                        {result.model.raw} - {result.product_name.raw}
                      </h5>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
      </div>
    </div>
  )
}
