'use client'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './Button'

const Hero = () => {
  const heroRef = useRef(null)

  return (
    <section
      ref={heroRef}
      className='flex justify-center overflow-x-clip pt-8 pb-20 md:pt-5 md:pb-10'
      style={{
        background:
          'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)',
      }}
    >
      <div className='max-w-[1400px] px-6 lg:px-20'>
        <div className='items-center gap-10 lg:flex'>
          <div className='md:w-[478px]'>
            <div className='inline-flex rounded-lg border border-[#222]/10 px-3 py-1 text-sm tracking-tight'>
              LioSmooth
            </div>
            <h1 className='mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text pb-2 text-5xl font-bold tracking-tighter text-transparent md:text-5xl'>
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
          <div className='relative md:mt-0 md:h-[648px] md:flex-1'>
            <motion.img
              src={'/images/video-editing.png'}
              alt='Cog'
              className='md:h-full md:w-auto md:max-w-none'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
