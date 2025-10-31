'use client'

import { Button } from './Button'

const Hero = () => {
  return (
    <>
      <div className='relative h-screen w-full overflow-hidden'>
        <video
          className='absolute top-0 left-0 h-full w-full object-cover'
          autoPlay
          loop
          muted
          playsInline
          poster='/images/main-banner-background.png'
        >
          <source src='/videos/main-banner-background.mp4' type='video/mp4' />
        </video>

        <div className='absolute top-0 left-0 h-full w-full bg-black/25' />

        <div className='relative z-10 mx-auto flex h-full max-w-[900px] flex-col items-center justify-center px-4 text-center text-white'>
          <h1 className='text-5xl font-bold'>
            Transform Real Estate Listings Into Eye-Catching Videos
          </h1>
          <p className='mt-4 text-lg'>
            Fast, affordable, and professional video editing for real estate
            agents and agencies.
          </p>
          <Button variant='darkGlass' className='mt-6 text-lg font-medium'>
            View My Videos
          </Button>
        </div>
      </div>
    </>
  )
}

export default Hero
