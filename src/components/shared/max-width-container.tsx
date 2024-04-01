import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const MaxWidthContainer = ({
  className,
  children
}: {
  className?: string
  children: ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-2xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  )
}
