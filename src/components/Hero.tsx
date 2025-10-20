'use client'

import { FaArrowRight } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './Button'

const Hero = () => {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

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

        <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 text-white'>
          <h1 className='text-5xl font-bold'>Welcome to Real Estate Pro</h1>
          <p className='mt-4 text-lg'>Find your dream home today.</p>
        </div>
      </div>
      <section
        ref={heroRef}
        className='gap-3 overflow-x-clip bg-gradient-to-tr from-[#001E80] via-[#e4eaff] p-8 pb-16 font-medium md:items-center md:p-10 lg:p-20'
      >
        <div className='items-center justify-center gap-16 md:flex'>
          <div className='md:w-[478px]'>
            <div className='w-fit rounded-lg border-2 border-slate-400/80 p-0.5 px-1 lg:text-lg'>
              Version 2.0 is here
            </div>
            <div className='my-7 bg-gradient-to-b from-black to-[#002499] bg-clip-text text-5xl font-black tracking-tighter text-transparent md:text-7xl'>
              Pathway to productivity
            </div>
            <div className='text-xl tracking-tighter opacity-85 lg:text-2xl'>
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </div>

            <div className='mt-6 flex items-center gap-3 text-lg'>
              <Button>Get for free</Button>
              <div className='cursor-pointer hover:underline'>
                Learn more
                <FaArrowRight className='ml-2 inline h-3 w-3' />
              </div>
            </div>
          </div>

          <div className='relative pt-12 md:h-[648px] md:w-[648px] md:pt-0'>
            <motion.img
              src={'/assets/cylinder.png'}
              alt='Cylinder'
              className='-top-8 -left-8 hidden md:absolute md:block'
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={'/assets/visual.png'}
              alt='Hero Image'
              className='md:absolute md:h-full md:w-auto md:max-w-none'
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
            <motion.img
              src={'/assets/half-torus.png'}
              alt='HalfTorus'
              className='top-[500px] left-[400px] hidden md:absolute lg:block'
              style={{
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
