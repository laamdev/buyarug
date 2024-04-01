interface IProps {
  children: React.ReactNode
}

export const FooterLabel = ({ children }: IProps) => {
  return <p className='text-base font-medium text-stone-100 lg:text-lg'>{children}</p>
}

