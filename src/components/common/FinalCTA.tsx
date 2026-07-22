"use client";

import { motion } from "framer-motion";
import { PrimaryCTA } from "@/components/common/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-section-border bg-[color:var(--void-section)]">
      <div className="section-divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-base md:text-lg">
              Transform your business with cutting-edge software solutions. Production-grade web,
              mobile, AI & Web3 — built for scale.
            </p>
            <div className="mt-8">
              <PrimaryCTA>Initialize Your Build</PrimaryCTA>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
