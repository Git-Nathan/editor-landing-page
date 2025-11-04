import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import WhyChooseMe from '@/components/WhyChooseMe'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseMe />
      <Portfolio />
      <Pricing />
      <CTA />
    </>
  )
}
