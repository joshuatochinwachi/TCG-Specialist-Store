import { Instagram, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="The TCG Specialist"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <h3 className="text-lg font-bold leading-tight">THE TCG</h3>
                <p className="text-sm font-semibold text-primary -mt-1">SPECIALIST</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              London's trusted Trading Cards shop, specializing in Pokemon cards, collectibles, and accessories. Buy, sell, and trade with us!
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/thetcgspecialist"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Trading Card Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Board Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Miniatures
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Sale Items
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <a
                  href="https://maps.app.goo.gl/49APy7DuHrynPvet9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  488 Greenford Road, Greenford, London, UB6 8SJ
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:07706062626" className="hover:text-foreground transition-colors">
                  077-0606-2626
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:Thetcgspecialist@gmail.com" className="hover:text-foreground transition-colors">
                  Thetcgspecialist@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 The TCG Specialist. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
