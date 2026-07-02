"use client";

import { motion } from "framer-motion";
import { AnimatedSection, SectionLabel } from "@/components/common";
import { Code2, Layers, Headphones } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Product-first thinking",
    desc: "We start with your business goals, users, and product strategy before writing a single line of code.",
  },
  {
    icon: Layers,
    title: "Scalable engineering",
    desc: "We build architecture that grows with your user base, from MVP to millions of requests.",
  },
  {
    icon: Headphones,
    title: "Long-term technical support",
    desc: "We stay with you after launch, providing monitoring, maintenance, and iteration support.",
  },
];

export function AboutSnapshot() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 max-w-xl">
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
              An engineering partner for teams that need more than just code.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              XStakUp combines product thinking, UI/UX design, full-stack engineering, cloud
              infrastructure, and technical strategy to help companies build software that is
              reliable, scalable, and ready for real users.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-5 hover:shadow-card-hover transition-all"
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
