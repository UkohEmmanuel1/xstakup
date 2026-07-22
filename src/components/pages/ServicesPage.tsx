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

      <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/brandidentity.webp')" }}
      >
        <div className="absolute inset-0 bg-[color:var(--void-main)]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--void-main)] via-transparent to-[color:var(--void-main)]/50" />
        <div className="relative">
          <AnimatedSection>
            <section className="relative">
              <div className="section-divider" />
              <div className="section-container">
                <div className="section-header text-center">
                  <h2 className="section-title">End-to-end digital product delivery.</h2>
                  <p className="section-subtitle mx-auto">
                    Clear process, modern tooling, and a team focused on outcomes.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                  {services.map((s, i) => (
                    <ServiceCard key={s.id} service={s} index={i} />
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
                          <h3 className="text-lg font-heading font-bold text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
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
