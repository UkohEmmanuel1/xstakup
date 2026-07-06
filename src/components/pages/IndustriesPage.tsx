"use client";

import { PageHero } from "@/components/common/PageHero";
import {
  AnimatedSection,
  SectionLabel,
  IndustryCard,
  CTAButton,
  FinalCTA,
} from "@/components/common";
import { industries } from "@/data";

export function IndustriesPageComponent() {
  return (
    <main>
      <PageHero
        title="Industry-specific engineering solutions."
        subtitle="Software for fintech, SaaS, AI, Web3, EdTech, and more."
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
            <SectionLabel>Industries</SectionLabel>
            <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight max-w-3xl mx-auto">
              Industries we serve.
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
              We adapt our engineering to your domain, compliance needs, and user expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
            {industries.map((ind, i) => (
              <IndustryCard key={ind.title} item={ind} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 max-w-xl">
              <SectionLabel>Approach</SectionLabel>
              <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
                Custom solutions, per industry.
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              {[
                {
                  title: "Compliance & regulation",
                  desc: "We build with regulatory requirements in mind — PCI DSS for payments, GDPR for data privacy, HIPAA for healthcare.",
                },
                {
                  title: "Scalability patterns",
                  desc: "Each industry has unique scaling challenges. We design architecture that matches your growth trajectory.",
                },
                {
                  title: "User experience",
                  desc: "We design interfaces that feel native to your industry, whether it's a fintech dashboard or an EdTech classroom.",
                },
                {
                  title: "Integration needs",
                  desc: "We connect your product with the tools, APIs, and platforms that matter in your specific industry.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="h-2 w-2 rounded-full bg-blue flex-shrink-0 mt-2" />
                  <div>
                    <h3 className="text-base font-heading font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
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
