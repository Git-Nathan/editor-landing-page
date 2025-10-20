import Image from 'next/image'
import {
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { MdOutlineArrowOutward } from 'react-icons/md'

export const Footer = () => {
  return (
    <div className='flex flex-col justify-between gap-8 bg-black p-16 text-white md:flex-row md:px-20 xl:px-44'>
      <div className='flex max-w-[300px] flex-col gap-8 text-gray-300/85'>
        <Image
          src={'/assets/logo.png'}
          alt='Logo'
          className='cursor-pointer'
          width={40}
          height={40}
        />
        <div>
          This website is developed by{' '}
          <div className='text-lg font-semibold text-white hover:underline'>
            <a href='https://github.com/tanishkadeep'>
              Tanishka Deep <MdOutlineArrowOutward className='inline' />
            </a>
          </div>
        </div>
        <div className='flex cursor-pointer gap-4 text-2xl'>
          <FaXTwitter className='hover:scale-125' />
          <AiFillInstagram className='hover:scale-125' />
          <FaPinterest className='hover:scale-125' />
          <FaLinkedin className='hover:scale-125' />
          <FaTiktok className='hover:scale-125' />
          <FaYoutube className='hover:scale-125' />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-lg font-bold'>Product</div>
        <div className='cursor-pointer text-gray-300/85'>Features</div>
        <div className='cursor-pointer text-gray-300/85'>Integrations</div>
        <div className='cursor-pointer text-gray-300/85'>Updates</div>
        <div className='cursor-pointer text-gray-300/85'>FAQ</div>
        <div className='cursor-pointer text-gray-300/85'>Pricing</div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-lg font-bold'>Company</div>
        <div className='cursor-pointer text-gray-300/85'>About</div>
        <div className='cursor-pointer text-gray-300/85'>Blog</div>
        <div className='cursor-pointer text-gray-300/85'>Careers</div>
        <div className='cursor-pointer text-gray-300/85'>Manifesto</div>
        <div className='cursor-pointer text-gray-300/85'>Press</div>
        <div className='cursor-pointer text-gray-300/85'>Contact</div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-lg font-bold'>Resources</div>
        <div className='cursor-pointer text-gray-300/85'>Examples</div>
        <div className='cursor-pointer text-gray-300/85'>Community</div>
        <div className='cursor-pointer text-gray-300/85'>Guides</div>
        <div className='cursor-pointer text-gray-300/85'>Docs</div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-lg font-bold'>Legal</div>
        <div className='cursor-pointer text-gray-300/85'>Privacy </div>
        <div className='cursor-pointer text-gray-300/85'>Terms</div>
        <div className='cursor-pointer text-gray-300/85'>Security</div>
      </div>
    </div>
  )
}
