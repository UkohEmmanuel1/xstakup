"use client";

import { motion } from "framer-motion";
import { useScrollZoom } from "@/hooks/useScrollZoom";
import { StatsStrip } from "./StatsStrip";
import { stats } from "@/data/home";

export function HeroSection() {
  const { ref, scale } = useScrollZoom([0, 1], [1, 1.2]);

  return (
    <section className="relative overflow-hidden md:min-h-[90vh] flex items-center max-w-full" ref={ref}>
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover block"
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="XStakUp enterprise software development showcase"
        />
        <div className="absolute inset-0 bg-[#303030]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#303030]/40 via-transparent to-[#303030]/80" />
        <div className="absolute inset-0 bg-hero-glow" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[500px] md:h-[600px] md:w-[800px] rounded-full bg-blue/30 blur-[80px] md:blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 mx-auto max-w-7xl px-6 pt-16 md:pt-32 pb-20 md:pb-40 w-full"
      >
        <div className="flex flex-col items-center text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl"
          >
            <span className="text-white">Custom Enterprise</span>
            <br />
            <span className="text-gradient-blue">Software Development</span>
            <br />

          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-white/60 font-light tracking-wide"
          >
            Dedicated engineering for web, mobile, AI, and Web3. We build production-grade systems so you lead your market.
          </motion.p>

          <StatsStrip items={stats} className="mt-16" />

        </div>
      </motion.div>
    </section>
  );
}
