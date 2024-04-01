import { MetadataRoute } from 'next'
import slugify from 'slugify'

import { colors } from '@/data/colors'
import { siteMetadata } from '@/data/global'
import { sitemapQuery } from '@/lib/elasticSearch/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ELASTICSEARCH_API}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `APIKey ${process.env.NEXT_PUBLIC_ELASTICSEARCH_TOKEN}`
    },
    body: JSON.stringify(sitemapQuery)
  })

  const data = await response.json()

  const allProducts: any[] = await data.hits.hits

  const allProductsFields: any[] = await allProducts.map(product => ({
    loc: `${siteMetadata.siteUrl}/product/${product._source.slug}`,
    lastmod: new Date().toISOString()
  }))

  const allBrands: any[] = await data.aggregations.brands.buckets.map(
    (brand: any) => brand.key
  )

  const allBrandsFields: any[] = await allBrands.map(brand => ({
    loc: `${siteMetadata.siteUrl}/brand/${slugify(brand, {
      lower: true,
      strict: true
    })}`,
    lastmod: new Date().toISOString()
  }))

  const allRanges: any[] = await data.aggregations.brands.buckets
    .map((brand: any) => {
      return brand.qweranges.buckets.map((range: any) => ({
        loc: `${siteMetadata.siteUrl}/brand/${slugify(brand.key, {
          lower: true,
          strict: true
        })}/range/${slugify(range.key, {
          lower: true,
          strict: true
        })}`,
        lastmod: new Date().toISOString()
      }))
    })
    .flat()

  const allStyles: any[] = await data.aggregations.styles.buckets.filter(
    (style: any) => style.key !== ''
  )

  const allStylesFields: any[] = await allStyles.map(style => ({
    loc: `${siteMetadata.siteUrl}/style/${slugify(style.key, {
      lower: true,
      strict: true
    })}`,
    lastmod: new Date().toISOString()
  }))

  const allColorsFields: any[] = await colors.map(color => ({
    loc: `${siteMetadata.siteUrl}/colour/${slugify(color.key, {
      lower: true,
      strict: true
    })}`,
    lastmod: new Date().toISOString()
  }))

  const fields = allProductsFields.concat(
    allBrandsFields,
    allRanges,
    allStylesFields,
    allColorsFields
  )

  const home = {
    url: `${siteMetadata.siteUrl}`,
    lastModified: new Date().toString()
  }

  const about = {
    url: `${siteMetadata.siteUrl}/about`,
    lastModified: new Date().toString()
  }

  const faq = {
    url: `${siteMetadata.siteUrl}/faq`,
    lastModified: new Date().toString()
  }

  const contact = {
    url: `${siteMetadata.siteUrl}/contact`,
    lastModified: new Date().toString()
  }

  const termsAndConditions = {
    url: `${siteMetadata.siteUrl}/policies/terms-and-conditions`,
    lastModified: new Date().toString()
  }

  const returnsPolicy = {
    url: `${siteMetadata.siteUrl}/policies/return-policy`,
    lastModified: new Date().toString()
  }

  const delvieryPolicy = {
    url: `${siteMetadata.siteUrl}/policies/delivery-policy`,
    lastModified: new Date().toString()
  }

  const cookiePolicy = {
    url: `${siteMetadata.siteUrl}/policies/policies/cookie-policy`,
    lastModified: new Date().toString()
  }

  const privacyPolicy = {
    url: `${siteMetadata.siteUrl}/policies/policies/privacy-policy`,
    lastModified: new Date().toString()
  }

  return [
    home,
    about,
    faq,
    contact,
    termsAndConditions,
    returnsPolicy,
    delvieryPolicy,
    cookiePolicy,
    privacyPolicy,
    ...fields
  ]
}
