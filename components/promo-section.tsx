import { Button } from "@/components/ui/button"
import { MapPin, Trophy, CreditCard } from "lucide-react"

export function PromoSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-bebas)" }}>
              VISIT OUR GREENFORD STORE
            </h2>
            <p className="text-lg leading-relaxed text-pretty opacity-95">
              Come visit us in person! We offer expert card valuations, Pokemon TCG tournaments, and a welcoming community of collectors and players. Bring your cards to trade or sell!
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>488 Greenford Road, Greenford, London, UB6 8SJ</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span>Weekly Pokemon TCG Tournaments</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                <span>We Buy Your Pokemon Cards - Get Instant Cash!</span>
              </div>
            </div>
            <a href="https://maps.app.goo.gl/49APy7DuHrynPvet9" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="font-semibold mt-2">
                Get Directions
              </Button>
            </a>
          </div>
          <div className="relative h-64 md:h-80">
            <img
              src="/people-playing-board-games-and-card-games-together.jpg"
              alt="Pokemon TCG tournaments and community at The TCG Specialist"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
