"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/components/common";
import type { ExpertiseItem } from "@/types";

interface ExpertiseCardProps {
  item: ExpertiseItem;
}

export function ExpertiseCard({ item }: ExpertiseCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, borderColor: "rgba(0, 209, 255, 0.6)" }}
      className="group relative rounded-xl glass p-6 transition-colors cursor-pointer"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="font-mono text-3xl text-signal/80 group-hover:text-signal transition-colors"
      >
        {item.i}
      </motion.div>
      <h3 className="mt-5 text-lg font-semibold">{item.t}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="mt-6 flex items-center gap-2 font-mono text-xs text-signal"
      >
        EXPLORE <span>→</span>
      </motion.div>
    </motion.div>
  );
}
