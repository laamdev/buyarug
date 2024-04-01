import { useEffect, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { useShoppingCart } from 'use-shopping-cart'

import { ProductSizeSlideOver } from '@/components/products/product-size-slide-over'
import { AddToCartButton } from '@/components/stripe/add-to-cart-button'
import { ProductOffer } from '@/types/product'

interface ProductSizePickerProps {
  formattedProduct: any
  productSizes: any
  displayProduct: any
  setDisplayProduct: (displayProduct: ProductOffer) => void
  selectedSize: any
  setSelectedSize: (selectedSize: any) => void
  selectedCartProduct: any
  setSelectedCartProduct: (selectedCartProduct: any) => void
}

export const ProductSizePicker = ({
  formattedProduct,
  productSizes,
  displayProduct,
  setDisplayProduct,
  selectedSize,
  setSelectedSize,
  selectedCartProduct,
  setSelectedCartProduct
}: ProductSizePickerProps) => {
  const [openSizePicker, setOpenSizePicker] = useState(false)

  useEffect(() => {
    const filteredProduct = productSizes.find(
      (size: any) => size.sku === selectedSize
    )
    setDisplayProduct(filteredProduct!)

    setSelectedCartProduct({
      id: filteredProduct?.sku,
      name: `${formattedProduct.model} - ${formattedProduct.productName} ${filteredProduct?.dimensions?.width}x${filteredProduct?.dimensions?.height}`,
      description: formattedProduct.description,
      price:
        filteredProduct?.salePrice !== 0
          ? filteredProduct?.salePrice * 100
          : filteredProduct?.price * 100,
      currency: 'GBP',
      image: formattedProduct?.images
        ? formattedProduct?.images[0]
        : '/images/shared/placeholder.webp'
    })
  }, [
    selectedSize,
    formattedProduct,
    productSizes,
    setDisplayProduct,
    setSelectedCartProduct
  ])

  const { addItem } = useShoppingCart()
  return (
    <section>
      <button
        className='tw-transition mt-2 flex w-full items-center justify-between border-2 border-stone-900 p-2 text-lg font-medium text-stone-900 hover:border-pink-600'
        onClick={() => setOpenSizePicker(true)}
      >
        {!displayProduct ? (
          <div>Select Size</div>
        ) : (
          <div>
            {displayProduct?.dimensions?.width} X{' '}
            {displayProduct?.dimensions?.height} {displayProduct?.shape}
          </div>
        )}
        <FiChevronRight />
      </button>

      <AddToCartButton
        displayProduct={displayProduct}
        selectedCartProduct={selectedCartProduct}
      />

      <ProductSizeSlideOver
        open={openSizePicker}
        setOpen={setOpenSizePicker}
        formattedProduct={formattedProduct}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </section>
  )
}
