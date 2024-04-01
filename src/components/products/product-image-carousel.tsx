'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'

import { cn } from '@/lib/utils'

export const ProductImageCarousel = ({ images, alt }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <>
      <div className='relative'>
        <div ref={sliderRef} className='keen-slider'>
          {images.map((image: string, idx: number) => (
            <div key={idx} className='keen-slider__slide h-96 w-full'>
              <Image src={image} alt={alt} fill className='object-contain' />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className='mt-4 flex justify-center gap-x-2 px-2'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys()
          ].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={
                  'h-2 w-2 cursor-pointer rounded-full border-none bg-stone-300 p-1' +
                  (currentSlide === idx && ' bg-pink-600')
                }
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  return (
    <svg
      onClick={props.onClick}
      className={cn(
        'absolute top-1/2 size-8 translate-y-1/2 cursor-pointer fill-stone-400',
        props.left ? 'left-1' : 'right-1',
        props.disabled && 'fill-stone-200'
      )}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  )
}
