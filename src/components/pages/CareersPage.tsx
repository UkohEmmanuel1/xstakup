"use client";

import { motion } from "framer-motion";
import { SectionLabel, FinalCTA } from "@/components/common";

export function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-quantum/25 blur-[120px]"
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionLabel>Careers</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="text-gradient-quantum">Engineer for Scale.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We&apos;re building Africa&apos;s premier engineering team. Open roles across
            backend, AI, Web3, and DevSecOps.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="mailto:partnerships@xstakup.com"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-quantum-gradient px-6 py-3 text-sm font-medium text-white shadow-quantum"
          >
            View Open Roles →
          </motion.a>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
