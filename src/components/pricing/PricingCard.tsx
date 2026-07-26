import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { PricingPackage } from "@/types";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  pkg: PricingPackage;
  index: number;
}

export function PricingCard({ pkg, index }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative h-full flex flex-col rounded-2xl border p-6 md:p-8 transition-all duration-300",
        pkg.popular
          ? "border-gold-500/40 bg-gradient-to-b from-gold-500/10 to-transparent shadow-gold scale-[1.02]"
          : "border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15"
      )}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="gold" className="px-4 py-1 text-xs font-bold shadow-gold">
            <Zap className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
          {pkg.tagline}
        </p>
        <h3 className="text-xl font-bold text-white mb-4">{pkg.name}</h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-1">
          <span
            className={cn(
              "text-4xl font-bold",
              pkg.popular
                ? "bg-gold-gradient bg-clip-text text-transparent"
                : "text-white"
            )}
          >
            {pkg.price}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">{pkg.priceNote}</p>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        {pkg.description}
      </p>

      {/* Meta */}
      <div className="flex gap-4 mb-6 p-4 rounded-xl bg-white/4 border border-white/6">
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Duration</p>
          <p className="text-sm font-semibold text-white">{pkg.duration}</p>
        </div>
        <div className="w-px bg-white/10" />
        <div>
          <p className="text-xs text-muted-foreground mb-0.5">Best for</p>
          <p className="text-sm font-semibold text-white">{pkg.idealFor}</p>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2.5 mb-8 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm text-white/80">
            <div
              className={cn(
                "w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0",
                pkg.popular ? "bg-gold-500/20" : "bg-white/10"
              )}
            >
              <Check
                className={cn(
                  "w-2.5 h-2.5",
                  pkg.popular ? "text-gold-400" : "text-white/60"
                )}
              />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className={cn(
          "block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-300",
          pkg.popular
            ? "bg-gold-gradient text-black hover:shadow-gold hover:scale-[1.02]"
            : "border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
        )}
      >
        Book {pkg.name}
      </Link>
    </div>
  );
}
