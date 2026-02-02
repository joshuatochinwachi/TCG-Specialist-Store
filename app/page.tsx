import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoSection } from "@/components/promo-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <PromoSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
