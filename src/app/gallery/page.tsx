import type { Metadata } from "next";
import Link from "next/link";
import { Camera, ArrowRight, Instagram } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery | Auto Detailing Results — GAutoDetailing",
  description:
    "View the stunning results of GAutoDetailing's professional mobile auto detailing services. Before and after photos from real vehicles in Hardeeville, Bluffton, Hilton Head, and Beaufort, SC.",
  alternates: { canonical: `${BUSINESS.baseUrl}/gallery` },
};

const GALLERY_ITEMS = [
  { id: 1, title: "Full Interior Detail", category: "Interior", vehicle: "2021 BMW 5 Series", location: "Bluffton, SC" },
  { id: 2, title: "Exterior Hand Wash + Ceramic Spray", category: "Exterior", vehicle: "2023 Mercedes-Benz GLE", location: "Hilton Head, SC" },
  { id: 3, title: "Complete Detail", category: "Full Detail", vehicle: "2019 Ford F-150", location: "Hardeeville, SC" },
  { id: 4, title: "Leather Cleaning & Conditioning", category: "Interior", vehicle: "2022 Audi Q7", location: "Beaufort, SC" },
  { id: 5, title: "Deluxe Package", category: "Full Detail", vehicle: "2020 Chevrolet Suburban", location: "Bluffton, SC" },
  { id: 6, title: "Paint Decontamination + Sealant", category: "Exterior", vehicle: "2021 Porsche Cayenne", location: "Hilton Head, SC" },
  { id: 7, title: "Pet Hair Removal + Deep Clean", category: "Interior", vehicle: "2018 Honda Pilot", location: "Beaufort, SC" },
  { id: 8, title: "Engine Bay Detail", category: "Specialty", vehicle: "2022 Toyota Tundra", location: "Hardeeville, SC" },
  { id: 9, title: "Wheel & Tire Full Treatment", category: "Exterior", vehicle: "2023 Dodge Charger", location: "Bluffton, SC" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Interior: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Exterior: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Full Detail": "bg-gold-500/20 text-gold-400 border-gold-500/30",
  Specialty: "bg-green-500/20 text-green-400 border-green-500/30",
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <Camera className="w-3.5 h-3.5" />
            Our Work
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Results That{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Speak for Themselves
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Real vehicles, real results. See the difference professional mobile
            detailing makes across the South Carolina Lowcountry.
          </p>
          <Link
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 text-white font-semibold hover:scale-105 transition-transform"
          >
            <Instagram className="w-4 h-4" />
            Follow us on Instagram for more photos
          </Link>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-28 bg-[#0A0A0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {GALLERY_ITEMS.map((item) => {
              const colors = GALLERY_ITEMS.length;
              const hue = (item.id * 47) % 360;
              return (
                <div
                  key={item.id}
                  className="break-inside-avoid rounded-2xl overflow-hidden border border-white/8 group relative"
                >
                  {/* Placeholder image with gradient */}
                  <div
                    className="w-full aspect-[4/3] relative"
                    style={{
                      background: `linear-gradient(135deg, hsl(${hue},20%,10%) 0%, hsl(${hue},30%,15%) 100%)`,
                    }}
                  >
                    {/* Placeholder shimmer */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <Camera className="w-10 h-10 text-white/20" />
                      <p className="text-xs text-white/30 font-medium">Photo Coming Soon</p>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center px-6">
                        <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                        <p className="text-white/70 text-sm">{item.vehicle}</p>
                        <p className="text-white/50 text-xs mt-1">{item.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="p-4 bg-white/3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.vehicle}</p>
                      </div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[item.category] || "bg-white/10 text-white/60 border-white/20"}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Instagram CTA */}
          <div className="mt-16 text-center p-8 rounded-2xl border border-white/8 bg-white/3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              See More of Our Work
            </h3>
            <p className="text-muted-foreground mb-6">
              Follow us on Instagram for regular before & after photos, tips, and updates.
            </p>
            <Link
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 text-white font-bold hover:scale-105 transition-transform"
            >
              <Instagram className="w-4 h-4" />
              {BUSINESS.instagramHandle}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
