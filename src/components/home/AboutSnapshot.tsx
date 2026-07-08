"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common";
import { Code2, Layers, Headphones } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Product-first thinking",
    desc: "Business goals, users, and strategy before writing code.",
  },
  {
    icon: Layers,
    title: "Scalable engineering",
    desc: "Architecture that scales from MVP to millions of users.",
  },
  {
    icon: Headphones,
    title: "Long-term technical support",
    desc: "Post-launch monitoring, maintenance, and iteration support.",
  },
];

export function AboutSnapshot() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 max-w-xl">
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
              About XStakUp
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Full-stack engineering, cloud infrastructure, and technical strategy.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-8 md:p-10 hover:shadow-card-hover transition-all h-full min-h-[200px]"
                >
                  <Icon size={20} className="text-blue mb-3" />
                  <h3 className="text-sm font-heading font-bold text-foreground mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
