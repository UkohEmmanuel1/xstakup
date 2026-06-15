"use client";

import { motion } from "framer-motion";
import { PrimaryCTA, OutlineCTA, SectionLabel } from "@/components/common";
import { StatsStrip } from "./StatsStrip";
import { stats } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center max-w-full">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="XStakUp enterprise software development showcase"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-quantum/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl"
          >
            Custom Enterprise <span className="text-gradient-quantum">Software Development</span>{" "}
            Company
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Your dedicated engineering team for custom web development, mobile applications,
            artificial intelligence, and Web3 solutions. We architect scalable, production-grade
            systems so you can lead your market.
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
