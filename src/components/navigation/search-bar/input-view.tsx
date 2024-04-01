export const InputView = ({
  getAutocomplete,
  getInputProps,
  getButtonProps
}: {
  getAutocomplete: any
  getInputProps: any
  getButtonProps: any
}) => {
  return (
    <div className='relative mx-auto w-full border border-zinc-500 py-1 focus:border-zinc-700 lg:w-1/2'>
      <input
        id='search'
        {...getInputProps({
          placeholder: 'Search for products...'
        })}
        className='min-w-full border-none bg-transparent text-stone-900 outline-none'
      />
      {getAutocomplete()}
      <div className='searchbar-iconContainer'>
        <svg
          className='tw-transition absolute right-3 top-3 w-4 text-stone-500 hover:text-stone-700'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
          ></path>
        </svg>
      </div>
    </div>
  )
}
