import { IoMdCheckmark } from 'react-icons/io'

const Pricing = () => {
  return (
    <div className='mb-8'>
      <div className='mx-auto mt-16 mb-12 flex max-w-[700px] flex-col items-center px-12 font-medium'>
        <div className='w-fit rounded-xl border-2 border-slate-300/80 p-0.5 px-3 text-sm'>
          Boost your business
        </div>
        <div className='bg-gradient-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-3xl font-bold tracking-tighter text-transparent md:text-4xl lg:text-5xl'>
          Choose Your Package
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          Transparent pricing, no hidden fees — just quality edits that sell
          properties.
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-8 pb-20 lg:flex-row lg:items-end'>
        <div className='max-w-[307px] rounded-2xl border-2 border-gray-100 p-8 shadow-xl'>
          <div className='font-bold text-gray-500'>Standard Package</div>
          <div className='py-8'>
            <span className='text-5xl font-extrabold'>$35</span>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Basic trimming &
              merging
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Balance overall colors
              of the video
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Basic color correction
            </div>
          </div>
        </div>

        <div className='max-w-[307px] rounded-2xl border-2 bg-black p-8 text-white shadow-2xl'>
          <div className='flex items-center justify-between'>
            <div className='font-bold text-gray-500'>Premium Package</div>
            <div className='w-fit rounded-xl border-2 border-slate-300/20 bg-gradient-to-r from-pink-500 via-lime-600 to-sky-400 bg-clip-text p-0.5 px-2 text-xs font-bold tracking-tighter text-transparent'>
              Most Popular
            </div>
          </div>
          <div className='py-8'>
            <span className='text-5xl font-extrabold'>$50</span>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Smooth trimming paced
              to transitions
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Remove unnecessary
              breaks and pauses
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Improve visual flow
              between scenes
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Advanced color
              adjustment
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Modify brightness,
              contrast, exposure, and saturation
            </div>
          </div>
        </div>
        <div className='max-w-[307px] rounded-2xl border-2 border-gray-100 p-8 shadow-xl'>
          <div className='font-bold text-gray-500'>High-end Package</div>
          <div className='py-8'>
            <span className='text-5xl font-extrabold'>$80</span>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Creative professional
              editing with dynamic pacing
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Fully polished merging
              & sequencing
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Designed for
              high-impact videos
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Rhythm-based timing
              and transitions
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Professional-grade
              color grading
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Detailed exposure,
              contrast, and tone control
            </div>
            <div className='flex'>
              <IoMdCheckmark className='mt-[3px] mr-2' /> Cinema-quality color
              enhancement
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
