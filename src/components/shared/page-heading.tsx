interface IProps {
  children: React.ReactNode
}

export const PageHeading = ({ children }: IProps) => {
  return <h1 className='text-3xl font-bold capitalize tracking-tight text-stone-900 lg:text-5xl'>{children}</h1>
}

 