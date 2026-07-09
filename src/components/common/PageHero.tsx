"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-void-section pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-blue-aura" />
      <div className="absolute inset-0 bg-gradient-to-b from-void-section/0 via-void-section/50 to-void-section" />
      <motion.div
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 mx-auto max-w-7xl px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight leading-[1.05] text-white max-w-4xl mx-auto"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base md:text-lg text-white/60 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
