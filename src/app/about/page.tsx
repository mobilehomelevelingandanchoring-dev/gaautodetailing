import type { Metadata } from "next";
import { CheckCircle2, Heart, Star, Shield, Zap, Award } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CTASection } from "@/components/home/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About GAutoDetailing | Mobile Auto Detailing Experts in SC",
  description:
    "Learn about GAutoDetailing — the Lowcountry's premier mobile auto detailing service. Our story, mission, values, and the professional process we use to transform vehicles in Hardeeville, Bluffton, Hilton Head, and Beaufort, SC.",
  alternates: { canonical: `${BUSINESS.baseUrl}/about` },
};

const VALUES = [
  { icon: Star, title: "Excellence", desc: "We pursue perfection on every vehicle — no shortcuts, no rushing, no compromises." },
  { icon: Heart, title: "Passion", desc: "We genuinely love what we do. That passion shows in every detail of every job." },
  { icon: Shield, title: "Integrity", desc: "Transparent pricing, honest communication, and reliable service every time." },
  { icon: Zap, title: "Convenience", desc: "We eliminate the hassle of traditional detailing by coming directly to you." },
  { icon: CheckCircle2, title: "Quality", desc: "Professional-grade products and techniques that deliver lasting, remarkable results." },
  { icon: Award, title: "Commitment", desc: "We're not done until you're completely satisfied. Your happiness is our success." },
];

const PROCESS_STEPS = [
  { step: "01", title: "Book Online", desc: "Fill out our quick booking form or call us directly. Tell us about your vehicle and desired services." },
  { step: "02", title: "We Confirm", desc: "We review your request and confirm your appointment within hours, providing a detailed quote." },
  { step: "03", title: "We Arrive", desc: "Our professional arrives at your location on time with all equipment, products, and supplies." },
  { step: "04", title: "Transformation", desc: "We meticulously detail your vehicle using professional-grade products and proven techniques." },
  { step: "05", title: "Final Inspection", desc: "We walk you through the results, ensuring every detail meets our standards and yours." },
  { step: "06", title: "Enjoy the Shine", desc: "Drive away with a showroom-clean vehicle — or simply walk back outside if you're home." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Passionate About{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Your Vehicle
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            GAutoDetailing was founded with a simple mission: deliver
            professional, luxury-level auto detailing with the convenience of
            coming directly to you.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-[#0A0A0E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-400 border border-gold-500/20">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built on a Love for{" "}
                <span className="bg-gold-gradient bg-clip-text text-transparent">
                  Pristine Vehicles
                </span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GAutoDetailing was born from a genuine passion for vehicles
                  and the satisfaction of seeing a car transformed from dull to
                  dazzling. Irwinsito started detailing because he believed that
                  everyone deserves a clean, well-maintained vehicle — without
                  the hassle of driving somewhere and waiting.
                </p>
                <p>
                  Serving the South Carolina Lowcountry, we&apos;ve built our
                  reputation one vehicle at a time — through meticulous
                  attention to detail, premium products, and an unwavering
                  commitment to customer satisfaction.
                </p>
                <p>
                  Today, GAutoDetailing serves Hardeeville, Bluffton, Hilton
                  Head Island, and Beaufort — bringing showroom-quality results
                  directly to homes, offices, and businesses across the
                  Lowcountry.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Vehicles Detailed" },
                { value: "4.9★", label: "Average Rating" },
                { value: "4", label: "Cities Served" },
                { value: "100%", label: "Mobile Service" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-6 rounded-2xl border border-white/8 bg-white/3 text-center"
                >
                  <div className="text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-2">
                    {s.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-[#060608]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-gold-500/20 bg-gold-500/5">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide the highest-quality mobile auto detailing experience
                in the South Carolina Lowcountry — delivering professional,
                showroom-level results with the convenience of coming directly
                to our customers, using only premium products and proven
                techniques.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/8 bg-white/3">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and respected auto detailing service in
                the Lowcountry — known for our professionalism, quality, and
                the genuine care we put into every vehicle we touch. We aim to
                make pristine, well-maintained vehicles accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#0A0A0E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Values"
            title="The Principles That"
            titleGold="Guide Everything We Do"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <v.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-[#060608]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Process"
            title="How We"
            titleGold="Transform Your Vehicle"
            description="A professional, streamlined process designed to deliver maximum results with minimum hassle for you."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 transition-all"
              >
                <div className="text-5xl font-black text-white/5 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-gold-400">{step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
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
