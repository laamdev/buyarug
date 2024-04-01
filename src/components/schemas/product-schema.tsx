import { ProductJsonLd } from 'next-seo'

import { Product } from '@/types/product'

interface ProductSchemaProps {
  product: Product
}

export const ProductSchema = ({ product }: ProductSchemaProps) => {
  const offerCount = product.aggregateOffer.offers.length
  const prices = product.aggregateOffer.offers.map(offer => offer.price!)

  const lowPrice = Math.min(...prices)
  const highPrice = Math.max(...prices)

  return (
    <ProductJsonLd
      productName={product.productName}
      images={product.images}
      description={product.description}
      brand={product.brand}
      color={product.colors[0]}
      manufacturerName={product.manufacturerName}
      material={product.material}
      aggregateOffer={{
        offerCount: offerCount,
        lowPrice: lowPrice,
        highPrice: highPrice,
        priceCurrency: 'GBP',
        offers: product.aggregateOffer.offers
      }}
    />
  )
}
