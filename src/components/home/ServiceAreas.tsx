"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0E]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(201,168,76,0.04),transparent)]" />

      <div ref={ref} className="container-wide relative z-10">
        <SectionHeader
          badge="Coverage"
          title="We Serve the Entire"
          titleGold="SC Lowcountry"
          description="Hardeeville, Bluffton, Hilton Head, and Beaufort — we travel to you, wherever you are."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICE_AREAS.map((area, i) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/service-areas/${area.slug}`}>
                <div className="group h-full p-6 rounded-2xl border border-white/8 bg-white/3
                                hover:bg-gold-500/8 hover:border-gold-500/30 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4
                                  group-hover:bg-gold-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-gold-500/70 font-medium mb-3">
                    {area.state}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {area.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Neighborhoods served:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.neighborhoods.slice(0, 3).map((n) => (
                        <span key={n} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/8">
                          {n}
                        </span>
                      ))}
                      {area.neighborhoods.length > 3 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/8">
                          +{area.neighborhoods.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="flex items-center gap-1 text-xs font-semibold text-gold-400 group-hover:gap-2 transition-all">
                    View Services in {area.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
