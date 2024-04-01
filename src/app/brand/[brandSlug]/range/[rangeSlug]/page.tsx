import { Metadata, ResolvingMetadata } from 'next'

import { ProductCard } from '@/components/products/product-card'
import { ProductList } from '@/components/products/product-list'
import { ProductResultsTotal } from '@/components/products/product-results-total'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { MaxWidthContainer } from '@/components/shared/max-width-container'
import { PageHeading } from '@/components/shared/page-heading'
import { getRangeBySlug, getRangesPaths } from '@/lib/elasticSearch/fetchers'
import { capitalize } from '@/utils/helpers'
import { getFormattedProduct } from '@/utils/helpers/product'

interface RangePageProps {
  params: { rangeSlug: string; brandSlug: string }
}

export async function generateMetadata(
  { params }: RangePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { rangeSlug } = params

  const filter = capitalize(rangeSlug)

  return {
    title: filter
  }
}

export async function generateStaticParams() {
  const data = await getRangesPaths()

  const paths = data.flat()

  return paths
}

export default async function RangePage({ params }: RangePageProps) {
  const { rangeSlug, brandSlug } = params

  const filter = capitalize(rangeSlug)

  const products = await getRangeBySlug({ brandSlug, rangeSlug })
  const formattedProducts = products.map((product: any) =>
    getFormattedProduct(product._source)
  )

  return (
    <MaxWidthContainer className='tw-page-space'>
      <Breadcrumbs
        brand={formattedProducts[0]?.brand}
        range={formattedProducts[0]?.range}
      />

      <PageHeading>{filter} Rugs</PageHeading>

      <ProductResultsTotal>{formattedProducts.length}</ProductResultsTotal>

      <ProductList>
        {formattedProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </MaxWidthContainer>
  )
}
