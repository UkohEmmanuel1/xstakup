"use client";

import { AnimatedSection, TechBadge } from "@/components/common";
import { techCategories } from "@/data";

export function TechStackSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
            Our Tech Stack
          </h2>
        </div>
        <div className="space-y-8">
          {techCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
