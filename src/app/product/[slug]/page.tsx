import { ProductInfo } from '@/components/products/product-info'
import { Breadcrumbs } from '@/components/shared/breadcrumbs'
import { MaxWidthContainer } from '@/components/shared/max-width-container'
import { getProduct } from '@/lib/elasticSearch/fetchers'
import { getFormattedProduct } from '@/utils/helpers/product'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const { productData, productVariantsData } = await getProduct(slug)
  const formattedProduct = getFormattedProduct(productData[0]._source)

  const productSizes = formattedProduct.aggregateOffer.offers

  const discounts = formattedProduct.aggregateOffer.offers.map(
    offer => offer.salePercentage
  )

  const maxDiscount = Math.max(...discounts)

  return (
    <MaxWidthContainer className='tw-page-space'>
      <Breadcrumbs
        brand={formattedProduct.brand}
        range={formattedProduct.range}
        model={formattedProduct.model}
        product={formattedProduct.productName}
      />

      <ProductInfo
        formattedProduct={formattedProduct}
        maxDiscount={maxDiscount}
        productSizes={productSizes}
        productVariantsData={productVariantsData}
      />
    </MaxWidthContainer>
  )
}
