interface IProps {
  children: React.ReactNode
}

export const ProductList = ({ children }: IProps) => {
  return (
    <div className='mt-6 grid grid-cols-2 gap-x-5 gap-y-10 lg:mt-12 lg:grid-cols-4 lg:gap-20'>
      {children}
    </div>
  )
}
