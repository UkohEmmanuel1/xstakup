"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PrimaryCTAProps {
  children: ReactNode;
  href?: string;
}

interface OutlineCTAProps {
  children: ReactNode;
  href: string;
}

export function PrimaryCTA({
  children = "Initialize Your Build",
  href = "/contact",
}: PrimaryCTAProps) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="inline-block">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md bg-blue-gradient px-6 py-3.5 text-base font-medium text-[#070a09] shadow-blue hover:shadow-glow transition-shadow relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "200%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}

export function OutlineCTA({ children, href }: OutlineCTAProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3.5 text-base font-medium text-foreground hover:border-blue hover:text-blue transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span>{children}</span>
      </Link>
    </motion.div>
  );
}
