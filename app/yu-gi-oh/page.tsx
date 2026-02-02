import { ProductList } from "@/components/product-list"
import { ProductFilters } from "@/components/product-filters"
import { CategoryBanner } from "@/components/category-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function YuGiOhPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryBanner
        title="Yu-Gi-Oh! Trading Card Game"
        description="Duel in style with our complete selection of Yu-Gi-Oh! cards and accessories"
        image="/yugioh-cards-collection.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <ProductFilters category="yu-gi-oh" />
          </aside>

          <main className="flex-1">
            <ProductList category="yu-gi-oh" />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
