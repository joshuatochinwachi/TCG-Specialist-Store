import { ProductList } from "@/components/product-list"
import { ProductFilters } from "@/components/product-filters"
import { CategoryBanner } from "@/components/category-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MiniaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryBanner
        title="Miniatures & Wargaming"
        description="Build and paint your army with Warhammer, D&D miniatures, paints, and hobby supplies"
        image="/miniatures-warhammer-painting.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <ProductFilters category="miniatures" />
          </aside>

          <main className="flex-1">
            <ProductList category="miniatures" />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
