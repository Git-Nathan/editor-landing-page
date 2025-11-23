import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import WhyChooseMe from '@/components/WhyChooseMe'

export const metadata = {
  title: 'LioSmooth - Transform Real Estate Listings Into Eye-Catching Videos',
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseMe />
      {/* <Portfolio /> */}
      <Pricing />
      <CTA />
    </>
  )
}
