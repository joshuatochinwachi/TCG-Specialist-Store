import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance" style={{ fontFamily: "var(--font-bebas)" }}>
            JOIN THE TCG SPECIALIST COMMUNITY
          </h2>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Subscribe for updates on new Pokemon card arrivals, tournament schedules, special offers, and exclusive deals for collectors in London.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="font-semibold">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Follow us on{" "}
            <a 
              href="https://www.instagram.com/thetcgspecialist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram @thetcgspecialist
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
