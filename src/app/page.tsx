import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import WhyChooseMe from '@/components/WhyChooseMe'
import Testimonials from '@/components/Testimonials'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseMe />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  )
}
