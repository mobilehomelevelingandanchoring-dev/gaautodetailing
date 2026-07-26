"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SERVICES } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  vehicle: z.string().min(2, "Please describe your vehicle"),
  vehicleSize: z.string().min(1, "Please select a vehicle size"),
  service: z.string().min(1, "Please select a service"),
  address: z.string().min(5, "Please enter your address"),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const VEHICLE_SIZES = [
  "Compact / Sedan",
  "Coupe",
  "Hatchback",
  "Midsize Sedan",
  "Full-size Sedan",
  "Crossover / Small SUV",
  "Midsize SUV",
  "Full-size SUV",
  "Pickup Truck",
  "Minivan",
  "Sports Car / Exotic",
  "Luxury Vehicle",
  "Motorcycle",
  "RV / Large Vehicle",
];

const TIME_SLOTS = [
  "7:00 AM – 9:00 AM",
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
  "1:00 PM – 3:00 PM",
  "3:00 PM – 5:00 PM",
  "Flexible",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8 rounded-2xl border border-green-500/20 bg-green-500/5"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Booking Request Sent!
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto">
          Thank you! We&apos;ll review your request and get back to you within a few
          hours to confirm your appointment.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="John Smith"
            {...register("name")}
            className={errors.name ? "border-red-500/50 focus-visible:ring-red-500" : ""}
          />
          {errors.name && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(843) 555-0100"
            {...register("phone")}
            className={errors.phone ? "border-red-500/50 focus-visible:ring-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className={errors.email ? "border-red-500/50 focus-visible:ring-red-500" : ""}
        />
        {errors.email && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Vehicle + Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="vehicle">Year, Make & Model *</Label>
          <Input
            id="vehicle"
            placeholder="2022 Toyota Camry"
            {...register("vehicle")}
            className={errors.vehicle ? "border-red-500/50 focus-visible:ring-red-500" : ""}
          />
          {errors.vehicle && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.vehicle.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicleSize">Vehicle Size *</Label>
          <select
            id="vehicleSize"
            {...register("vehicleSize")}
            className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white
                       backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold-500
                       focus:border-gold-500/50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" className="bg-[#111]">Select size...</option>
            {VEHICLE_SIZES.map((s) => (
              <option key={s} value={s} className="bg-[#111]">{s}</option>
            ))}
          </select>
          {errors.vehicleSize && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.vehicleSize.message}
            </p>
          )}
        </div>
      </div>

      {/* Service */}
      <div className="space-y-2">
        <Label htmlFor="service">Desired Service *</Label>
        <select
          id="service"
          {...register("service")}
          className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white
                     backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold-500
                     focus:border-gold-500/50"
        >
          <option value="" className="bg-[#111]">Select service...</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.name} className="bg-[#111]">{s.name}</option>
          ))}
          <option value="Not Sure — Need Recommendation" className="bg-[#111]">Not Sure — Need a Recommendation</option>
        </select>
        {errors.service && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.service.message}
          </p>
        )}
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label htmlFor="address">Service Address *</Label>
        <Input
          id="address"
          placeholder="123 Main St, Bluffton, SC 29910"
          {...register("address")}
          className={errors.address ? "border-red-500/50 focus-visible:ring-red-500" : ""}
        />
        {errors.address && (
          <p className="text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.address.message}
          </p>
        )}
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date *</Label>
          <Input
            id="date"
            type="date"
            {...register("date")}
            min={new Date().toISOString().split("T")[0]}
            className={`[color-scheme:dark] ${errors.date ? "border-red-500/50 focus-visible:ring-red-500" : ""}`}
          />
          {errors.date && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.date.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Preferred Time *</Label>
          <select
            id="time"
            {...register("time")}
            className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white
                       backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold-500
                       focus:border-gold-500/50"
          >
            <option value="" className="bg-[#111]">Select time...</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t} className="bg-[#111]">{t}</option>
            ))}
          </select>
          {errors.time && (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.time.message}
            </p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          placeholder="Any special requests, concerns about stains, pet hair, specific areas of focus..."
          {...register("notes")}
        />
      </div>

      {/* Error banner */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2"
          >
            <AlertCircle className="w-4 h-4 shrink-0" />
            Something went wrong. Please try again or call us directly.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <Button
        type="submit"
        size="xl"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Booking Request
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        We typically respond within 2–4 hours during business hours. By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="text-gold-400 hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
}
