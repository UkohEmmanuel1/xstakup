"use client";

import { motion } from "framer-motion";
import type { EngagementModel } from "@/types";

interface Props {
  item: EngagementModel;
  index: number;
}

export function EngagementCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="rounded-xl border border-border bg-card p-6 hover:shadow-card-hover hover:border-blue/30 transition-all duration-300 h-full flex flex-col">
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{item.bestFor}</p>
        <ul className="space-y-2 mb-5 flex-grow">
          {item.includes.map((inc) => (
            <li key={inc} className="text-sm text-foreground/80 flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue mt-1.5 flex-shrink-0" />
              {inc}
            </li>
          ))}
        </ul>
        <a
          href="/contact"
          className="text-sm font-medium text-blue hover:text-blue/80 transition-colors inline-flex items-center gap-1 group"
        >
          Request Quote
          <span>&rarr;</span>
        </a>
      </div>
    </motion.div>
  );
}
