"use client";

import { motion } from "framer-motion";
import { StatsStrip } from "./StatsStrip";
import { stats } from "@/data/home";

export function HeroSection() {
  return (
    <section className="grid md:grid-cols-2 min-h-[85vh]">
      <div className="relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="XStakUp enterprise software development showcase"
        />
        <div className="absolute inset-0 bg-[color:var(--void-main)]/50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="relative bg-[color:var(--void-main)] flex items-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 h-[500px] w-[600px] rounded-full bg-blue/20 blur-[140px] pointer-events-none"
          aria-hidden
        />

        <div className="relative z-10 px-6 md:px-12 py-24 md:py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]">
              <span className="text-foreground">Custom Enterprise</span>
              <br />
              <span className="text-gradient-blue">Software Development</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground"
          >
            Dedicated engineering for web, mobile, AI, and Web3. We build production-grade systems
            that transform your business with cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <StatsStrip items={stats} className="mt-10 md:mt-14" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
