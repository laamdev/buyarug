export interface ProductDimensions {
  width: number
  height: number
}

export interface CartProductType {
  id: string
  name: string
  description: string
  price: number
  currency: string
  image: string
}

export interface ProductOffer {
  price: number
  salePrice: number
  salePercentage: number
  dimensions: ProductDimensions
  shape: string
  mpn: string
  sku: string
}

export interface ProductSEO {
  metaTitle: string
  metaDescription: string
}

export interface ProductAggregateOffer {
  lowPrice: number | string
  highPrice: number | string
  priceCurrency: string
  offerCount?: string
  offers: ProductOffer[]
}

export interface Product {
  id: string
  manufacturerName: string
  productName: string
  slug: string
  description: string
  brand: string
  range: string
  model: string
  style: string
  prices: number[]
  salePrices: number[]
  salePercentage: number[]
  colors: string[]
  material: string
  clearance: string
  featured?: string
  images: any[]
  minPrice: number
  maxPrice: number
  minSalePrice: number
  maxSalePrice: number
  aggregateOffer: ProductAggregateOffer
  seo: ProductSEO
}

export interface ProductElastic {
  id: string
  manufacturer_name: string
  brand: string
  range: string
  model: string
  product_name: string
  slug: string
  images: string[]
  description: string
  color: string[]
  style: string
  material: string
  aggregate_offer___low_price: string
  aggregate_offer___high_price: string
  aggregate_offer___price_currency: string
  aggregate_offer___offers___dimensions___height: string[]
  aggregate_offer___offers___dimensions___width: string[]
  aggregate_offer___offers___shape: string[]
  aggregate_offer___offers___price: number[]
  aggregate_offer___offers___sale_price: number[]
  aggregate_offer___offers___sale_percentage: number[]
  aggregate_offer___offers___mpn: string[]
  aggregate_offer___offers___ean: string[]
  aggregate_offer___offers___sku: string[]
  aggregate_offer___offer_count: string
  meta_title: string
  meta_description: string
  featured: string
  clearance: string
}

export interface DisplayProduct {
  price: number
  salePrice: number
  salePercentage: number
  dimensions: ProductDimensions
  shape: string
  mpn: string
  sku: string
}

export interface Cart {
  count: number
  currency: string
}
