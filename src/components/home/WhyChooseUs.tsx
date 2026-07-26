"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Shield,
  Clock,
  Sparkles,
  Star,
  Award,
  Zap,
  HeartHandshake,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";

const FEATURES = [
  {
    icon: MapPin,
    title: "100% Mobile Service",
    description: "We come to your home, office, or wherever your vehicle is located. No drop-offs, no waiting rooms — maximum convenience.",
    color: "text-gold-400",
    bg: "bg-gold-500/10",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Professional liability insurance means your vehicle is fully protected while in our care. Worry-free service, every time.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Sparkles,
    title: "Premium Products Only",
    description: "We exclusively use professional-grade, pH-balanced products. No cheap consumer-grade soaps that strip wax or damage paint.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Clock,
    title: "Fast Response & Booking",
    description: "Contact us and get a response within hours. We offer same-week appointments and flexible scheduling around your life.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Star,
    title: "4.9-Star Rated Service",
    description: "Our customers consistently rate us 5 stars. Customer satisfaction isn't a goal — it's our standard.",
    color: "text-gold-400",
    bg: "bg-gold-500/10",
  },
  {
    icon: Award,
    title: "Experienced Professional",
    description: "Irwinsito brings years of professional detailing experience and passion to every vehicle. No shortcuts, no rushing.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: Zap,
    title: "All-In-One Solution",
    description: "From a basic wash to a complete concierge detail, ceramic coating to pet hair removal — everything in one place.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Satisfaction Guaranteed",
    description: "We don't leave until you're completely happy. Our commitment is to results that exceed your expectations, every visit.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0E]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(201,168,76,0.05),transparent)]" />

      <div ref={ref} className="container-wide relative z-10">
        <SectionHeader
          badge="Why GAutoDetailing"
          title="The"
          titleGold="Premium Difference"
          description="Not all detailers are equal. Here's what sets GAutoDetailing apart from the rest."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="h-full p-6 rounded-2xl border border-white/8 bg-white/3
                              hover:bg-white/6 hover:border-white/15 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4
                                 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
