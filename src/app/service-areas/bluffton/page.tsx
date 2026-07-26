import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/constants";

const area = SERVICE_AREAS.find((a) => a.slug === "bluffton")!;

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Bluffton SC | Car Detailing Bluffton",
  description:
    "Top-rated mobile auto detailing in Bluffton, SC. GAutoDetailing serves Old Town Bluffton, Palmetto Bluff, Berkeley Hall, Hampton Lake, and all Bluffton communities. Premium results at your door.",
  keywords: area.keywords,
  alternates: { canonical: `${BUSINESS.baseUrl}/service-areas/bluffton` },
};

const localFaqs = [
  { q: "Do you offer mobile car detailing in Bluffton, SC?", a: "Yes! GAutoDetailing provides professional mobile auto detailing throughout Bluffton — from Old Town to Palmetto Bluff, Hampton Lake, Berkeley Hall, Belfair, and beyond. We come to you." },
  { q: "What car detailing services are available in Bluffton?", a: "We offer the full range of detailing services in Bluffton: exterior wash and detail, interior deep clean, ceramic spray protection, paint sealant, clay bar treatment, leather conditioning, and much more." },
  { q: "How much does car detailing cost in Bluffton, SC?", a: "Mobile auto detailing in Bluffton starts at $59 for express details and ranges to $499+ for ultimate packages. Pricing is based on vehicle size and condition. Get a free quote through our contact form." },
  { q: "Can you detail my car at Palmetto Bluff or Hampton Lake?", a: "Absolutely. We regularly serve clients in gated communities like Palmetto Bluff, Hampton Lake, Berkeley Hall, and Belfair. Just provide the community name and gate information when booking." },
  { q: "Do you offer ceramic coating in Bluffton, SC?", a: "We offer professional ceramic spray protection — a hydrophobic coating that provides 3–6 months of paint protection, UV resistance, and a deep mirror-like shine. Available as a standalone service or as part of a package." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GAutoDetailing — Bluffton, SC",
  description: "Professional mobile auto detailing serving Bluffton, SC.",
  url: `${BUSINESS.baseUrl}/service-areas/bluffton`,
  telephone: BUSINESS.phone,
  areaServed: {
    "@type": "City",
    name: "Bluffton",
    containedIn: { "@type": "State", name: "South Carolina" },
  },
};

export default function BlufftonPage() {
  const featuredServices = SERVICES.filter((s) =>
    ["full-detail", "premium-detail", "ceramic-spray", "interior-detail", "exterior-detail", "luxury-vehicle"].includes(s.id)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Bluffton, South Carolina
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mobile Auto Detailing{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Bluffton, SC
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Bluffton&apos;s premier mobile auto detailing service. We serve Old Town
            Bluffton, Palmetto Bluff, Hampton Lake, Berkeley Hall, Belfair,
            Rose Hill, Colleton River, and every community in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-black font-bold hover:shadow-gold hover:scale-105 transition-all">
              Book in Bluffton <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all">
              <Phone className="w-4 h-4" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0A0A0E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Bluffton&apos;s Mobile Detailing Experts</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bluffton has grown into one of the most desirable communities
                  in South Carolina — and the vehicles here deserve the very
                  best care. GAutoDetailing serves all of Bluffton with the
                  same professional-grade service trusted by luxury car owners
                  across the Lowcountry.
                </p>
                <p>
                  From Palmetto Bluff estates to active communities in Hampton
                  Lake and the lively streets of Old Town Bluffton — we bring
                  our equipment, products, and expertise directly to you.
                </p>
                <p>
                  Whether it&apos;s a full detail for your daily driver or a ceramic
                  spray treatment for your luxury vehicle, we deliver results
                  that exceed expectations every single time.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-base font-bold text-white mb-3">Zip Codes Served</h3>
                <div className="flex gap-2">
                  {area.zipCodes.map((z) => (
                    <span key={z} className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 font-mono text-sm border border-gold-500/20">{z}</span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Bluffton Communities We Serve</h3>
              <div className="space-y-2">
                {area.neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-3 p-3 rounded-xl border border-white/8 bg-white/3">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-sm text-white/80 font-medium">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#060608]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Auto Detailing Services in Bluffton, SC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredServices.map((s) => (
              <div key={s.id} className={`p-5 rounded-xl border transition-all hover:scale-[1.01] ${s.popular ? "border-gold-500/30 bg-gold-500/8" : "border-white/8 bg-white/3 hover:bg-white/5"}`}>
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
        </div>
      </section>

      <section className="py-16 bg-[#0A0A0E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Car Detailing Bluffton SC — FAQs</h2>
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
