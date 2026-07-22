"use client";

import { useState } from "react";
import { AnimatedSection, EngagementCard } from "@/components/common";
import { engagementModels } from "@/data";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function EngagementSection() {
  const [items] = useState(() => shuffle(engagementModels).slice(0, 3));

  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight max-w-3xl mx-auto">
            Engagement Models
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((em, i) => (
            <EngagementCard key={em.title} item={em} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
