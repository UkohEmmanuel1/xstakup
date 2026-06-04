"use client";

import { motion } from "framer-motion";
import { PrimaryCTA, OutlineCTA, SectionLabel } from "@/components/common";
import { StatsStrip } from "./StatsStrip";
import { stats } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-quantum/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl"
          >
            Your Partner in <span className="text-gradient-quantum">Custom Enterprise</span>{" "}
            Software Development.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            We are your dedicated engineering team. We architect scalable web, mobile, AI, and Web3
            applications so you can focus on leading your market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <PrimaryCTA>Initialize Your Build</PrimaryCTA>
            <OutlineCTA href="/clients">View Client Success</OutlineCTA>
          </motion.div>

          <StatsStrip items={stats} />
        </div>
      </div>
    </section>
  );
}
