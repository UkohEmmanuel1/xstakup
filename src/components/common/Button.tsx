"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

export function PrimaryCTA({ children = "Initialize Your Build", href = "/contact" }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="inline-block"
    >
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md bg-quantum-gradient px-6 py-3 text-sm font-medium text-white shadow-quantum hover:shadow-glow transition-shadow relative overflow-hidden group"
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

export function OutlineCTA({ children, href }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground hover:border-signal hover:text-signal transition-colors group"
      >
        <span>{children}</span>
      </Link>
    </motion.div>
  );
}
