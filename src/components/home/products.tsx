import { ProductCard } from '@/components/products/product-card'
import { ProductList } from '@/components/products/product-list'
import { SectionHeading } from '@/components/shared/section-heading'

interface IProps {
  products: any[]
  heading: string
}

export const Products = ({ products, heading }: IProps) => {
  return (
    <section>
      <SectionHeading>{heading}</SectionHeading>

      <ProductList>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </section>
  )
}
