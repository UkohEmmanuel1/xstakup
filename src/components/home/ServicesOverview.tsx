"use client";

import { AnimatedSection, SectionLabel, ServiceCard } from "@/components/common";
import { services } from "@/data";
import { CTAButton } from "@/components/common/CTAButton";

export function ServicesOverview() {
  return (
    <AnimatedSection className="py-16 md:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
              Software Development Services
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/services" variant="outline">
            View All Services &rarr;
          </CTAButton>
        </div>
      </div>
    </AnimatedSection>
  );
}
