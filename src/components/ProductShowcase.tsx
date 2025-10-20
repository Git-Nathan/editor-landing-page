'use client'

// Images served from public folder — use direct src strings
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { GoBell, GoGoal } from 'react-icons/go'
import { LuLeaf } from 'react-icons/lu'
import { MdLockOutline } from 'react-icons/md'

const ProductShowcase = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <div
      ref={sectionRef}
      className='flex flex-col items-center overflow-x-hidden bg-gradient-to-t from-[#acbae8] to-white pb-24'
    >
      <div className='mx-auto mt-24 flex flex-col items-center px-8 font-medium md:w-[550px] lg:w-[630px]'>
        <div className='w-fit rounded-xl border-2 border-slate-300/80 p-0.5 px-3 text-sm'>
          Boost your productivity
        </div>
        <div className='bg-gradient-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-3xl font-bold tracking-tighter text-transparent md:text-4xl lg:text-5xl'>
          A more effective way to track progress
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </div>
      </div>
      <div className='relative'>
        <motion.img
          src={'/assets/pyramid.png'}
          alt='Pyramid Image'
          className='absolute -top-20 -right-24 hidden h-72 w-72 md:block'
          style={{
            translateY: translateY,
          }}
        />
        <Image
          src={'/assets/product-image.png'}
          alt='Product Image'
          width={1200}
          height={806}
          className='h-auto px-1'
        />
        <motion.img
          src={'/assets/tube.png'}
          alt='Tube Image'
          className='absolute top-64 -left-28 hidden h-72 w-72 md:block'
          style={{
            translateY: translateY,
          }}
        />
      </div>

      <div className='grid max-w-[1400px] gap-8 px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-28'>
        <div className='mt-16'>
          <LuLeaf className='mb-3 text-2xl' />
          <div className='text-2xl font-bold'>Integration ecosystem</div>
          <div className='my-2 text-lg'>
            Track your progress and motivate your efforts everyday.
          </div>
          <div className='text-lg font-medium'>
            Learn more <FaArrowRight className='inline h-3 w-3' />
          </div>
        </div>

        <div className='mt-16'>
          <GoGoal className='mb-3 text-2xl' />
          <div className='text-2xl font-bold'>Goal setting and tracking</div>
          <div className='my-2 text-lg'>
            Set and track goals with manageable task breakdowns.
          </div>
          <div className='text-lg font-medium'>
            Learn more <FaArrowRight className='inline h-3 w-3' />
          </div>
        </div>

        <div className='mt-16'>
          <MdLockOutline className='mb-3 text-2xl' />
          <div className='text-2xl font-bold'>Secure data encryption</div>
          <div className='my-2 text-lg'>
            Ensure data safety with top-tier encryption.
          </div>
          <div className='text-lg font-medium'>
            Learn more <FaArrowRight className='inline h-3 w-3' />
          </div>
        </div>

        <div className='mt-16'>
          <GoBell className='mb-3 text-2xl' />
          <div className='text-2xl font-bold'>Customizable notifications</div>
          <div className='my-2 text-lg'>
            Get alerts on tasks and deadlines that matter most.
          </div>
          <div className='text-lg font-medium'>
            Learn more <FaArrowRight className='inline h-3 w-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShowcase
