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

      <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/expertise.webp')" }}
      >
        <div className="absolute inset-0 bg-[color:var(--void-main)]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--void-main)] via-transparent to-[color:var(--void-main)]/50" />
        <div className="relative">
          <AnimatedSection>
            <section className="relative">
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

          <AnimatedSection>
            <section className="relative">
              <div className="section-divider" />
              <div className="section-container">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  <div className="flex-1 max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
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
            </section>
          </AnimatedSection>
        </div>
      </div>

      <FinalCTA />
    </main>
  );
}
