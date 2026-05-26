"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerItem } from "@/components/common";
import type { CaseStudy } from "@/types";

interface DeploymentCardProps {
  caseStudy: CaseStudy;
  gradient: string;
}

export function DeploymentCard({ caseStudy: c, gradient }: DeploymentCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      className="group rounded-xl glass overflow-hidden transition-shadow hover:shadow-glow"
    >
      <motion.div
        className="aspect-[4/3] relative overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-5xl font-bold text-white/90">{c.t}</span>
        </div>
      </motion.div>
      <div className="p-6">
        <span className="font-mono text-xs uppercase tracking-widest text-signal">{c.tag}</span>
        <h3 className="mt-3 text-xl font-semibold">{c.t}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
        <Link href="/clients" className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-signal transition-colors">
          View Architecture <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
