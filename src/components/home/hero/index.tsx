import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='relative h-[calc(100vh-11rem)]'>
      <div>
        <Image
          src='/images/home/home-hero.jpg'
          fill
          alt='Nick, the owner of buyarug.com'
          className='h-full object-cover object-left lg:object-center'
        />
      </div>
      <div className='absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 bg-pink-700 bg-opacity-75 p-6 text-center lg:max-w-xl'>
        <h1 className='text-5xl font-black uppercase tracking-tighter text-stone-50 lg:text-7xl'>
          A Rug for Every Room
        </h1>
        <p className=' mt-2 text-lg text-pink-100 lg:text-2xl'>
          Over 30 years of experience and thousands of carpets to choose from!
        </p>
      </div>
    </div>
  )
}
