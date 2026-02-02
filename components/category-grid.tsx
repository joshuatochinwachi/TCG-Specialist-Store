"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const categories = [
  {
    name: "Magic: The Gathering",
    image: "/generic-fantasy-cards.png",
    color: "from-primary/20 to-primary/5",
    href: "/magic-the-gathering",
  },
  {
    name: "Pokémon TCG",
    image: "/pokemon-trading-cards.png",
    color: "from-accent/20 to-accent/5",
    href: "/pokemon",
  },
  {
    name: "Yu-Gi-Oh!",
    image: "/yugioh-cards.jpg",
    color: "from-secondary/20 to-secondary/5",
    href: "/yu-gi-oh",
  },
  {
    name: "Board Games",
    image: "/board-games-on-table.jpg",
    color: "from-primary/15 to-primary/5",
    href: "/board-games",
  },
  {
    name: "Warhammer",
    image: "/warhammer-miniatures-painted.jpg",
    color: "from-accent/15 to-accent/5",
    href: "/miniatures",
  },
  {
    name: "Accessories",
    image: "/card-sleeves-and-gaming-accessories.jpg",
    color: "from-secondary/15 to-secondary/5",
    href: "/accessories",
  },
]

export function CategoryGrid() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section className="py-16 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center text-balance transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          SHOP BY CATEGORY
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link key={category.name} href={category.href}>
              <Card
                className={`group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-500 hover-lift hover-glow ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
                }}
              >
                <div className={`relative aspect-square bg-gradient-to-br ${category.color} overflow-hidden`}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-3 bg-card">
                  <h3 className="font-bold text-sm md:text-base text-center text-balance group-hover:text-primary transition-colors duration-300">{category.name}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
