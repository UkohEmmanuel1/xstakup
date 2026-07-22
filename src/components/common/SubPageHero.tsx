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
      className="relative overflow-hidden py-24 md:py-32 lg:py-36 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="absolute inset-0 bg-[color:var(--void-main)]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--void-main)] via-transparent to-[color:var(--void-main)]/50" />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full ${orbColor} blur-[120px]`}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
        >
          {typeof title === "string" ? title : title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
        {ctaText && ctaHref && (
          <motion.a
            href={ctaHref}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-gradient px-6 py-3 text-sm font-medium text-white shadow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {ctaText}
          </motion.a>
        )}
      </div>
    </section>
  );
}
