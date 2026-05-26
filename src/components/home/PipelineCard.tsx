import { motion } from "framer-motion";
import { staggerItem } from "@/components/common";
import type { PipelineStep } from "@/types";

interface PipelineCardProps {
  step: PipelineStep;
}

export function PipelineCard({ step }: PipelineCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, borderColor: "rgba(0, 209, 255, 0.4)" }}
      className="group relative rounded-xl glass p-6 transition-colors"
    >
      <div className="font-mono text-xs text-signal">{step.n}</div>
      <h3 className="mt-4 text-xl font-semibold">{step.t}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
      <div className="mt-6 h-px bg-gradient-to-r from-signal/40 to-transparent" />
    </motion.div>
  );
}
