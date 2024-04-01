'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'

import { testimonials } from '@/data/testimonials'

export const Testimonials = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 15
      }
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <div ref={sliderRef} className='keen-slider'>
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className='keen-slider__slide '>
          <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-base italic md:text-2xl'>
              &quot;{testimonial.quote}&quot;
            </div>

            <h2 className='mt-3 text-sm font-semibold uppercase text-pink-700 md:mt-4 md:text-xl'>
              — {testimonial.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  )
}
