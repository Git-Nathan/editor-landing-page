import Image from 'next/image'

const Portfolio: React.FC = () => {
  return (
    <div className='flex flex-col items-center overflow-x-hidden pb-24'>
      <div className='mx-auto mt-20 flex flex-col items-center px-8 font-medium md:w-[550px] lg:w-[630px]'>
        <div className='w-fit rounded-xl border-2 border-slate-300/80 p-0.5 px-3 text-sm'>
          Portfolio
        </div>
        <div className='bg-gradient-to-b from-black to-[#002499] bg-clip-text py-6 text-center text-3xl font-bold tracking-tighter text-transparent md:text-4xl lg:text-5xl'>
          My Work
        </div>

        <div className='mb-8 text-center text-lg md:text-xl'>
          See how I transform ordinary footage into stunning real estate
          stories.
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-16 px-8 pt-4 lg:flex-row'>
        <div className='flex max-w-[400px] flex-col items-center justify-center rounded-xl p-8 shadow-2xl'>
          <Image
            src={'/assets/cube-helix-1.png'}
            alt='Helix'
            className='pb-4'
            width={330}
            height={329}
          />
          <div className='pb-3 text-center text-2xl font-bold'>
            Integration ecosystem
          </div>
          <div className='text-center'>
            Enhance your productivity by connecting with your favorite tools,
            keeping all your essentials in one place.
          </div>
        </div>

        <div className='flex max-w-[400px] flex-col items-center justify-center rounded-xl p-8 shadow-2xl'>
          <Image
            src={'/assets/cube-helix.png'}
            alt='Cube'
            className='pb-4'
            width={330}
            height={329}
          />
          <div className='pb-3 text-center text-2xl font-bold'>
            Goal setting and tracking
          </div>
          <div className='text-center'>
            Define and track your goals, breaking down objectives into
            achievable tasks to keep your targets in sight.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
