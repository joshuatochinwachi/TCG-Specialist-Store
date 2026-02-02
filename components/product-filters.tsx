"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
  category: string
}

export function ProductFilters({ category }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 500])

  const categoryFilters = {
    pokemon: {
      types: ["Booster Packs", "Single Cards", "Elite Trainer Boxes", "Booster Boxes", "Deck Boxes", "Sleeves"],
      sets: ["Scarlet & Violet", "Crown Zenith", "Silver Tempest", "Lost Origin", "Astral Radiance"],
      rarity: ["Common", "Uncommon", "Rare", "Holo Rare", "Ultra Rare", "Secret Rare"],
    },
    "magic-the-gathering": {
      types: ["Booster Packs", "Single Cards", "Bundle", "Commander Decks", "Draft Boosters", "Set Boosters"],
      sets: ["Wilds of Eldraine", "Lost Caverns of Ixalan", "Murders at Karlov Manor", "The Brothers War"],
      rarity: ["Common", "Uncommon", "Rare", "Mythic Rare"],
    },
    "yu-gi-oh": {
      types: ["Booster Packs", "Single Cards", "Structure Decks", "Tin", "Accessories"],
      sets: ["Age of Overlord", "Wild Survivors", "Cyberstorm Access", "Photon Hypernova"],
      rarity: ["Common", "Rare", "Super Rare", "Ultra Rare", "Secret Rare"],
    },
    "board-games": {
      types: ["Strategy", "Party Games", "Family Games", "Card Games", "Cooperative", "Competitive"],
      players: ["2 Players", "3-4 Players", "5+ Players", "Solo"],
      duration: ["< 30 min", "30-60 min", "60-120 min", "120+ min"],
    },
    miniatures: {
      types: ["Warhammer 40K", "Age of Sigmar", "D&D Miniatures", "Paints", "Brushes", "Tools"],
      brands: ["Games Workshop", "Citadel", "Vallejo", "Army Painter", "Reaper"],
      faction: ["Space Marines", "Chaos", "Orks", "Eldar", "Tyranids"],
    },
  }

  const filters = categoryFilters[category as keyof typeof categoryFilters] || categoryFilters.pokemon

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-4">Filters</h3>
          <Button variant="ghost" size="sm" className="text-primary">
            Clear All
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-3">Price Range</h4>
            <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>£{priceRange[0]}</span>
              <span>£{priceRange[1]}</span>
            </div>
          </div>

          {Object.entries(filters).map(([filterKey, filterValues]) => (
            <div key={filterKey}>
              <h4 className="font-semibold mb-3 capitalize">{filterKey}</h4>
              <div className="space-y-2">
                {(filterValues as string[]).map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <Checkbox id={`${filterKey}-${value}`} />
                    <Label htmlFor={`${filterKey}-${value}`} className="text-sm cursor-pointer">
                      {value}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold mb-3">Availability</h4>
          <div className="flex items-center gap-2">
            <Checkbox id="in-stock" />
            <Label htmlFor="in-stock" className="text-sm cursor-pointer">
              In Stock
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="pre-order" />
            <Label htmlFor="pre-order" className="text-sm cursor-pointer">
              Pre-Order
            </Label>
          </div>
        </div>
      </div>
    </Card>
  )
}
