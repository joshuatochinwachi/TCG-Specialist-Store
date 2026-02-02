import { ProductList } from "@/components/product-list"
import { ProductFilters } from "@/components/product-filters"
import { CategoryBanner } from "@/components/category-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BoardGamesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryBanner
        title="Board Games"
        description="Explore our vast collection of strategy games, party games, and family favorites"
        image="/board-games-collection.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <ProductFilters category="board-games" />
          </aside>

          <main className="flex-1">
            <ProductList category="board-games" />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
