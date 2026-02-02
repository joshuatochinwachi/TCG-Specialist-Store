import { ProductList } from "@/components/product-list"
import { ProductFilters } from "@/components/product-filters"
import { CategoryBanner } from "@/components/category-banner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PokemonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryBanner
        title="Pokémon Trading Card Game"
        description="Catch 'em all with our extensive collection of Pokémon cards, booster packs, and accessories"
        image="/pokemon-cards-collection.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 shrink-0">
            <ProductFilters category="pokemon" />
          </aside>

          <main className="flex-1">
            <ProductList category="pokemon" />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
