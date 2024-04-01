import { Metadata, ResolvingMetadata } from 'next'

import { ProductCard } from '@/components/products/product-card'
import { ProductList } from '@/components/products/product-list'
import { ProductResultsTotal } from '@/components/products/product-results-total'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { MaxWidthContainer } from '@/components/shared/max-width-container'
import { PageHeading } from '@/components/shared/page-heading'
import { getBrandBySlug } from '@/lib/elasticSearch/fetchers'
import { capitalize } from '@/utils/helpers'
import { getFormattedProduct } from '@/utils/helpers/product'

interface BrandPageProps {
  params: { brandSlug: string }
}

export async function generateMetadata(
  { params }: BrandPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { brandSlug } = params

  const products = await getBrandBySlug(brandSlug)

  const filter = capitalize(brandSlug)

  return {
    title: filter
  }
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brandSlug } = params

  const filter = capitalize(brandSlug)

  const products = await getBrandBySlug(brandSlug)
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
