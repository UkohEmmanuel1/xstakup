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
        <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">{step.description}</p>
        <div className="mt-auto pt-6">
          <div className="h-px bg-gradient-to-r from-blue/40 to-transparent" />
        </div>
      </CardShell>
    </motion.div>
  );
}
