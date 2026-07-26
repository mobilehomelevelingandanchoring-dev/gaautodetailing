"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FAQS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const CATEGORIES = ["All", "General", "Service", "Services", "Pricing", "Booking", "Protection", "Interior", "Specialty"];

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? FAQS.slice(0, 8)
    : FAQS.filter((f) => f.category === activeCategory).slice(0, 8);

  return (
    <section className="section-padding relative overflow-hidden bg-[#060608]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_50%,rgba(201,168,76,0.04),transparent)]" />

      <div ref={ref} className="container-tight relative z-10">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          titleGold="Questions"
          description="Everything you need to know about our mobile auto detailing services."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gold-500/20 text-gold-400 border border-gold-500/30"
                  : "text-muted-foreground border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible>
            {filtered.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>
                  <div className="flex items-start gap-3 text-left">
                    <Badge variant="gold" className="mt-0.5 shrink-0 text-[10px]">
                      {faq.category}
                    </Badge>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
          >
            View all {FAQS.length}+ FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
