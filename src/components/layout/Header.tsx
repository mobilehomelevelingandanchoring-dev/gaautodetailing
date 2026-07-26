"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[90] transition-all duration-500",
          scrolled
            ? "backdrop-blur-2xl bg-black/80 border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/images/logo.webp"
                alt="GAutoDetailing logo"
                width={44}
                height={44}
                className="rounded-xl object-contain"
                priority
              />
              <span className="text-lg font-bold text-white tracking-tight">
                G<span className="bg-gold-gradient bg-clip-text text-transparent">Auto</span>Detailing
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      pathname === item.href
                        ? "text-gold-400"
                        : "text-white/80 hover:text-white hover:bg-white/8"
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 rounded-2xl
                                   backdrop-blur-2xl bg-black/90 border border-white/10
                                   shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-4 py-2.5 text-sm text-white/80
                                       hover:text-gold-400 hover:bg-white/8 transition-all duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-white/70
                           hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}>
                <Button variant="outline" size="sm" className="gap-2">
                  <Phone className="w-3.5 h-3.5" />
                  {BUSINESS.phone}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="sm">Book Now</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl
                         border border-white/10 text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[85] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#0A0A0F]/95 backdrop-blur-2xl
                         border-l border-white/10 shadow-[-40px_0_80px_rgba(0,0,0,0.5)] overflow-y-auto"
            >
              <div className="p-6 pt-20">
                <nav className="space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                          pathname === item.href
                            ? "bg-gold-500/10 text-gold-400 border border-gold-500/20"
                            : "text-white/80 hover:bg-white/8 hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center px-4 py-2 rounded-lg text-xs text-white/60 hover:text-gold-400 transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-white/30 mr-2" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                  <Link
                    href={`tel:${BUSINESS.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/8 transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    {BUSINESS.phone}
                  </Link>
                  <Link href="/contact">
                    <Button className="w-full" size="lg">
                      Book Now
                    </Button>
                  </Link>
                  <Link
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/8 transition-all"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    {BUSINESS.instagramHandle}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
