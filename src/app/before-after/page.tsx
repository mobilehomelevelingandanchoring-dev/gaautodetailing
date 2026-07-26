import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Before & After | Auto Detailing Transformations — GAutoDetailing",
  description:
    "See dramatic before and after transformations from GAutoDetailing's professional mobile auto detailing services. Real results from Hardeeville, Bluffton, Hilton Head, and Beaufort, SC.",
  alternates: { canonical: `${BUSINESS.baseUrl}/before-after` },
};

const TRANSFORMATIONS = [
  { id: 1, title: "Interior Deep Clean", description: "Heavy pet hair, stains, and odor eliminated. Seats, carpet, and dashboard restored to near-new condition.", service: "Premium Package", vehicle: "2018 Honda Pilot" },
  { id: 2, title: "Exterior Paint Revival", description: "Clay bar treatment, paint decontamination, and ceramic spray coating — paint transformed from dull to mirror-like.", service: "Deluxe Package", vehicle: "2021 BMW 3 Series" },
  { id: 3, title: "Leather Restoration", description: "Cracked, faded leather cleaned, conditioned, and restored. Color revived, cracks treated.", service: "Full Detail", vehicle: "2019 Mercedes-Benz C300" },
  { id: 4, title: "Complete Truck Detail", description: "Cab interior deep cleaned, bed pressure washed, wheels decontaminated. Like a new truck.", service: "Deluxe Package", vehicle: "2020 Ford F-150" },
  { id: 5, title: "Smoke Odor Elimination", description: "Heavy cigarette smoke odor fully eliminated with ozone treatment and steam cleaning.", service: "Interior Detail + Odor Treatment", vehicle: "2017 Chevrolet Equinox" },
  { id: 6, title: "Wheel & Engine Transformation", description: "Heavily corroded wheels decontaminated, polished, and sealed. Engine bay degreased and dressed.", service: "Complete Detail", vehicle: "2022 Toyota Tundra" },
];

export default function BeforeAfterPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            Transformations
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              GAutoDetailing
            </span>{" "}
            Transformation
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Words don&apos;t do justice. See the stunning difference our
            professional mobile detailing makes on real vehicles.
          </p>
        </div>
      </section>

      {/* Transformations */}
      <section className="py-20 md:py-28 bg-[#0A0A0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {TRANSFORMATIONS.map((item, i) => (
              <div
                key={item.id}
                className="p-6 md:p-8 rounded-2xl border border-white/8 bg-white/3"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Before / After side by side */}
                  <div className="flex-1 grid grid-cols-2 gap-3">
                    {/* Before */}
                    <div className="rounded-xl overflow-hidden border border-red-500/20">
                      <div
                        className="aspect-video flex flex-col items-center justify-center gap-2"
                        style={{ background: `linear-gradient(135deg, hsl(${i * 60},20%,8%), hsl(${i * 60},15%,12%))` }}
                      >
                        <p className="text-red-400/50 text-xs font-bold uppercase tracking-wider">Before</p>
                        <p className="text-white/20 text-xs">Photo placeholder</p>
                      </div>
                      <div className="py-1.5 px-3 bg-red-500/10 border-t border-red-500/20">
                        <p className="text-xs font-bold text-red-400 uppercase tracking-wider">Before</p>
                      </div>
                    </div>

                    {/* After */}
                    <div className="rounded-xl overflow-hidden border border-green-500/20">
                      <div
                        className="aspect-video flex flex-col items-center justify-center gap-2"
                        style={{ background: `linear-gradient(135deg, hsl(${i * 60},30%,12%), hsl(${i * 60},40%,18%))` }}
                      >
                        <p className="text-green-400/50 text-xs font-bold uppercase tracking-wider">After</p>
                        <p className="text-white/20 text-xs">Photo placeholder</p>
                      </div>
                      <div className="py-1.5 px-3 bg-green-500/10 border-t border-green-500/20">
                        <p className="text-xs font-bold text-green-400 uppercase tracking-wider">After</p>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:w-80 shrink-0 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {item.description}
                    </p>
                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-16">Service</span>
                        <span className="text-xs font-semibold text-gold-400">{item.service}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-16">Vehicle</span>
                        <span className="text-xs font-semibold text-white">{item.vehicle}</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Book This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
