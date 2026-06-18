"use client";

import { motion } from "framer-motion";

export function AboutHeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat max-w-full"
      style={{ backgroundImage: `url('/assets/about.webp')` }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-quantum/30 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto text-white"
        >
          Custom Enterprise Software Development <span>Engineering Digital Commerce</span> and
          Enterprise Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-white/70"
        >
          We are a team of dedicated software engineers, solution architects, and technology
          strategists committed to building robust enterprise infrastructure that powers market
          leading businesses across Africa and global markets.
        </motion.p>
      </div>
    </section>
  );
}
