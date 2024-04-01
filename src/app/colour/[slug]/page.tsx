import { Metadata, ResolvingMetadata } from 'next'

import { ProductCard } from '@/components/products/product-card'
import { ProductList } from '@/components/products/product-list'
import { ProductResultsTotal } from '@/components/products/product-results-total'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { MaxWidthContainer } from '@/components/shared/max-width-container'
import { PageHeading } from '@/components/shared/page-heading'
import { getColorBySlug } from '@/lib/elasticSearch/fetchers'
import { capitalize } from '@/utils/helpers'
import { getFormattedProduct } from '@/utils/helpers/product'

interface ColourPageProps {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: ColourPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params

  const products = await getColorBySlug(slug)

  const filter = capitalize(slug)

  return {
    title: filter
  }
}

export default async function ColourPage({ params }: ColourPageProps) {
  const { slug } = params

  const filter = capitalize(slug)

  const products = await getColorBySlug(slug)
  const formattedProducts = products.map((product: any) =>
    getFormattedProduct(product._source)
  )

  return (
    <MaxWidthContainer className='tw-page-space'>
      <Breadcrumbs filter={filter} />

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
