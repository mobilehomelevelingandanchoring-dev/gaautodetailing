import type { Metadata } from "next";
import { Phone, Mail, Instagram, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Detail | Contact GAutoDetailing — Mobile Auto Detailing SC",
  description:
    "Book your professional mobile auto detailing appointment online. GAutoDetailing serves Hardeeville, Bluffton, Hilton Head Island, and Beaufort, SC. Fast response, flexible scheduling.",
  alternates: { canonical: `${BUSINESS.baseUrl}/contact` },
};

const CONTACT_INFO = [
  { icon: Phone, label: "Phone / Text", value: BUSINESS.phone, href: `tel:${BUSINESS.phone.replace(/\D/g, "")}` },
  { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: Instagram, label: "Instagram", value: BUSINESS.instagramHandle, href: BUSINESS.instagram },
  { icon: MapPin, label: "Service Area", value: "Hardeeville, Bluffton, Hilton Head & Beaufort, SC", href: "/service-areas" },
];

const HOURS = [
  { day: "Monday – Friday", hours: "7:00 AM – 7:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "By Appointment" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[#060608]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            Available for Bookings
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Book Your{" "}
            <span className="bg-gold-gradient bg-clip-text text-transparent">
              Detail Today
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Fill out the form below or contact us directly. We respond within
            hours and offer same-week appointments.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-[#0A0A0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Left — Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We&apos;re always available to answer questions, provide quotes,
                  or schedule your next detail.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3">
                {CONTACT_INFO.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Instagram" ? "_blank" : undefined}
                    rel={item.label === "Instagram" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/3
                               hover:bg-white/6 hover:border-white/15 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                      <item.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="p-5 rounded-xl border border-white/8 bg-white/3">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <h3 className="text-sm font-bold text-white">Hours of Operation</h3>
                </div>
                <div className="space-y-2.5">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="text-white font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="p-5 rounded-xl border border-gold-500/15 bg-gold-500/5">
                <h3 className="text-sm font-bold text-white mb-3">What Happens After You Submit?</h3>
                <div className="space-y-2">
                  {[
                    "We review your request within 2–4 hours",
                    "We confirm availability and pricing",
                    "You receive a booking confirmation",
                    "We arrive on time, ready to work",
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-[10px] font-bold text-gold-400 shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-xs text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="space-y-2">
                {[
                  "No deposit required to book",
                  "Free cancellation (24hr notice)",
                  "Transparent pricing — no hidden fees",
                  "100% satisfaction guarantee",
                ].map((trust) => (
                  <div key={trust} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                    {trust}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-2">
              <div className="p-6 md:p-8 rounded-2xl border border-white/8 bg-white/3">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Request Your Appointment
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Fill in the details below and we&apos;ll get back to you shortly to confirm.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-[#060608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/8 overflow-hidden h-64 md:h-80 flex items-center justify-center bg-white/3">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-gold-400/50 mx-auto mb-3" />
              <p className="text-muted-foreground font-medium">Service Area Map</p>
              <p className="text-sm text-muted-foreground mt-1">
                Hardeeville · Bluffton · Hilton Head Island · Beaufort, SC
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
