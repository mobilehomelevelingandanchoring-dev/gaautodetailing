import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTASection } from "@/components/home/CTASection";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";
import { BUSINESS } from "@/lib/constants";
import type { ServiceCategory } from "@/types";

export const metadata: Metadata = {
  title: "Auto Detailing Services | Mobile Car Detailing in SC Lowcountry",
  description:
    "Browse GAutoDetailing's complete list of professional mobile auto detailing services — exterior, interior, paint protection, ceramic spray, steam cleaning, pet hair removal, and much more. Serving Hardeeville, Bluffton, Hilton Head & Beaufort, SC.",
  alternates: { canonical: `${BUSINESS.baseUrl}/services` },
  keywords: [
    "auto detailing services",
    "mobile car detailing",
    "interior detailing",
    "exterior detailing",
    "ceramic spray coating",
    "paint sealant",
    "steam cleaning",
    "pet hair removal",
    "leather conditioning",
    "wheel cleaning",
  ],
};

const ICON_COLORS: Record<ServiceCategory, string> = {
  packages: "text-gold-400 bg-gold-500/10",
  exterior: "text-blue-400 bg-blue-500/10",
  interior: "text-purple-400 bg-purple-500/10",
  "wheel-tire": "text-green-400 bg-green-500/10",
  protection: "text-cyan-400 bg-cyan-500/10",
  specialty: "text-rose-400 bg-rose-500/10",
  "add-ons": "text-amber-400 bg-amber-500/10",
};

export default function ServicesPage() {
  const grouped = SERVICE_CATEGORIES.map((cat) => ({
    ...cat,
    services: SERVICES.filter((s) => s.category === cat.id),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            50+ Professional Services
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Every Service Your{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Vehicle Deserves
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From quick express washes to complete white-glove details — we
            offer the full spectrum of professional auto detailing, all delivered
            mobile to your location.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <div className="sticky top-16 md:top-20 z-40 bg-black/80 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto no-scrollbar py-3">
            {SERVICE_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 px-4 py-1.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/8 transition-all whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services by Category */}
      {grouped.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className="py-16 md:py-20 odd:bg-[#060608] even:bg-[#0A0A0E]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {cat.label}
              </h2>
              <div className="h-0.5 w-16 bg-gold-gradient rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.services.map((service) => {
                const colorClass = ICON_COLORS[service.category] || ICON_COLORS.packages;
                return (
                  <div
                    key={service.id}
                    className={`relative p-6 rounded-2xl border transition-all duration-300 group
                               ${service.popular
                                 ? "border-gold-500/30 bg-gradient-to-br from-gold-500/8 to-transparent"
                                 : "border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15"
                               }`}
                  >
                    {service.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30">
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${colorClass}`}>
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">{service.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{service.duration}</span>
                          {service.price && (
                            <>
                              <span className="text-muted-foreground/40">·</span>
                              <span className="text-xs font-semibold text-gold-400">{service.price}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-white/70">
                          <span className="w-1 h-1 rounded-full bg-gold-500/70 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Book This Service <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
