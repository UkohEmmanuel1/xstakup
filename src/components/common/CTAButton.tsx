"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ButtonProps } from "@/types";

export function CTAButton({
  children,
  href = "/contact",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const variants = {
    primary: "bg-gradient-primary text-white shadow hover:shadow-glow",
    outline: "border border-border text-foreground/80 hover:border-blue hover:text-blue",
    ghost: "text-foreground/70 hover:text-blue",
  };

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
