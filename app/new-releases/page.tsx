import { ProductList } from "@/components/product-list"
import { CategoryBanner } from "@/components/category-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NewReleasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryBanner
        title="New Releases & Pre-Orders"
        description="Be the first to get the latest releases in trading cards, board games, and collectibles"
        image="/new-gaming-releases.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <ProductList category="new-releases" />
      </div>
      <Footer />
    </div>
  )
}
