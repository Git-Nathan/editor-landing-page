'use client'

import { FaArrowRight } from 'react-icons/fa'
// Use images from public folder directly via string srcs
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './Button'

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
      <div className='relative flex max-w-[570px] flex-col items-center'>
        <motion.img
          src={'/assets/emojistar 1.png'}
          alt='Star'
          className='absolute -top-28 -left-[345px] hidden pr-6 md:block'
          style={{
            translateY: translateY,
          }}
        />
        <motion.img
          src={'/assets/helix2 1.png'}
          alt='Helix'
          className='absolute -top-6 -right-80 hidden md:block'
          style={{
            translateY: translateY,
          }}
        />
        <div className='bg-gradient-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-4xl font-bold tracking-tighter text-transparent md:text-5xl lg:text-6xl'>
          Sign up for free today
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </div>

        <div className='mt-4 flex items-center gap-4 text-lg'>
          <Button>Get for free</Button>
          <div className='cursor-pointer font-semibold hover:underline'>
            Learn more
            <FaArrowRight className='ml-2 inline h-3 w-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
