import { MinusIcon, PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'
import { CartProductType } from '@/types/product'

interface ProductWithCount extends CartProductType {
  count: number
}

interface QuantityButtonsProps {
  product: ProductWithCount
}

export const QuantityButtons = ({ product }: QuantityButtonsProps) => {
  const { add: handleAddToCart } = useCartStore()
  const { remove: handleRemoveFromCart } = useCartStore()

  return (
    <div className='flex items-center'>
      <Button
        variant='outline'
        size='icon'
        onClick={() => handleRemoveFromCart(product.id)}
      >
        <MinusIcon className='size-4' />
      </Button>
      <div className='itme-scenter flex w-8 justify-center'>
        <span className='tabular-nums'>{product.count}</span>
      </div>
      <Button
        variant='outline'
        size='icon'
        onClick={() => handleAddToCart(product)}
      >
        <PlusIcon className='size-4' />
      </Button>
    </div>
  )
}
