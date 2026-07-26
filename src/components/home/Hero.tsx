"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Instagram,
  CheckCircle2,
  MapPin,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

const TRUST_ITEMS = [
  "100% Mobile Service",
  "Professional Equipment",
  "Premium Products",
  "Satisfaction Guaranteed",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060608]"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-10%,rgba(201,168,76,0.18),transparent_60%)]" />
        {/* Secondary side glows */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column — Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full
                         bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium"
            >
              <MapPin className="w-3.5 h-3.5" />
              Hardeeville · Bluffton · Hilton Head · Beaufort
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
            >
              Your Car,{" "}
              <span className="block">
                <span className="bg-gold-gradient bg-clip-text text-transparent">
                  Perfected.
                </span>
              </span>
              <span className="block text-white/90">At Your Door.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Premium mobile auto detailing that comes to you. Professional
              results, luxury products, and zero effort on your part — all
              across the South Carolina Lowcountry.
            </motion.p>

            {/* Trust Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-10 justify-center lg:justify-start"
            >
              {TRUST_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-white/70"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link href="/contact">
                <Button size="xl" className="group shadow-gold">
                  Book Your Detail
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}>
                <Button variant="outline" size="xl">
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </Button>
              </Link>
              <Link
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="glass" size="xl">
                  <Instagram className="w-4 h-4" />
                  Instagram
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column — Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 w-full max-w-sm lg:max-w-md"
          >
            {/* Glassmorphism Card */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gold-gradient rounded-3xl blur-3xl opacity-20 scale-110" />

              <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-glass">
                {/* Rating Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-white">4.9</span>
                </div>

                {/* Service Highlights */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: "Mobile Service", sub: "We come to you", icon: "🚗" },
                    { label: "Premium Products", sub: "Pro-grade only", icon: "✨" },
                    { label: "Certified Detailer", sub: "Experienced & insured", icon: "🏆" },
                    { label: "Fast Booking", sub: "Same-week available", icon: "📅" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA in card */}
                <Link href="/contact">
                  <button className="w-full py-3.5 rounded-2xl bg-gold-gradient text-black font-bold text-sm
                                     hover:shadow-gold hover:scale-[1.02] transition-all duration-300">
                    Get a Free Quote →
                  </button>
                </Link>

                {/* Service areas pill */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-muted-foreground">
                    Serving Hardeeville · Bluffton · Hilton Head · Beaufort
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
