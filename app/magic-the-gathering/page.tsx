import { ProductList } from "@/components/product-list"
import { ProductFilters } from "@/components/product-filters"
import { CategoryBanner } from "@/components/category-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MagicPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryBanner
        title="Magic: The Gathering"
        description="Build your ultimate deck with singles, booster boxes, and sealed products from every set"
        image="/generic-fantasy-cards.png"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <ProductFilters category="magic-the-gathering" />
          </aside>

          <main className="flex-1">
            <ProductList category="magic-the-gathering" />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
