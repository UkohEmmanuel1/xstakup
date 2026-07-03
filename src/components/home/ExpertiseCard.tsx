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
  const c = color ?? { border: "rgba(0, 148, 199, 0.25)", hover: "rgba(0, 148, 199, 0.5)", accent: "rgba(0, 148, 199, 0.6)", bg: "#303030" };

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4, borderColor: c.hover }}
      className="group relative rounded-xl p-8 md:p-10 transition-colors h-full min-h-[200px] flex flex-col"
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
      <div
        className="mt-6 flex items-center gap-2 text-xs"
        style={{ color: c.hover }}
      >
        EXPLORE →
      </div>
    </motion.div>
  );
}
