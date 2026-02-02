"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2
              className={`text-4xl md:text-6xl font-bold leading-tight text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              LONDON'S TRUSTED POKEMON CARD SPECIALISTS
            </h2>
            <p className={`text-lg text-muted-foreground leading-relaxed text-pretty transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
              Buy, sell, and trade Pokemon Trading Cards at our Greenford store. From rare and graded cards to booster boxes and singles. Join our Pokemon TCG tournaments and connect with passionate collectors!
            </p>
            <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
              <Link href="/pokemon">
                <Button size="lg" className="font-semibold hover-glow hover:scale-105 transition-all duration-300">
                  Shop Pokemon Cards
                </Button>
              </Link>
              <Link href="https://maps.app.goo.gl/49APy7DuHrynPvet9" target="_blank">
                <Button size="lg" variant="outline" className="font-semibold bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                  Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
          <div className={`relative h-64 md:h-96 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}>
            <div className="relative h-full group">
              <img
                src="/fantasy-trading-cards-and-dice-on-gaming-table.jpg"
                alt="Pokemon cards and trading card games at The TCG Specialist"
                className="w-full h-full object-cover rounded-lg shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
