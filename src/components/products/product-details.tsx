export const ProductDetails = ({ formattedProduct }: any) => {
  return (
    <div className='mt-8 border-t border-stone-200 pt-8'>
      <h2 className='text-lg font-semibold text-stone-700'>Details</h2>

      <div className='mt-4'>
        <ul role='list' className='flex flex-col gap-y-2'>
          <li className='grid grid-cols-3 p-2'>
            <span className='col-span-1'>Brand</span>
            <span className='col-span-2 ml-2 font-medium'>
              {formattedProduct.brand}
            </span>
          </li>
          <li className='grid grid-cols-3 bg-stone-100 p-2'>
            <span className='col-span-1'>Range</span>
            <span className='col-span-2 ml-2 font-medium'>
              {formattedProduct.range}
            </span>
          </li>
          <li className='grid grid-cols-3 p-2'>
            <span className='col-span-1'>Model</span>
            <span className='col-span-2 ml-2 font-medium'>
              {formattedProduct.model}
            </span>
          </li>
          <li className='grid grid-cols-3 bg-stone-100 p-2'>
            <span className='col-span-1'>Product</span>
            <span className='col-span-2 ml-2 font-medium'>
              {formattedProduct.productName}
            </span>
          </li>
          <li className='grid grid-cols-3 p-2'>
            <span className='col-span-1'>Style</span>
            <span className='col-span-2 ml-2 font-medium'>
              {formattedProduct.style}
            </span>
          </li>
          <li className='grid grid-cols-3 p-2'>
            <span className='col-span-1'>Material</span>
            <span className='col-span-2 ml-2 font-medium'>
              {formattedProduct.material}
            </span>
          </li>
          {formattedProduct.colors && (
            <li className='grid grid-cols-3 bg-stone-100 p-2'>
              <h5 className='col-span-1'>Colour</h5>
              <h4 className='col-span-2 flex flex-wrap gap-y-2.5'>
                {formattedProduct.colors.map((color: string, idx: number) => (
                  <span
                    key={idx}
                    className='ml-2 border-r border-stone-300 pr-2 font-medium last:border-r-0'
                  >
                    {color}
                  </span>
                ))}
              </h4>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
