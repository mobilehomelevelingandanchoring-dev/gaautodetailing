import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";
import { TESTIMONIALS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Customer Reviews | 5-Star Auto Detailing — GAutoDetailing",
  description:
    "Read what customers are saying about GAutoDetailing's professional mobile auto detailing service. 4.9-star rated across Hardeeville, Bluffton, Hilton Head, and Beaufort, SC.",
  alternates: { canonical: `${BUSINESS.baseUrl}/reviews` },
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GAutoDetailing",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
    bestRating: "5",
  },
  review: TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
    reviewBody: t.text,
    datePublished: t.date,
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-gold-500 text-gold-500" />
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            4.9 Stars Across{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              100+ Reviews
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what our customers say
            about GAutoDetailing&apos;s mobile detailing service.
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-[#0A0A0E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "4.9", label: "Average Rating" },
              { value: "100+", label: "Happy Customers" },
              { value: "98%", label: "5-Star Reviews" },
              { value: "0", label: "Complaints" },
            ].map((s) => (
              <div key={s.label} className="text-center p-5 rounded-2xl border border-white/8 bg-white/3">
                <div className="text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-1">
                  {s.value}
                </div>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-24 bg-[#060608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="flex flex-col p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-gold-500/25 mb-3" />
                <p className="text-sm text-white/80 leading-relaxed mb-5 flex-1 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-black text-sm font-bold shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-gold-400 font-medium">{review.service}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Share review CTA */}
          <div className="mt-12 p-8 rounded-2xl border border-gold-500/20 bg-gold-500/5 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Had a great experience?
            </h3>
            <p className="text-muted-foreground mb-5">
              We&apos;d love to hear from you! Share your experience and help others find quality mobile detailing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-black font-bold hover:shadow-gold hover:scale-105 transition-all"
            >
              Book Your Detail Today <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
