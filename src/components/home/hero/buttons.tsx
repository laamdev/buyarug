import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface ButtonProps {
  enabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const PrevButton = ({ enabled, onClick }: ButtonProps) => (
  <button
    className='absolute left-0 top-1/2 z-10 size-10 -translate-y-1/2 cursor-pointer touch-manipulation lg:size-16'
    onClick={onClick}
    disabled={!enabled}
  >
    <ChevronLeftIcon className='tw-transition size-full text-stone-50 hover:text-pink-300' />
  </button>
)

export const NextButton = ({ enabled, onClick }: ButtonProps) => (
  <button
    className='absolute right-0 top-1/2 z-10 size-10 -translate-y-1/2 cursor-pointer touch-manipulation lg:right-1 lg:size-16'
    onClick={onClick}
    disabled={!enabled}
  >
    <ChevronRightIcon className='tw-transition size-full text-stone-50 hover:text-pink-300' />
  </button>
)
