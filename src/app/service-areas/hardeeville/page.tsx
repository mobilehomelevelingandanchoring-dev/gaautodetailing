import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/constants";

const area = SERVICE_AREAS.find((a) => a.slug === "hardeeville")!;

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Hardeeville SC | GAutoDetailing",
  description:
    "Professional mobile auto detailing in Hardeeville, SC. GAutoDetailing comes to you in Hardeeville for exterior, interior, ceramic spray, and full detail services. Book today!",
  keywords: area.keywords,
  alternates: { canonical: `${BUSINESS.baseUrl}/service-areas/hardeeville` },
  openGraph: {
    title: "Mobile Auto Detailing Hardeeville SC | GAutoDetailing",
    description: "Premium mobile auto detailing serving all of Hardeeville, SC. We come to your home or office.",
    url: `${BUSINESS.baseUrl}/service-areas/hardeeville`,
  },
};

const localFaqs = [
  { q: "Do you offer mobile auto detailing in Hardeeville, SC?", a: "Yes! GAutoDetailing serves all of Hardeeville, SC including neighborhoods like Argent Lakes, Riverton Pointe, Sun City, and the Historic District. We come directly to your location." },
  { q: "What's the best auto detailing service in Hardeeville?", a: "GAutoDetailing offers professional mobile auto detailing for Hardeeville residents — rated 4.9 stars with 100+ happy customers across the Lowcountry." },
  { q: "How do I book a car detail in Hardeeville, SC?", a: "Simply fill out our online booking form, call (843) 555-0192, or message us on Instagram @ga_autodetailing7. We typically confirm appointments within a few hours." },
  { q: "How much does mobile car detailing cost in Hardeeville?", a: "Our Hardeeville detailing services start at $59 for an express detail and go up to $499+ for our ultimate package. Pricing depends on vehicle size and condition. Contact us for a free quote." },
  { q: "Do you serve Sun City Hilton Head area of Hardeeville?", a: "Yes! We serve Sun City Hilton Head and all Hardeeville communities. Being mobile means we come to your community entrance, home, or any convenient location." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GAutoDetailing — Hardeeville, SC",
  description: "Professional mobile auto detailing serving Hardeeville, SC.",
  url: `${BUSINESS.baseUrl}/service-areas/hardeeville`,
  telephone: BUSINESS.phone,
  areaServed: {
    "@type": "City",
    name: "Hardeeville",
    containedIn: { "@type": "State", name: "South Carolina" },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.2833,
    longitude: -81.0778,
  },
};

export default function HardeevillePage() {
  const featuredServices = SERVICES.filter((s) =>
    ["exterior-detail", "interior-detail", "full-detail", "ceramic-spray", "premium-detail", "pet-hair-removal"].includes(s.id)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Hardeeville, South Carolina
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mobile Auto Detailing{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Hardeeville, SC
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            GAutoDetailing brings professional mobile auto detailing directly to
            Hardeeville residents. Whether you&apos;re in Sun City, Argent Lakes,
            Riverton Pointe, or anywhere in Hardeeville — we come to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-black font-bold hover:shadow-gold hover:scale-105 transition-all">
              Book in Hardeeville <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="py-16 md:py-24 bg-[#0A0A0E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Hardeeville&apos;s Trusted Mobile Detailer
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As one of the fastest-growing cities in South Carolina,
                  Hardeeville is home to thousands of families and professionals
                  who deserve a premium auto detailing experience — without
                  driving to a shop.
                </p>
                <p>
                  GAutoDetailing serves all of Hardeeville, including planned
                  communities like Sun City Hilton Head, Argent Lakes, and
                  Riverton Pointe. We provide the same professional-grade
                  results you&apos;d expect from a top detail shop, but delivered
                  directly to your driveway.
                </p>
                <p>
                  From quick express details to full ceramic-spray protection
                  packages, every service is performed with premium products and
                  genuine care for your vehicle.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Neighborhoods Served</h3>
              <div className="grid grid-cols-2 gap-2">
                {area.neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-2 p-3 rounded-xl border border-white/8 bg-white/3">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="text-sm text-white/80">{n}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-muted-foreground">Zip codes served:</span>
                {area.zipCodes.map((z) => (
                  <span key={z} className="text-xs px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 font-mono">{z}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#060608]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Services Available in Hardeeville
          </h2>
          <p className="text-muted-foreground mb-8">All services performed at your Hardeeville location.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredServices.map((s) => (
              <div key={s.id} className="p-5 rounded-xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all">
                <h3 className="font-bold text-white mb-1">{s.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{s.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gold-400 font-semibold">{s.price}</span>
                  <Link href="/contact" className="text-xs text-gold-400 hover:text-gold-300 flex items-center gap-1">
                    Book <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-16 bg-[#0A0A0E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            Mobile Auto Detailing in Hardeeville — FAQs
          </h2>
          <Accordion type="single" collapsible>
            {localFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </>
  );
}
