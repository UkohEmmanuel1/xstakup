"use client";

import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, ServiceCard, CTAButton, FinalCTA } from "@/components/common";
import { services } from "@/data";

export function ServicesPageComponent() {
  return (
    <main>
      <PageHero
        title="Full-stack development services."
        subtitle="From strategy to deployment — we design, build, and scale digital products."
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
              End-to-end digital product delivery.
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
              Clear process, modern tooling, and a team focused on outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1 max-w-xl">
              <h2 className="mt-4 text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tracking-tight">
                Our delivery approach.
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              {[
                {
                  step: "01",
                  title: "Understand",
                  desc: "We learn about your product, users, market, and technical constraints.",
                },
                {
                  step: "02",
                  title: "Plan",
                  desc: "We create a clear scope, roadmap, architecture, and timeline.",
                },
                {
                  step: "03",
                  title: "Design & Build",
                  desc: "We design the experience and build the system in iterative sprints.",
                },
                {
                  step: "04",
                  title: "Ship & Support",
                  desc: "We deploy, monitor, and continue improving the product.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-2xl font-heading font-bold text-blue/40 w-8 flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
