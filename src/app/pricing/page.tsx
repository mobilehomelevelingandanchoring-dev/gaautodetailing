import type { Metadata } from "next";
import { CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTASection } from "@/components/home/CTASection";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PRICING_PACKAGES, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing | Mobile Auto Detailing Packages — GAutoDetailing",
  description:
    "Transparent pricing for professional mobile auto detailing. From $59 express details to $499+ ultimate packages. GAutoDetailing serves Hardeeville, Bluffton, Hilton Head & Beaufort, SC.",
  alternates: { canonical: `${BUSINESS.baseUrl}/pricing` },
};

const ADD_ONS = [
  { name: "Pet Hair Removal", price: "From $30" },
  { name: "Odor / Ozone Treatment", price: "From $50" },
  { name: "Engine Bay Cleaning", price: "From $49" },
  { name: "Ceramic Spray Protection", price: "From $99" },
  { name: "Clay Bar Treatment", price: "From $49" },
  { name: "Hot Water Extraction (Upgrade)", price: "From $40" },
  { name: "Leather Conditioning", price: "From $39" },
  { name: "Headliner Cleaning", price: "From $49" },
  { name: "Trunk Detailing", price: "From $35" },
  { name: "Glass Polishing", price: "From $59" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Simple,{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Honest Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            No hidden fees. No surprises. Just premium mobile detailing at fair
            prices — with results that speak for themselves.
          </p>
          <p className="text-sm text-white/50">
            * Final price may vary based on vehicle condition and size. We provide exact quotes before starting.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 bg-[#0A0A0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Packages"
            title="Choose Your"
            titleGold="Detailing Package"
            description="Every package is delivered mobile — we come to your home, office, or preferred location."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
            {PRICING_PACKAGES.map((pkg, i) => (
              <PricingCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-white/8 bg-white/3 text-center">
            <p className="text-sm text-muted-foreground">
              Need a custom quote for a fleet, specialty vehicle, or unique service?{" "}
              <Link href="/contact" className="text-gold-400 hover:underline font-medium">
                Contact us directly
              </Link>{" "}
              or call{" "}
              <a href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`} className="text-gold-400 hover:underline font-medium">
                {BUSINESS.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 md:py-28 bg-[#060608]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Add-On Services"
            title="Customize Your"
            titleGold="Detail"
            description="Enhance any package with targeted add-on services for a fully personalized experience."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ADD_ONS.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between p-4 rounded-xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="text-sm font-medium text-white">{addon.name}</span>
                </div>
                <span className="text-sm font-bold text-gold-400 shrink-0">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Size Note */}
      <section className="py-12 bg-[#0A0A0E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl border border-white/8 bg-white/3">
            <h3 className="text-xl font-bold text-white mb-4">Pricing by Vehicle Size</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 rounded-xl bg-white/5">
                <p className="text-sm font-bold text-white mb-1">Small</p>
                <p className="text-xs text-muted-foreground">Compact, Sedan, Coupe</p>
                <p className="text-sm text-gold-400 font-semibold mt-2">Base Price</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <p className="text-sm font-bold text-white mb-1">Medium</p>
                <p className="text-xs text-muted-foreground">Midsize SUV, Crossover</p>
                <p className="text-sm text-gold-400 font-semibold mt-2">+$30–$50</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <p className="text-sm font-bold text-white mb-1">Large</p>
                <p className="text-xs text-muted-foreground">Truck, Full-size SUV, Van</p>
                <p className="text-sm text-gold-400 font-semibold mt-2">+$50–$100</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Pricing for luxury, exotic, and heavily soiled vehicles is determined on a case-by-case basis.{" "}
              <Link href="/contact" className="text-gold-400 hover:underline">Get a free quote.</Link>
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
