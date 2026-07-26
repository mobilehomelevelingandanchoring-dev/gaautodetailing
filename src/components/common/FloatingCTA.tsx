"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Instagram, X, ChevronUp } from "lucide-react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      icon: Calendar,
      label: "Book Now",
      href: "/contact",
      className: "bg-gold-gradient text-black hover:shadow-gold",
    },
    {
      icon: Phone,
      label: "Call Now",
      href: `tel:${BUSINESS.phone.replace(/\D/g, "")}`,
      className: "bg-white/10 border border-white/20 text-white hover:bg-white/20",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: BUSINESS.instagram,
      className: "bg-gradient-to-br from-purple-600 to-pink-500 text-white",
      external: true,
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="flex flex-col gap-2"
              >
                {actions.map((action, i) => (
                  <motion.div
                    key={action.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm
                                 backdrop-blur-xl shadow-glass transition-all duration-300 hover:scale-105
                                 ${action.className}`}
                    >
                      <action.icon className="w-4 h-4 shrink-0" />
                      {action.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setOpen(!open)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-glass
                       transition-all duration-300 hover:scale-110 animate-pulse-gold
                       ${open
                         ? "bg-white/10 border border-white/20 text-white"
                         : "bg-gold-gradient text-black"
                       }`}
            aria-label={open ? "Close menu" : "Open contact menu"}
          >
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
