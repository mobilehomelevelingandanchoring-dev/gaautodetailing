import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/constants";

const area = SERVICE_AREAS.find((a) => a.slug === "hilton-head")!;

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Hilton Head Island SC | Luxury Car Detailing",
  description:
    "Premium mobile auto detailing on Hilton Head Island, SC. GAutoDetailing serves Sea Pines, Palmetto Dunes, Port Royal, Shipyard, Spanish Wells, Wexford, and Indigo Run. Luxury results.",
  keywords: area.keywords,
  alternates: { canonical: `${BUSINESS.baseUrl}/service-areas/hilton-head` },
};

const localFaqs = [
  { q: "Do you offer mobile car detailing on Hilton Head Island?", a: "Yes! GAutoDetailing serves all of Hilton Head Island including Sea Pines, Palmetto Dunes, Port Royal Plantation, Shipyard Plantation, Spanish Wells, Wexford, and Indigo Run. We come to your villa, home, or resort." },
  { q: "Do you provide luxury car detailing on Hilton Head?", a: "Absolutely. We specialize in luxury and exotic vehicle detailing. Hilton Head Island residents with Mercedes, BMW, Porsche, Range Rover, and other luxury vehicles trust us for white-glove detailing service." },
  { q: "Can you detail my car at my vacation rental on Hilton Head?", a: "Yes! We regularly service vacation rental clients on Hilton Head. Whether you're staying for a week or a season, we can schedule a detail at your villa or rental property." },
  { q: "What's the best auto detailing service on Hilton Head Island?", a: "GAutoDetailing is consistently rated 4.9 stars by Hilton Head clients. We bring professional-grade products, proven techniques, and genuine attention to detail directly to your property." },
  { q: "Do you offer ceramic coating on Hilton Head Island?", a: "Yes — our ceramic spray protection is especially popular on Hilton Head, where salt air can affect paint over time. It provides hydrophobic protection, UV resistance, and lasting shine for 3–6 months." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GAutoDetailing — Hilton Head Island, SC",
  description: "Luxury mobile auto detailing serving Hilton Head Island, SC.",
  url: `${BUSINESS.baseUrl}/service-areas/hilton-head`,
  telephone: BUSINESS.phone,
  areaServed: {
    "@type": "City",
    name: "Hilton Head Island",
    containedIn: { "@type": "State", name: "South Carolina" },
  },
};

export default function HiltonHeadPage() {
  const featuredServices = SERVICES.filter((s) =>
    ["luxury-vehicle", "ceramic-spray", "full-detail", "deluxe-detail", "paint-sealant", "exterior-detail"].includes(s.id)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.15),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />)}
          </div>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Hilton Head Island, South Carolina
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Luxury Mobile Detailing{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Hilton Head Island
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            The Lowcountry&apos;s finest mobile auto detailing service — now serving
            all of Hilton Head Island. From Sea Pines to Port Royal, we deliver
            white-glove results directly to your plantation, villa, or resort.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-black font-bold hover:shadow-gold hover:scale-105 transition-all">
              Book on Hilton Head <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Hilton Head&apos;s Premier Mobile Detailer
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hilton Head Island is home to some of the most beautiful
                  vehicles in South Carolina — and they deserve care that matches
                  their quality. GAutoDetailing brings luxury-level mobile
                  detailing to every corner of Hilton Head Island.
                </p>
                <p>
                  Whether you&apos;re a full-time resident in Sea Pines or a seasonal
                  visitor enjoying the Palmetto Dunes lifestyle, we&apos;re available
                  to detail your vehicle at your property. We work efficiently
                  and quietly — ideal for plantation communities and vacation
                  properties.
                </p>
                <p>
                  Our ceramic spray protection is especially popular on Hilton
                  Head, where salt air and UV exposure can take a toll on paint.
                  Protect your investment with a professional hydrophobic
                  coating that lasts months.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Hilton Head Communities We Serve</h3>
              <div className="space-y-2">
                {area.neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-3 p-3 rounded-xl border border-white/8 bg-white/3">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-sm text-white/80 font-medium">{n}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                {area.zipCodes.map((z) => (
                  <span key={z} className="px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 font-mono text-sm border border-gold-500/20">{z}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#060608]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Services Available on Hilton Head Island</h2>
          <p className="text-muted-foreground mb-8">All services delivered at your Hilton Head location.</p>
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
          <h2 className="text-2xl font-bold text-white mb-8">Auto Detailing Hilton Head Island — FAQs</h2>
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
