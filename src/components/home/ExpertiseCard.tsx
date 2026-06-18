"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/components/common";
import type { ExpertiseItem } from "@/types";
import type { CardColor } from "@/types";

interface ExpertiseCardProps {
  item: ExpertiseItem;
  color?: CardColor;
}

export function ExpertiseCard({ item, color }: ExpertiseCardProps) {
  const c = color ?? { border: "oklch(0.65 0.18 230 / 0.25)", hover: "oklch(0.65 0.18 230 / 0.5)", accent: "oklch(0.65 0.18 230 / 0.6)", bg: "oklch(0.21 0.06 230)" };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, borderColor: c.hover }}
      className="group relative rounded-xl p-4 md:p-6 transition-colors"
      style={{ border: `1px solid ${c.border}`, background: c.bg }}
    >
      <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full" style={{ background: c.accent }} />
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-3xl group-hover:opacity-100 transition-opacity"
        style={{ color: c.hover, opacity: 0.8 }}
      >
        {item.icon}
      </motion.div>
      <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-base text-white/80 leading-relaxed">{item.description}</p>
      <motion.div
        initial={{ opacity: 0.6, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="mt-6 flex items-center gap-2 text-xs"
        style={{ color: c.hover }}
      >
        EXPLORE <span>→</span>
      </motion.div>
    </motion.div>
  );
}
