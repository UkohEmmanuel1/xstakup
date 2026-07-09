"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/components/common";
import { CardShell } from "@/components/ui";
import type { ExpertiseItem } from "@/types";

interface ExpertiseCardProps {
  item: ExpertiseItem;
}

export function ExpertiseCard({ item }: ExpertiseCardProps) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <CardShell accent hover>
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-3xl text-card-accent/80"
        >
          {item.icon}
        </motion.div>
        <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-2 text-base text-white/80 leading-relaxed">{item.description}</p>
        <div className="mt-auto pt-6">
          <span className="text-xs text-card-accent font-medium tracking-wider">
            EXPLORE &rarr;
          </span>
        </div>
      </CardShell>
    </motion.div>
  );
}
