"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudyCard } from "@/types";

interface Props {
  item: CaseStudyCard;
  index: number;
}

export function CaseCard({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group rounded-xl border border-border bg-card p-6 md:p-8 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-blue bg-blue/10 px-2 py-0.5 rounded-full">
            {item.industry}
          </span>
          <span className="text-xs text-muted-foreground">{item.platform}</span>
        </div>
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{item.summary}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((t) => (
            <span key={t} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
              {t}
            </span>
          ))}
        </div>
        <Link
          href={item.slug}
          className="text-sm font-medium text-blue hover:text-blue/80 transition-colors inline-flex items-center gap-1 group/link"
        >
          View Case Study
          <span>&rarr;</span>
        </Link>
      </div>
    </motion.div>
  );
}
