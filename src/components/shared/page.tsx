import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

import { pageVariants } from '@/utils/framer'

interface IProps {
  metaTitle: string
  metaDescription: string
  children: ReactNode
  className?: string
}

export const Page = ({
  metaTitle,
  metaDescription,
  children,
  className
}: IProps) => {
  return (
    <motion.main
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={pageVariants}
      transition={{ type: 'easeInOut' }}
      className={className}
    >
      <NextSeo title={metaTitle} description={metaDescription} />
      {children}
    </motion.main>
  )
}
