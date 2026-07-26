"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeader } from "@/components/common/SectionHeader";

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section-padding relative overflow-hidden bg-[#060608]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,168,76,0.06),transparent)]" />

      <div ref={ref} className="container-wide relative z-10">
        <SectionHeader
          badge="Reviews"
          title="What Our Clients"
          titleGold="Are Saying"
          description="Real reviews from real customers across the South Carolina Lowcountry."
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-5">
              {TESTIMONIALS.map((review) => (
                <div
                  key={review.id}
                  className="flex-shrink-0 w-[90vw] sm:w-[420px] lg:w-[380px]"
                >
                  <div className="h-full p-6 rounded-2xl border border-white/8 bg-white/3
                                  hover:bg-white/6 hover:border-white/15 transition-all duration-300">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>

                    {/* Quote */}
                    <Quote className="w-6 h-6 text-gold-500/30 mb-3" />
                    <p className="text-sm text-white/80 leading-relaxed mb-5 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Footer */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                      <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-black text-sm font-bold shrink-0">
                        {review.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{review.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {review.service} · {review.location}
                        </p>
                      </div>
                      <span className="ml-auto text-xs text-muted-foreground shrink-0">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center
                         text-white/80 hover:bg-white/10 hover:text-white hover:border-white/25 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center
                         text-white/80 hover:bg-white/10 hover:text-white hover:border-white/25 transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Overall rating display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-8
                     rounded-2xl border border-white/8 bg-white/3"
        >
          <div className="text-center">
            <div className="text-5xl font-bold bg-gold-gradient bg-clip-text text-transparent mb-1">
              4.9
            </div>
            <div className="flex justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-1">100+</div>
            <p className="text-xs text-muted-foreground">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-1">4</div>
            <p className="text-xs text-muted-foreground">Cities Served</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
