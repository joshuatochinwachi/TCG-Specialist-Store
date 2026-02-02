import { Search, ShoppingCart, User, Menu, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Phone className="h-3 w-3" />
            077-0606-2626
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            488 Greenford Road, London, UB6 8SJ
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="The TCG Specialist"
                width={60}
                height={60}
                className="rounded-md"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight">
                  THE TCG
                </h1>
                <p className="text-sm md:text-base font-semibold text-primary -mt-1">SPECIALIST</p>
              </div>
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search for products..." className="pl-10 w-full" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search for products..." className="pl-10 w-full" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-border hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 py-3 text-sm font-medium">
            <li>
              <Link href="/pokemon" className="hover:text-primary transition-colors">
                Pokémon
              </Link>
            </li>
            <li>
              <Link href="/magic-the-gathering" className="hover:text-primary transition-colors">
                Magic: The Gathering
              </Link>
            </li>
            <li>
              <Link href="/yu-gi-oh" className="hover:text-primary transition-colors">
                Yu-Gi-Oh!
              </Link>
            </li>
            <li>
              <Link href="/board-games" className="hover:text-primary transition-colors">
                Board Games
              </Link>
            </li>
            <li>
              <Link href="/miniatures" className="hover:text-primary transition-colors">
                Miniatures
              </Link>
            </li>
            <li>
              <Link href="/accessories" className="hover:text-primary transition-colors">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/deals" className="text-accent hover:text-accent/80 transition-colors">
                Deals
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
