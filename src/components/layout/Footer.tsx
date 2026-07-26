import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

const footerLinks = {
  services: [
    { label: "Exterior Detail", href: "/services#exterior" },
    { label: "Interior Detail", href: "/services#interior" },
    { label: "Full Detail", href: "/services#packages" },
    { label: "Ceramic Spray Protection", href: "/services#protection" },
    { label: "Paint Sealant", href: "/services#protection" },
    { label: "Luxury Vehicle Detailing", href: "/services#specialty" },
    { label: "Fleet Detailing", href: "/services#specialty" },
    { label: "Monthly Plans", href: "/pricing" },
  ],
  pages: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Before & After", href: "/before-after" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060608] border-t border-white/8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(201,168,76,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA Banner */}
        <div className="py-12 border-b border-white/8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Ready for a showroom-clean vehicle?
              </h3>
              <p className="text-muted-foreground">
                We come to you — wherever you are in the Lowcountry.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20
                           text-white text-sm font-medium hover:bg-white/10 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                           bg-gold-gradient text-black hover:shadow-gold hover:scale-105 transition-all duration-200"
              >
                Book Online
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="text-lg font-bold text-white">
                G<span className="bg-gold-gradient bg-clip-text text-transparent">Auto</span>Detailing
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium mobile auto detailing serving the South Carolina Lowcountry.
              We travel to you — bringing showroom-quality results directly to your door.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <span className="text-sm text-white/80 font-medium">4.9/5</span>
              <span className="text-sm text-muted-foreground">· 100+ Reviews</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-gold-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                </div>
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-sm text-white/80 hover:text-gold-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                </div>
                {BUSINESS.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                </div>
                Serving Hardeeville, Bluffton, Hilton Head & Beaufort, SC
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500
                           flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/50 group-hover:bg-gold-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/50 group-hover:bg-gold-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-sm text-muted-foreground hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <MapPin className="w-3 h-3 text-gold-500/50 group-hover:text-gold-500 transition-colors" />
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} GAutoDetailing. All rights reserved. Serving Hardeeville, Bluffton, Hilton Head & Beaufort, SC.
          </p>
          <p className="text-xs text-muted-foreground">
            Premium Mobile Auto Detailing · Lowcountry, South Carolina
          </p>
        </div>
      </div>
    </footer>
  );
}
