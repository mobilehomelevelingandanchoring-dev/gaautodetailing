import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceAreasSection } from "@/components/home/ServiceAreas";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "GAutoDetailing | #1 Mobile Auto Detailing — Hardeeville, Bluffton, Hilton Head & Beaufort, SC",
  description:
    "South Carolina's premier mobile auto detailing service. We come to you in Hardeeville, Bluffton, Hilton Head Island, and Beaufort. Expert detailers, premium products, showroom results. Book today!",
  alternates: {
    canonical: BUSINESS.baseUrl,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreasSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
