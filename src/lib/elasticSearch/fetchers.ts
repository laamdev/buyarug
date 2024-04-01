'use server'

import {
  allProductsQuery,
  brandsQuery,
  clearanceProductsQuery,
  coloursQuery,
  featuredProductsQuery,
  megaMenuQuery,
  rangesPathsQuery,
  // // rangesQuery,
  stylesQuery
} from '@/lib/elasticSearch/queries'

export const getInventory = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify(allProductsQuery)
  })

  const data = await res.json()

  const products = data.hits.hits
  let finalProducts: any = []

  products.forEach((product: any) => {
    const image = product?._source?.images
      ? product?._source?.images[0]
      : '/public/images/icons/shape-rectangle.webp'

    const stripeProducts = product._source.aggregate_offer___offers___sku.map(
      (elm: string, idx: number) => ({
        id: elm,
        name: `${product._source.model} - ${product._source.product_name} ${product._source.aggregate_offer___offers___dimensions___width[idx]} x ${product._source.aggregate_offer___offers___dimensions___height[idx]}\n(${elm})`,
        description: product._source.description,
        price:
          product._source.aggregate_offer___offers___sale_price[idx] !== 0
            ? product._source.aggregate_offer___offers___sale_price[idx] * 100
            : product._source.aggregate_offer___offers___price[idx] * 100,
        currency: 'GBP',
        image: image
      })
    )

    finalProducts = finalProducts.concat(stripeProducts)
  })

  return finalProducts
}

export const getMenu = async () => {
  const resMenu = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify(megaMenuQuery)
  })
  const dataMenu = await resMenu.json()
  const menuData = dataMenu.aggregations

  return menuData
}

export const getFeaturedProducts = async () => {
  const resFeaturedProducts = await fetch(
    `${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
      },
      body: JSON.stringify(featuredProductsQuery)
    }
  )
  const featuredProductsData = await resFeaturedProducts.json()

  const featuredProducts = featuredProductsData.hits.hits

  return featuredProducts
}

export const getClearanceProducts = async () => {
  const resClearanceProducts = await fetch(
    `${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
      },
      body: JSON.stringify(clearanceProductsQuery)
    }
  )
  const clearanceProductsData = await resClearanceProducts.json()

  const clearanceProducts = clearanceProductsData.hits.hits

  return clearanceProducts
}

export const getProduct = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify({
      query: {
        term: {
          'slug.enum': slug
        }
      }
    })
  })
  const data = await res.json()

  const productData = await data.hits.hits

  const resVariants = await fetch(
    `${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
      },
      body: JSON.stringify({
        query: {
          bool: {
            must: [
              {
                term: {
                  'brand.enum': productData[0]._source.brand
                }
              },
              {
                term: {
                  'range.enum': productData[0]._source.range
                }
              },
              {
                term: {
                  'model.enum': productData[0]._source.model
                }
              }
            ]
          }
        }
      })
    }
  )

  const dataVariants = await resVariants.json()
  const productVariantsData = dataVariants.hits.hits

  return { productData, productVariantsData }
}

export const getColorBySlug = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify(coloursQuery(slug))
  })

  const data = await res.json()

  const products = data.hits.hits

  return products
}

export const getStyleBySlug = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify(stylesQuery(slug))
  })
  const data = await res.json()

  const products = data.hits.hits

  return products
}

export const getBrandBySlug = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify(brandsQuery(slug))
  })
  const data = await res.json()

  const products = data.hits.hits

  return products
}

export const getRangesPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify(rangesPathsQuery())
  })
  const data = await res.json()

  const paths = await data.aggregations.brands.buckets.map((brand: any) =>
    brand.qweranges.buckets.map((range: any) => ({
      params: {
        brandSlug: brand.key,
        rangeSlug: range.key
      }
    }))
  )

  return paths
}

export const getRangeBySlug = async ({
  brandSlug,
  rangeSlug
}: {
  brandSlug: string
  rangeSlug: string
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify({
      query: {
        bool: {
          must: [
            {
              term: {
                'brand.slug': brandSlug
              }
            },
            {
              term: {
                'range.slug': rangeSlug
              }
            }
          ]
        }
      },
      size: 100
    })
  })

  const data = await res.json()
  const products = data.hits.hits

  return products
}
