"use client";

import { AnimatedSection, SectionLabel, EngagementCard } from "@/components/common";
import { engagementModels } from "@/data";

export function EngagementSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight max-w-3xl mx-auto">
            Engagement Models
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
          {engagementModels.map((em, i) => (
            <EngagementCard key={em.title} item={em} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
