'use client'

// Use images directly from the public folder via string srcs
import Image from 'next/image'
import { motion } from 'framer-motion'

const BrandSlide = () => {
  return (
    <div className='flex justify-center bg-white px-4 pt-8 md:p-12'>
      <div className='w-[1200px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <motion.div
          className='flex flex-none items-center justify-center gap-14 pr-14'
          animate={{
            translateX: '-50%',
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
        >
          <Image
            src={'/assets/logo-acme.png'}
            alt='logo_acme'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-apex.png'}
            alt='logo_apex'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-celestial.png'}
            alt='logo_celestial'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-echo.png'}
            alt='logo_echo'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-pulse.png'}
            alt='logo_pulse'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-quantum.png'}
            alt='logo_quantum'
            className='w-auto'
            width={120}
            height={32}
          />

          <Image
            src={'/assets/logo-acme.png'}
            alt='logo_acme'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-apex.png'}
            alt='logo_apex'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-celestial.png'}
            alt='logo_celestial'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-echo.png'}
            alt='logo_echo'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-pulse.png'}
            alt='logo_pulse'
            className='w-auto'
            width={120}
            height={32}
          />
          <Image
            src={'/assets/logo-quantum.png'}
            alt='logo_quantum'
            className='w-auto'
            width={120}
            height={32}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default BrandSlide
