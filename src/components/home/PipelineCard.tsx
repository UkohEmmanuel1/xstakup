"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/components/common";
import type { PipelineStep } from "@/types";
import type { CardColor } from "@/types";

interface PipelineCardProps {
  step: PipelineStep;
  color?: CardColor;
}

export function PipelineCard({ step, color }: PipelineCardProps) {
  const c = color ?? { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, borderColor: c.hover }}
      className="group relative rounded-xl p-4 md:p-6 transition-colors h-full"
      style={{ border: `1px solid ${c.border}`, background: c.bg }}
    >
      <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
      <div className="text-xs" style={{ color: c.hover }}>{step.number}</div>
      <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
      <p className="mt-3 text-base text-white/80 leading-relaxed">{step.description}</p>
      <div className="mt-6 h-px" style={{ background: `linear-gradient(to right, ${c.accent}, transparent)` }} />
    </motion.div>
  );
}
