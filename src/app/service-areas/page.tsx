import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { SERVICE_AREAS, BUSINESS } from "@/lib/constants";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Service Areas | Mobile Auto Detailing in SC Lowcountry — GAutoDetailing",
  description:
    "GAutoDetailing serves Hardeeville, Bluffton, Hilton Head Island, and Beaufort, SC with professional mobile auto detailing. We travel to you — no drop-offs required.",
  alternates: { canonical: `${BUSINESS.baseUrl}/service-areas` },
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Coverage Area
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We Serve the{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              SC Lowcountry
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            GAutoDetailing brings professional mobile auto detailing directly to
            your location across the entire South Carolina Lowcountry.
          </p>
        </div>
      </section>

      {/* Service Areas Cards */}
      <section className="py-20 md:py-28 bg-[#0A0A0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Locations"
            title="All Areas"
            titleGold="We Serve"
            description="Click any area to see local SEO content, specific neighborhoods, and services available near you."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group block p-8 rounded-2xl border border-white/8 bg-white/3
                           hover:bg-gold-500/8 hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <MapPin className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
                        {area.name}
                      </h2>
                      <p className="text-sm text-gold-500/70 font-medium">{area.state}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {area.longDescription}
                </p>

                <div className="mb-5">
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Neighborhoods Served
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.neighborhoods.map((n) => (
                      <span key={n} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Zip Codes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.zipCodes.map((z) => (
                      <span key={z} className="text-xs px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 font-mono">
                        {z}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Info */}
      <section className="py-16 bg-[#060608]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl border border-gold-500/20 bg-gold-500/5 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don&apos;t See Your Area?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-lg mx-auto">
              Our service area is continually expanding. If you&apos;re just
              outside our typical coverage, reach out — we&apos;re often able to
              accommodate requests with a small travel fee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-black font-bold hover:shadow-gold hover:scale-105 transition-all"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
