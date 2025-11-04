'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AppLink } from './Link'

const CTA = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <div
      ref={sectionRef}
      className='flex flex-col items-center overflow-x-clip bg-gradient-to-t from-[#afbbe4] to-white px-14 pt-16 pb-24'
    >
      <div className='relative flex max-w-[570px] flex-col items-center justify-center'>
        <motion.img
          src={'/images/camera-3d.png'}
          alt='Editing Software'
          className='absolute -left-35 size-40 md:-left-46 md:size-50 xl:-left-72 xl:size-72'
          animate={{
            translateY: '-20%',
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
        />
        <motion.img
          src={'/images/video-3d.png'}
          alt='Editing Software'
          className='absolute -right-35 size-40 md:-right-46 md:size-50 xl:-right-72 xl:size-72'
          animate={{
            translateY: '-20%',
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
        />
        <div className='bg-gradient-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-4xl font-bold tracking-tighter text-transparent md:text-5xl lg:text-6xl'>
          Let’s Bring Your Listings to Life
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          Get in touch to start your next real estate video project.
        </div>

        <div className='mt-4 flex flex-col items-center gap-4 text-lg'>
          <AppLink
            href='#'
            className='border-none bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] text-sm text-white shadow-[inset_0_0_6px_1px_hsl(0,0%,100%,0.3)] lg:text-base'
          >
            Message Us on Instagram
          </AppLink>
          <AppLink
            variant='darkGlass'
            className='text-sm lg:text-base'
            href='#'
          >
            Contact via Gmail
          </AppLink>
        </div>
      </div>
    </div>
  )
}

export default CTA
