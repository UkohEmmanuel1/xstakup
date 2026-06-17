"use client";

import { motion } from "framer-motion";
import { FinalCTA } from "@/components/common";

export function CommunityPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat max-w-full"
        style={{ backgroundImage: `url('/assets/community.webp')` }}
      >
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-violet/25 blur-[120px]"
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight"
          >
            <span className="text-gradient-quantum">Software Developer Community</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-lg text-white/70 max-w-2xl mx-auto"
          >
            Join our engineering community for tech meetups, technical talks, and open-source
            contributions. We&apos;re powering Africa&apos;s next generation of software builders.
          </motion.p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
