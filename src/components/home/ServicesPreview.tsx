"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Car,
  Star,
  Zap,
  Shield,
  Sparkles,
  Truck,
  Circle,
  Wind,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  Car,
  Star,
  Zap,
  Shield,
  Sparkles,
  Truck,
  Circle,
  Wind,
};

const FEATURED_SERVICES = [
  {
    id: "full-detail",
    name: "Full Detail",
    description: "Complete inside & out — the ultimate clean for your vehicle.",
    duration: "3–5 hrs",
    price: "From $199",
    icon: "Star",
    popular: true,
    features: ["Exterior hand wash", "Interior deep clean", "Paint protection", "Window cleaning"],
    gradient: "from-gold-600/20 to-gold-500/5",
    border: "border-gold-500/30",
    glow: "shadow-gold",
  },
  {
    id: "ceramic-spray",
    name: "Ceramic Spray Protection",
    description: "Hydrophobic ceramic protection for lasting shine and easy cleaning.",
    duration: "1 hr",
    price: "From $99",
    icon: "Shield",
    popular: false,
    features: ["6-month protection", "Hydrophobic coating", "UV protection", "Mirror shine"],
    gradient: "from-blue-600/15 to-blue-500/5",
    border: "border-blue-500/20",
    glow: "",
  },
  {
    id: "interior-detail",
    name: "Interior Detail",
    description: "Deep clean, steam, and condition every inch of your interior.",
    duration: "2–3 hrs",
    price: "From $99",
    icon: "Sparkles",
    popular: false,
    features: ["Steam cleaning", "Leather conditioning", "Odor removal", "Stain treatment"],
    gradient: "from-purple-600/15 to-purple-500/5",
    border: "border-purple-500/20",
    glow: "",
  },
  {
    id: "express-detail",
    name: "Express Detail",
    description: "Quick, effective refresh — back on the road looking great fast.",
    duration: "45–60 min",
    price: "From $59",
    icon: "Zap",
    popular: false,
    features: ["Exterior wash", "Interior vacuum", "Window cleaning", "Tire dressing"],
    gradient: "from-green-600/15 to-green-500/5",
    border: "border-green-500/20",
    glow: "",
  },
  {
    id: "luxury-vehicle",
    name: "Luxury Vehicle Detailing",
    description: "White-glove care tailored for exotic and high-value vehicles.",
    duration: "5–8 hrs",
    price: "From $399",
    icon: "Car",
    popular: false,
    features: ["Premium products only", "White-glove service", "Paint protection", "Concierge booking"],
    gradient: "from-amber-600/15 to-amber-500/5",
    border: "border-amber-500/20",
    glow: "",
  },
  {
    id: "pet-hair-removal",
    name: "Pet Hair Removal",
    description: "Specialist extraction tools that remove embedded pet hair completely.",
    duration: "1–2 hrs",
    price: "From $59",
    icon: "Wind",
    popular: false,
    features: ["Rubber brush tools", "All surfaces", "Vacuum extraction", "Deodorizing"],
    gradient: "from-teal-600/15 to-teal-500/5",
    border: "border-teal-500/20",
    glow: "",
  },
];

export function ServicesPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-[#060608]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_50%,rgba(201,168,76,0.04),transparent)]" />

      <div ref={ref} className="container-wide relative z-10">
        <SectionHeader
          badge="Services"
          title="Premium Detailing"
          titleGold="For Every Vehicle"
          description="From quick express washes to complete concierge details — we offer the full spectrum of professional auto detailing services."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {FEATURED_SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Car;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className={`relative h-full rounded-2xl p-6 border backdrop-blur-sm
                             bg-gradient-to-br ${service.gradient} ${service.border}
                             hover:scale-[1.02] hover:${service.glow}
                             transition-all duration-300 group cursor-pointer`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-6">
                      <Badge variant="gold" className="text-xs">Most Popular</Badge>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center
                                    group-hover:bg-gold-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{service.duration}</p>
                      <p className="text-sm font-bold text-gold-400">{service.price}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors group/link"
                  >
                    Book This Service
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/15
                       text-white font-semibold hover:bg-white/8 hover:border-white/30 transition-all duration-300"
          >
            View All 50+ Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
