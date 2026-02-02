"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const products = [
  {
    name: "Dominaria Remastered Booster Box",
    price: "£179.99",
    originalPrice: "£199.99",
    image: "/magic-the-gathering-booster-box.jpg",
    badge: "Hot Deal",
  },
  {
    name: "Pokémon Scarlet & Violet Elite Trainer Box",
    price: "£42.99",
    image: "/pokemon-elite-trainer-box.png",
    badge: "New",
  },
  {
    name: "Warhammer 40K Combat Patrol",
    price: "£89.99",
    image: "/warhammer-40k-miniatures-box.jpg",
    badge: "Bestseller",
  },
  {
    name: "Ticket to Ride Europe",
    price: "£34.99",
    originalPrice: "£44.99",
    image: "/ticket-to-ride-board-game.jpg",
    badge: "Sale",
  },
]

export function FeaturedProducts() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`flex items-end justify-between mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ fontFamily: "var(--font-bebas)" }}>
              FEATURED PRODUCTS
            </h2>
            <p className="text-muted-foreground mt-2">Handpicked favorites from our collection</p>
          </div>
          <Button variant="outline" className="hidden md:flex bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-300">
            View All Products
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className={`group cursor-pointer hover-lift hover-glow transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
              }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-bold shadow-lg">
                    {product.badge}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-3 p-4">
                <h3 className="font-semibold text-sm leading-tight text-balance line-clamp-2 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
                <Button className="w-full hover:scale-105 transition-all duration-300" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex justify-center md:hidden">
          <Button variant="outline" className="hover:bg-primary/10 hover:scale-105 transition-all duration-300">View All Products</Button>
        </div>
      </div>
    </section>
  )
}
