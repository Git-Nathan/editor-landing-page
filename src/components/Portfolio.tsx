'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import ResponsiveYouTube from './ResponsiveYouTube'

const Portfolio: React.FC = () => {
  const [positionIndexes, setPositionIndexes] = useState<number[]>([
    0, 1, 2, 3, 4,
  ])

  const handleNext = (): void => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % 5),
    )
  }

  const handleBack = (): void => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 4) % 5),
    )
  }

  const images: string[] = ['city1', 'city2', 'city3', 'planet1', 'planet2']

  type Position = 'center' | 'left1' | 'left' | 'right' | 'right1'

  const positions: Position[] = ['center', 'left1', 'left', 'right', 'right1']

  const imageVariants: Variants = {
    center: { x: '0%', scale: 1, zIndex: 5 },
    left1: { x: '-50%', scale: 0.7, zIndex: 3 },
    left: { x: '-90%', scale: 0.5, zIndex: 2 },
    right: { x: '90%', scale: 0.5, zIndex: 1 },
    right1: { x: '50%', scale: 0.7, zIndex: 3 },
  }

  return (
    <div className='relative flex h-screen flex-col items-center justify-center overflow-hidden'>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className='rounded-[12px]'
          initial='center'
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{
            width: '40%',
            position: 'absolute',
          }}
        >
          <ResponsiveYouTube
            videoId='3H6Evu2hPpE'
            autoplay={false}
            controls={true}
          />
        </motion.div>
      ))}
      <div className='mt-[400px] flex flex-row gap-3'>
        <button
          className='rounded-md bg-indigo-400 px-4 py-2 text-white'
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className='rounded-md bg-indigo-400 px-4 py-2 text-white'
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Portfolio
