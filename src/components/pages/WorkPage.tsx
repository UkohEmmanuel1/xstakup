"use client";

import { AnimatedSection, SubPageHero, FinalCTA } from "@/components/common";
import { DeploymentCard } from "@/components/home/DeploymentCard";
import { cases, caseGradients } from "@/data/home";

export function WorkPageComponent() {
  return (
    <main>
      <SubPageHero
        title="Proven product engineering."
        subtitle="Case studies across fintech, AI, Web3, SaaS, and mobile."
        ctaText="Start a Project"
        ctaHref="/contact"
        bgImage="/assets/career.webp"
      />

      <AnimatedSection>
        <section className="relative bg-[color:var(--void-surface)]">
          <div className="section-divider" />
          <div className="section-container">
            <div className="section-header text-center">
              <h2 className="section-title">What we build</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {cases.map((c, i) => (
                <DeploymentCard key={c.title} caseStudy={c} gradient={caseGradients[i]} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <FinalCTA />
    </main>
  );
}
