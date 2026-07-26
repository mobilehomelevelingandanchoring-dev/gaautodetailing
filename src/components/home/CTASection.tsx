"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Phone, Calendar, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const BENEFITS = [
  "We come to your location",
  "Same-week appointments",
  "Premium products only",
  "100% satisfaction guarantee",
];

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0E]" />

      {/* Large background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,rgba(201,168,76,0.08),transparent_60%)]" />

      <div ref={ref} className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-gold-500/20 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent
                     p-10 md:p-16 overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2
                          bg-gold-500/10 blur-3xl rounded-full" />

          <div className="relative text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full
                         bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              Ready to book? We&apos;re available now
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            >
              Transform Your Vehicle{" "}
              <span className="bg-gold-gradient bg-clip-text text-transparent">
                Today
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60 mb-8 leading-relaxed"
            >
              Book online or give us a call. We&apos;ll schedule a time that
              works for you and arrive with everything needed to deliver a
              showroom-perfect result.
            </motion.p>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10"
            >
              {BENEFITS.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" />
                  {b}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                           bg-gold-gradient text-black font-bold text-base
                           hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book Your Detail Online
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                           border border-white/20 text-white font-semibold text-base
                           hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </a>

              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                           backdrop-blur-sm bg-white/5 border border-white/10 text-white font-semibold text-base
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
