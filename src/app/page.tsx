import BrandSlide from '@/components/BrandSlide'
import CTA from '@/components/CTA'
import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'
import ProductCard from '@/components/ProductCard'
import ProductShowcase from '@/components/ProductShowcase'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <BrandSlide />
      <ProductShowcase />
      <ProductCard />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  )
}
