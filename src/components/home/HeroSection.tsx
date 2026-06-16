"use client";

import { motion } from "framer-motion";
import { StatsStrip } from "./StatsStrip";
import { stats } from "@/data/home";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden md:min-h-[90vh] flex items-center max-w-full">
      {/* --- VIDEO --- */}
      <video
        className="absolute inset-0 w-full h-full object-cover block"
        src="/assets/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-label="XStakUp enterprise software development showcase"
      />

      {/* --- OVERLAYS (Softer + Vignette for classic cinematic feel) --- */}
      <div className="absolute inset-0 bg-black/70" /> 
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" /> {/* Vignette */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* --- PULSING ORB (Trending UI) --- */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-quantum/30 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40 w-full">
        <div className="flex flex-col items-center text-center">

          {/* --- 1. TOP BADGE (New - Classic Trust Signal) --- */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Trusted by 200+ Enterprises Worldwide
          </motion.div>

          {/* --- 2. HEADING (Classic Serif + Gradient) --- */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl"
          >
            <span className="text-white">Custom Enterprise</span>
            <br />
            <span className="text-gradient-quantum">Software Development</span>
            <br />
            <span className="text-3xl md:text-5xl text-white/40">Company</span> {/* Subdued for elegance */}
          </motion.h1>

          {/* --- 3. SUBTITLE --- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-white/60 font-light tracking-wide"
          >
            Your dedicated engineering team for custom web development, mobile applications,
            artificial intelligence, and Web3 solutions. We architect scalable, production-grade
            systems so you can lead your market.
          </motion.p>

          {/* --- 4. CALL-TO-ACTIONS (Crucial for conversion) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button className="rounded-full bg-gradient-to-r from-quantum to-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-quantum/30 transition-all hover:scale-105 hover:shadow-quantum/50">
              Book a Free Consultation
            </button>
            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
              Watch Demo
            </button>
          </motion.div>

          {/* --- 5. STATS (Now using your imported StatsStrip, but we will upgrade that component below) --- */}
          <StatsStrip items={stats} className="mt-16" />
          
        </div>
      </div>
    </section>
  );
}