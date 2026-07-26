import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "@/lib/constants";

const area = SERVICE_AREAS.find((a) => a.slug === "beaufort")!;

export const metadata: Metadata = {
  title: "Mobile Auto Detailing Beaufort SC | Car Detailing Beaufort",
  description:
    "Professional mobile auto detailing in Beaufort, SC. GAutoDetailing serves Beaufort's Historic District, Port Royal, Dataw Island, Lady's Island, and surrounding areas. Book your detail today!",
  keywords: area.keywords,
  alternates: { canonical: `${BUSINESS.baseUrl}/service-areas/beaufort` },
};

const localFaqs = [
  { q: "Do you provide mobile auto detailing in Beaufort, SC?", a: "Yes! GAutoDetailing serves all of Beaufort, SC including the Historic District, Port Royal, Dataw Island, Lady's Island, Mossy Oaks, and Saint Helena Island. We come to you." },
  { q: "What areas of Beaufort do you serve?", a: "We serve the entire Beaufort area including the Historic District, Port Royal, Dataw Island, Mossy Oaks, Lady's Island, Saint Helena Island, and all surrounding neighborhoods. Zip codes: 29902, 29906, 29907." },
  { q: "Can you detail my car at Dataw Island?", a: "Yes! We regularly serve gated communities like Dataw Island. Just let us know your community and gate information when booking and we'll handle the rest." },
  { q: "How do I book mobile car detailing in Beaufort, SC?", a: "Fill out our online booking form, call (843) 555-0192, or DM us on Instagram. We typically confirm Beaufort appointments within a few hours." },
  { q: "Do you offer interior detailing for military families near MCAS Beaufort?", a: "Yes! We proudly serve military families in the Beaufort area. Whether you're near MCAS Beaufort or Parris Island, we're happy to schedule service at your home or on-base housing." },
];

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GAutoDetailing — Beaufort, SC",
  description: "Professional mobile auto detailing serving Beaufort, SC.",
  url: `${BUSINESS.baseUrl}/service-areas/beaufort`,
  telephone: BUSINESS.phone,
  areaServed: {
    "@type": "City",
    name: "Beaufort",
    containedIn: { "@type": "State", name: "South Carolina" },
  },
};

export default function BeaufortPage() {
  const featuredServices = SERVICES.filter((s) =>
    ["interior-detail", "exterior-detail", "full-detail", "ceramic-spray", "pet-hair-removal", "odor-removal"].includes(s.id)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Beaufort, South Carolina
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mobile Auto Detailing{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Beaufort, SC
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            GAutoDetailing proudly serves Beaufort and the surrounding Sea
            Islands with professional mobile auto detailing. From the Historic
            District to Lady&apos;s Island and Dataw — we come to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-black font-bold hover:shadow-gold hover:scale-105 transition-all">
              Book in Beaufort <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-3xl font-bold text-white mb-4">Beaufort&apos;s Trusted Mobile Detailing Service</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Beaufort, SC is a city rich in history and Southern charm —
                  and its residents deserve auto detailing that matches their
                  pride of ownership. GAutoDetailing brings professional,
                  meticulous mobile detailing to every corner of Beaufort and
                  the surrounding Sea Islands.
                </p>
                <p>
                  We serve the Historic District, Port Royal, Dataw Island,
                  Lady&apos;s Island, Mossy Oaks, and Saint Helena Island. Whether
                  you live in one of Beaufort&apos;s beautiful historic homes or a
                  modern community near the waterway, we come to you.
                </p>
                <p>
                  Our full range of services — from interior deep cleaning to
                  ceramic spray protection — is available throughout Beaufort
                  and the greater Lowcountry.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Beaufort Communities We Serve</h3>
              <div className="space-y-2">
                {area.neighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-3 p-3 rounded-xl border border-white/8 bg-white/3">
                    <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                    <span className="text-sm text-white/80 font-medium">{n}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Auto Detailing Services in Beaufort, SC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredServices.map((s) => (
              <div key={s.id} className={`p-5 rounded-xl border transition-all ${s.popular ? "border-gold-500/30 bg-gold-500/8" : "border-white/8 bg-white/3 hover:bg-white/5"}`}>
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
          <h2 className="text-2xl font-bold text-white mb-8">Car Detailing Beaufort SC — FAQs</h2>
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
