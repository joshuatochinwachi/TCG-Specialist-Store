"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface ProductListProps {
  category: string
}

const products = [
  {
    id: 1,
    name: "Pokémon Scarlet & Violet Booster Box",
    price: 99.99,
    originalPrice: 119.99,
    image: "/pokemon-booster-box.jpg",
    stock: "In Stock",
    badge: "17% OFF",
  },
  {
    id: 2,
    name: "Elite Trainer Box - Paradox Rift",
    price: 39.99,
    image: "/pokemon-elite-trainer-box.png",
    stock: "In Stock",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Charizard ex - Ultra Rare",
    price: 49.99,
    image: "/charizard-pokemon-card.png",
    stock: "Low Stock",
    badge: "HOT",
  },
  {
    id: 4,
    name: "Pokémon 151 Booster Bundle",
    price: 149.99,
    image: "/pokemon-151-cards.jpg",
    stock: "Pre-Order",
    badge: null,
  },
  {
    id: 5,
    name: "Crown Zenith Booster Pack",
    price: 5.99,
    image: "/pokemon-booster-pack.png",
    stock: "In Stock",
    badge: null,
  },
  {
    id: 6,
    name: "Ultra Premium Collection",
    price: 119.99,
    originalPrice: 139.99,
    image: "/pokemon-premium-collection.jpg",
    stock: "In Stock",
    badge: "14% OFF",
  },
  {
    id: 7,
    name: "Pokémon Deck Protector Sleeves",
    price: 9.99,
    image: "/pokemon-card-sleeves.jpg",
    stock: "In Stock",
    badge: null,
  },
  {
    id: 8,
    name: "Paldea Evolved Booster Box",
    price: 109.99,
    image: "/paldea-evolved-pokemon.jpg",
    stock: "In Stock",
    badge: null,
  },
  {
    id: 9,
    name: "Pikachu V Union Special Collection",
    price: 29.99,
    image: "/pikachu-v-union.jpg",
    stock: "In Stock",
    badge: null,
  },
]

export function ProductList({ category }: ProductListProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">1-9</span> of{" "}
          <span className="font-semibold text-foreground">247</span> products
        </div>

        <div className="flex items-center gap-3">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            className={`group overflow-hidden hover:shadow-lg transition-shadow ${
              viewMode === "list" ? "flex flex-row" : ""
            }`}
          >
            <div className={`relative ${viewMode === "list" ? "w-48" : "aspect-square"}`}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                  {product.badge}
                </div>
              )}
              <div
                className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-semibold ${
                  product.stock === "In Stock"
                    ? "bg-green-500 text-white"
                    : product.stock === "Low Stock"
                      ? "bg-orange-500 text-white"
                      : "bg-blue-500 text-white"
                }`}
              >
                {product.stock}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>

              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-2xl font-bold text-primary">£{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">£{product.originalPrice}</span>
                  )}
                </div>

                <Button className="w-full" size="lg">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="default">1</Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">...</Button>
        <Button variant="outline">28</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  )
}
