"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/components/common";
import { CardShell } from "@/components/ui";
import type { PipelineStep } from "@/types";

interface PipelineCardProps {
  step: PipelineStep;
}

export function PipelineCard({ step }: PipelineCardProps) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <CardShell accent hover>
        <div className="text-xs text-card-accent">{step.number}</div>
        <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
        <p className="mt-3 text-base text-white/80 leading-relaxed">{step.description}</p>
        <div className="mt-auto pt-6">
          <div
            className="h-px"
            style={{
              background: `linear-gradient(to right, var(--card-accent), transparent)`,
            }}
          />
        </div>
      </CardShell>
    </motion.div>
  );
}
