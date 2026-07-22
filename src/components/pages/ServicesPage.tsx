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
                <div className="section-header text-center">
                  <h2 className="section-title">Our delivery approach.</h2>
                  <p className="section-subtitle mx-auto max-w-2xl">
                    A proven 4-phase process from discovery to ongoing support.
                  </p>
                </div>

                <div className="relative mx-auto max-w-3xl">
                  <div className="absolute left-6 top-0 bottom-12 w-px bg-gradient-to-b from-blue/40 via-blue/20 to-transparent hidden md:block" />

                  <div className="space-y-8 md:space-y-10">
                    {deliverySteps.map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        className="relative pl-16 md:pl-20"
                      >
                        <div className="absolute left-4 md:left-4 top-1.5 w-3.5 h-3.5 rounded-full bg-blue border-4 border-card shadow-md z-10 hidden md:block" />

                        <div className="absolute left-0 top-0 w-11 h-11 rounded-xl bg-blue/10 border border-blue/20 flex items-center justify-center md:hidden">
                          <span className="text-sm font-bold text-blue">{item.step}</span>
                        </div>

                        <div className="group rounded-xl border border-border bg-card p-6 md:p-8 hover:shadow-card-hover transition-all duration-300 hover:border-blue/30 hover:-translate-y-0.5">
                          <span className="hidden md:inline-flex text-xs font-bold text-blue/60 uppercase tracking-wider mb-2">
                            {item.step}
                          </span>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-blue transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
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
