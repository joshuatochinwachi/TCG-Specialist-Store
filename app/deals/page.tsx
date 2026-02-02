import { ProductList } from "@/components/product-list"
import { CategoryBanner } from "@/components/category-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DealsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryBanner
        title="Hot Deals & Special Offers"
        description="Save big on your favorite games and collectibles with our latest deals and promotions"
        image="/gaming-deals-sale.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <ProductList category="deals" />
      </div>
      <Footer />
    </div>
  )
}
