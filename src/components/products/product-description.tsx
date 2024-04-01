interface ProductDescriptionProps {
  description: string
}

export const ProductDescription = ({
  description
}: ProductDescriptionProps) => {
  return (
    <div className='mt-10'>
      <h2 className='text-lg font-semibold text-stone-700'>{`Description`}</h2>
      <p className='prose mt-4 text-stone-500'>{description}</p>
    </div>
  )
}
