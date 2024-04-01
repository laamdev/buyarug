'use  client'

import { TrashIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart'

interface DeleteButtonProps {
  productId: string
}

export const RemoveFromCartButton = ({ productId }: DeleteButtonProps) => {
  const { removeAll: handleRemoveFromCart } = useCartStore()

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => {
        handleRemoveFromCart(productId)
      }}
    >
      <TrashIcon className='size-4' />
    </Button>
  )
}
