"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, ServiceCard, CTAButton, FinalCTA } from "@/components/common";
import { services } from "@/data";

const deliverySteps = [
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
];

export function ServicesPageComponent() {
  return (
    <main>
      <PageHero
        title="Full-stack development services."
        subtitle="From strategy to deployment we design, build, and scale digital products."
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
        <section className="relative bg-[color:var(--void-section)] overflow-hidden">
          <div className="section-divider" />
          <div className="section-container">
            <div className="section-header text-center">
              <h2 className="section-title">Our delivery approach.</h2>
              <p className="section-subtitle mx-auto max-w-2xl">
                A proven 4 phase process from discovery to ongoing support.
              </p>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <svg
                className="absolute left-1/2 top-0 -translate-x-1/2 w-6 h-full hidden md:block"
                viewBox="0 0 24 800"
                preserveAspectRatio="xMidYMax meet"
              >
                <path
                  d="M 12,0 C 12,60 2,90 12,130 C 22,170 12,190 12,230 C 22,270 12,290 12,330 C 22,370 12,390 12,430 C 22,470 12,490 12,530 C 22,570 12,590 12,630 C 22,670 12,690 12,730 C 22,770 12,790 12,800"
                  fill="none"
                  stroke="#0094C7"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <circle cx="12" cy="130" r="5" fill="#0094C7" />
                <circle cx="12" cy="330" r="5" fill="#0094C7" />
                <circle cx="12" cy="530" r="5" fill="#0094C7" />
                <circle cx="12" cy="730" r="5" fill="#0094C7" />
              </svg>

              <div className="space-y-8 md:space-y-16">
                {deliverySteps.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <div key={item.step} className="relative">
                      <div className="md:hidden flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center mt-1">
                          <span className="text-sm font-bold text-blue">{item.step}</span>
                        </div>
                        <div className="flex-1 rounded-xl border border-border bg-card p-6 hover:shadow-card-hover transition-all duration-300 hover:border-blue/30 hover:-translate-y-0.5">
                          <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                          <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="hidden md:flex items-start">
                        {isLeft ? (
                          <>
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.15 }}
                              className="w-[42%] rounded-xl border border-border bg-card p-8 hover:shadow-card-hover transition-all duration-300 hover:border-blue/30 hover:-translate-y-0.5"
                            >
                              <span className="text-xs font-bold text-blue/60 uppercase tracking-wider">
                                {item.step}
                              </span>
                              <h3 className="text-xl font-bold text-foreground mt-2">
                                {item.title}
                              </h3>
                              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                                {item.desc}
                              </p>
                            </motion.div>
                            <div className="flex-shrink-0 w-6 mx-auto" />
                          </>
                        ) : (
                          <>
                            <div className="flex-shrink-0 w-6 mx-auto" />
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.15 }}
                              className="w-[42%] ml-auto rounded-xl border border-border bg-card p-8 hover:shadow-card-hover transition-all duration-300 hover:border-blue/30 hover:-translate-y-0.5"
                            >
                              <span className="text-xs font-bold text-blue/60 uppercase tracking-wider">
                                {item.step}
                              </span>
                              <h3 className="text-xl font-bold text-foreground mt-2">
                                {item.title}
                              </h3>
                              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                                {item.desc}
                              </p>
                            </motion.div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <FinalCTA />
    </main>
  );
}
