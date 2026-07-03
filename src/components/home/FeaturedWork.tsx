"use client";

import { AnimatedSection, SectionLabel, CaseCard } from "@/components/common";
import { caseStudies } from "@/data";
import { CTAButton } from "@/components/common/CTAButton";

export function FeaturedWork() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <SectionLabel>Work</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
              Featured Projects
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {caseStudies.map((c, i) => (
            <CaseCard key={c.title} item={c} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/work" variant="outline">
            View All Work &rarr;
          </CTAButton>
        </div>
      </div>
    </AnimatedSection>
  );
}
