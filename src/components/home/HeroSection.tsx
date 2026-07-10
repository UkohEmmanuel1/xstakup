"use client";

import { motion } from "framer-motion";
import { useScrollZoom } from "@/hooks/useScrollZoom";
import { StatsStrip } from "./StatsStrip";
import { stats } from "@/data/home";

export function HeroSection() {
  const { ref, scale } = useScrollZoom([0, 1], [1, 1.2]);

  return (
    <section className="relative overflow-hidden md:min-h-[90vh] grid md:grid-cols-[1fr_1.2fr] items-stretch max-w-full">
      {/* Left: Video column */}
      <motion.div ref={ref} className="relative overflow-hidden h-full" style={{ scale }}>
        <video
          className="absolute inset-0 w-full h-full object-cover block"
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="XStakUp enterprise software development showcase"
        />
        <div className="absolute inset-0 bg-[#303030]/40" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#303030]" />
      </motion.div>

      {/* Right: Text column */}
      <div className="relative z-10 flex items-center justify-start px-6 md:px-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-start text-left max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="text-white">Custom Enterprise</span>
            <br />
            <span className="text-gradient-blue">Software Development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-2xl text-base md:text-lg text-white/60 font-light tracking-wide"
          >
            Dedicated engineering for web, mobile, AI, and Web3. We build production-grade systems
            so you lead your market.
          </motion.p>

          <StatsStrip items={stats} className="mt-14" />
        </motion.div>
      </div>

      {/* Orb glow behind text column */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 h-[400px] w-[500px] md:h-[600px] md:w-[800px] rounded-full bg-blue/30 blur-[80px] md:blur-[140px] pointer-events-none"
        aria-hidden
      />
    </section>
  );
}
