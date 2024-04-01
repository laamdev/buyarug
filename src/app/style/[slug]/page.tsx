import { Metadata, ResolvingMetadata } from 'next'

import { ProductCard } from '@/components/products/product-card'
import { ProductList } from '@/components/products/product-list'
import { ProductResultsTotal } from '@/components/products/product-results-total'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { MaxWidthContainer } from '@/components/shared/max-width-container'
import { Page } from '@/components/shared/page'
import { PageHeading } from '@/components/shared/page-heading'
import { getStyleBySlug } from '@/lib/elasticSearch/fetchers'
import { capitalize } from '@/utils/helpers'
import { getFormattedProduct } from '@/utils/helpers/product'

interface StylesPageProps {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: StylesPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params

  const products = await getStyleBySlug(slug)

  const filter = capitalize(slug)

  return {
    title: filter
  }
}

export default async function StylesPage({ params }: StylesPageProps) {
  const { slug } = params

  const filter = capitalize(slug)

  const products = await getStyleBySlug(slug)
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
