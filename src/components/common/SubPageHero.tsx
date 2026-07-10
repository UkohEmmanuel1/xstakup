"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SubPageHeroProps {
  title: string | ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  bgImage: string;
  orbColor?: string;
}

export function SubPageHero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  bgImage,
  orbColor = "bg-blue/15",
}: SubPageHeroProps) {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24 lg:py-28 bg-cover bg-center bg-no-repeat max-w-full"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-overlay/85" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full ${orbColor} blur-[120px]`}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
        >
          {typeof title === "string" ? <span className="text-gradient-blue">{title}</span> : title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-base md:text-lg text-white/70 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        {ctaText && ctaHref && (
          <motion.a
            href={ctaHref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-gradient px-6 py-3.5 text-sm font-medium text-white shadow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {ctaText}
          </motion.a>
        )}
      </div>
    </section>
  );
}
