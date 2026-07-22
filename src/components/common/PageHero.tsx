"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--void-section)] pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[color:var(--void-section)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 mx-auto max-w-7xl px-6 text-center"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-foreground max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex items-center justify-center gap-4">{children}</div>}
      </motion.div>
    </section>
  );
}
