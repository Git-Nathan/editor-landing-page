import { IoMdCheckmark } from 'react-icons/io'

const Pricing = () => {
  return (
    <div className='mb-8'>
      <div className='mx-auto mt-16 mb-12 flex max-w-[550px] flex-col items-center px-12 font-medium'>
        <div className='w-fit rounded-xl border-2 border-slate-300/80 p-0.5 px-3 text-sm'>
          Boost your productivity
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
        <div className='rounded-2xl border-2 border-gray-100 p-8 shadow-xl'>
          <div className='font-bold text-gray-500'>Free</div>
          <div className='py-8'>
            <span className='text-5xl font-extrabold'>$0</span>
            <span className='font-semibold text-gray-600'>/month</span>
          </div>
          <button className='mb-8 w-full cursor-pointer rounded-lg bg-black py-1.5 text-white'>
            Get started for free
          </button>
          <div className='flex flex-col gap-6'>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Up to 5 project members
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Unlimited tasks and
              projects
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> 2GB storage
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Integrations
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Basic support
            </div>
          </div>
        </div>

        <div className='rounded-2xl border-2 bg-black p-8 text-white shadow-2xl'>
          <div className='flex items-center justify-between'>
            <div className='font-bold text-gray-500'>Pro</div>
            <div className='w-fit rounded-xl border-2 border-slate-300/20 bg-gradient-to-r from-pink-500 via-lime-600 to-sky-400 bg-clip-text p-0.5 px-3 text-xs font-bold tracking-tighter text-transparent'>
              Most Popular
            </div>
          </div>
          <div className='py-8'>
            <span className='text-5xl font-extrabold'>$9</span>
            <span className='font-semibold text-gray-600'>/month</span>
          </div>
          <button className='mb-8 w-full cursor-pointer rounded-lg bg-white py-1.5 font-medium text-black'>
            Sign up now
          </button>
          <div className='flex flex-col gap-6'>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Up to 50 project members
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Unlimited tasks and
              projects
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> 50GB storage
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Integrations
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Priority support
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Advanced support
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Expert support
            </div>
          </div>
        </div>
        <div className='rounded-2xl border-2 border-gray-100 p-8 shadow-xl'>
          <div className='font-bold text-gray-500'>Business</div>
          <div className='py-8'>
            <span className='text-5xl font-extrabold'>$19</span>
            <span className='font-semibold text-gray-600'>/month</span>
          </div>
          <button className='mb-8 w-full cursor-pointer rounded-lg bg-black py-1.5 text-white'>
            Sign up now
          </button>
          <div className='flex flex-col gap-6'>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Up to 50 project members
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Unlimited tasks and
              projects
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> 200GB storage
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Integrations
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Dedicated account
              manager
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Custom fields
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' />
              Advanced analytics
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' />
              Export capabilities
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> API access
            </div>
            <div>
              <IoMdCheckmark className='mr-2 inline' /> Advanced security
              features
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
