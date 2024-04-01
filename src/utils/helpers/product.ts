import { ProductElastic } from '@/types/product'

export const getFormattedProduct = (product: ProductElastic) => {
  const maxPrice = Math.max(...product.aggregate_offer___offers___price)
  const minPrice = Math.min(...product.aggregate_offer___offers___price)
  const maxSalePrice = Math.max(
    ...product.aggregate_offer___offers___sale_price
  )
  const minSalePrice = Math.min(
    ...product.aggregate_offer___offers___sale_price
  )

  const offers = product.aggregate_offer___offers___sku.map(
    (elm: string, idx: number) => ({
      price: product.aggregate_offer___offers___price[idx],
      salePrice: product.aggregate_offer___offers___sale_price[idx],
      salePercentage: Math.round(
        product.aggregate_offer___offers___sale_percentage[idx] * 100
      ),
      dimensions: {
        width: product.aggregate_offer___offers___dimensions___width[idx],
        height: product.aggregate_offer___offers___dimensions___height[idx]
      },
      shape: product?.aggregate_offer___offers___shape
        ? product.aggregate_offer___offers___shape[idx]
        : null,
      mpn: product.aggregate_offer___offers___mpn
        ? product.aggregate_offer___offers___mpn[idx]
        : null,
      sku: elm
    })
  )

  return {
    id: product.id,
    manufacturerName: product.manufacturer_name,
    productName: product.product_name,
    slug: product.slug,
    description: product.description,
    brand: product.brand,
    range: product.range,
    model: product.model,
    style: product.style,
    prices: product.aggregate_offer___offers___price,
    salePrices: product.aggregate_offer___offers___sale_price,
    colors: product.color,
    material: product.material,
    clearance: product.clearance,
    images: product.images,
    minPrice: minPrice,
    maxPrice: maxPrice,
    minSalePrice: minSalePrice,
    maxSalePrice: maxSalePrice,
    aggregateOffer: {
      lowPrice: product.aggregate_offer___low_price,
      highPrice: product.aggregate_offer___high_price,
      priceCurrency: product.aggregate_offer___price_currency,
      offers: offers
    },
    seo: {
      metaTitle: product.meta_title,
      metaDescription: product.meta_description
    }
  }
}
