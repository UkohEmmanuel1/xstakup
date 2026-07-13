"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PrimaryCTA } from "@/components/common/Button";

export function FinalCTA() {
  return (
    <section className="relative z-30 overflow-hidden border-t border-section-border bg-void-section">
      <div className="absolute inset-0 pointer-events-none bg-[#0094C7] opacity-15" />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#0094C7]/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-void-section/20 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative h-48 md:h-64 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue/40 to-void-section z-10" />
            <Image src="/assets/cta.jpg" alt="" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-2xl md:text-5xl font-bold text-white tracking-tight">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="mt-5 text-white/80 max-w-xl text-base md:text-lg">
              Transform your business with cutting-edge software solutions. Production-grade web,
              mobile, AI & Web3 — built for scale.
            </p>
            <div className="mt-10">
              <PrimaryCTA>Initialize Your Build</PrimaryCTA>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
