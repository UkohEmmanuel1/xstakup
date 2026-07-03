"use client";

import { AnimatedSection, SectionLabel, UseCaseCard } from "@/components/common";
import { useCases } from "@/data";

export function UseCasesSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <SectionLabel>Use Cases</SectionLabel>
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight max-w-3xl mx-auto">
            Use Cases
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {useCases.map((uc, i) => (
            <UseCaseCard key={uc.title} item={uc} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
