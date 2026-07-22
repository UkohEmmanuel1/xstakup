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
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-gradient px-6 py-3 text-sm font-medium text-white shadow-blue hover:shadow-glow transition-all relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}

export function OutlineCTA({ children, href }: OutlineCTAProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground hover:border-blue hover:text-blue transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span>{children}</span>
      </Link>
    </motion.div>
  );
}
