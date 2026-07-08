"use client";

import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, CaseCard, CTAButton, FinalCTA } from "@/components/common";
import { caseStudies } from "@/data";

export function WorkPageComponent() {
  return (
    <main>
      <PageHero
        title="Proven product engineering."
        subtitle="Case studies across fintech, AI, Web3, SaaS, and mobile."
      >
        <CTAButton
          href="/contact"
          className="bg-gradient-primary text-white shadow-lg shadow-electric/25"
        >
          Start a Project
        </CTAButton>
      </PageHero>

      <AnimatedSection className="py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight max-w-3xl mx-auto">
              What we build
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {caseStudies.map((c, i) => (
              <CaseCard key={c.title} item={c} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 max-w-xl">
              <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
                Cross-industry capabilities.
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {[
                "Fintech & Payment Platforms",
                "AI & Automation Systems",
                "Web3 & Blockchain dApps",
                "Mobile Applications",
                "SaaS Platforms",
                "EdTech Systems",
                "Marketplaces",
                "Internal Dashboards & Tools",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="h-2 w-2 rounded-full bg-blue flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <FinalCTA />
    </main>
  );
}
