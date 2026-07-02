"use client";

import { motion } from "framer-motion";
import type { UseCase } from "@/types";

interface Props {
  item: UseCase;
  index: number;
}

export function UseCaseCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="rounded-xl border border-border bg-card p-6 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
        <h3 className="text-lg font-heading font-bold text-foreground mb-3">{item.title}</h3>
        <div className="space-y-3 flex-grow">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Problem
            </p>
            <p className="text-sm text-foreground/80">{item.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Solution
            </p>
            <p className="text-sm text-foreground/80">{item.solution}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Output
          </p>
          <p className="text-sm text-blue font-medium">{item.output}</p>
        </div>
      </div>
    </motion.div>
  );
}
