import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CTASection } from "@/components/home/CTASection";
import { FAQS, BUSINESS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "FAQ | Mobile Auto Detailing Questions — GAutoDetailing",
  description:
    "Answers to all your mobile auto detailing questions. Pricing, booking, services, what's included, service areas, and more. GAutoDetailing serves Hardeeville, Bluffton, Hilton Head & Beaufort, SC.",
  alternates: { canonical: `${BUSINESS.baseUrl}/faq` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const categories = [...new Set(FAQS.map((f) => f.category))];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Got{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Questions?
            </span>{" "}
            We&apos;ve Got Answers.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about GAutoDetailing&apos;s professional
            mobile auto detailing service.
          </p>
        </div>
      </section>

      {/* FAQ by Category */}
      <section className="py-20 md:py-28 bg-[#0A0A0E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const categoryFaqs = FAQS.filter((f) => f.category === category);
            return (
              <div key={category} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-lg font-bold text-white">{category}</h2>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/8 text-muted-foreground border border-white/10">
                    {categoryFaqs.length} questions
                  </span>
                  <div className="flex-1 h-px bg-white/8" />
                </div>
                <Accordion type="single" collapsible>
                  {categoryFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`${category}-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}

          {/* Contact CTA */}
          <div className="mt-8 p-8 rounded-2xl border border-white/8 bg-white/3 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We&apos;re happy to help. Reach out directly and we&apos;ll get back to you quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-black font-bold hover:shadow-gold hover:scale-105 transition-all"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
