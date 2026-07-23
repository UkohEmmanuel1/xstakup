"use client";

import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, CTAButton, FinalCTA } from "@/components/common";
import { DeploymentCard } from "@/components/home/DeploymentCard";
import { cases, caseGradients } from "@/data/home";

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
