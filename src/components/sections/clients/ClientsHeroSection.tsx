"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/common";

export function ClientsHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-quantum/25 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <SectionLabel>Client Deployments</SectionLabel>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto"
        >
          <span className="text-gradient-quantum">High-Performance Systems</span>{" "}
          Built for Scale.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          We don&apos;t just write code; we architect market-leading platforms.
          Explore the enterprise software, fintech infrastructure, and AI
          applications engineered by XStakUp.
        </motion.p>
      </div>
    </section>
  );
}
