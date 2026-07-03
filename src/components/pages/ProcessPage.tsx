"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, SectionLabel, CTAButton, FinalCTA } from "@/components/common";

const steps = [
  {
    num: "01",
    title: "Product Discovery",
    desc: "Understand your product idea, goals, users, and technical requirements through research and interviews.",
    details: [
      "Stakeholder interviews and goal alignment",
      "User research and persona development",
      "Technical feasibility assessment",
      "Market and competitive analysis",
    ],
  },
  {
    num: "02",
    title: "Scope & Roadmap",
    desc: "Define scope, features, technical roadmap, and development plan with clear deliverables.",
    details: [
      "Product scope definition",
      "Feature prioritization",
      "Technical architecture decisions",
      "Timeline and milestone planning",
    ],
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "Create user flows, wireframes, high-fidelity UI, and prototypes aligned with user needs and business goals.",
    details: [
      "User flow mapping",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Design system creation",
    ],
  },
  {
    num: "04",
    title: "Architecture Planning",
    desc: "Design architecture, database schema, API contracts, and infrastructure for a solid technical foundation.",
    details: [
      "System architecture design",
      "Database schema design",
      "API contract definition",
      "Infrastructure and DevOps planning",
    ],
  },
  {
    num: "05",
    title: "Development Sprint",
    desc: "Build frontend, backend, APIs, and infrastructure in iterative sprint cycles with continuous deployment.",
    details: [
      "Frontend and backend development",
      "API and integration development",
      "Code reviews and pair programming",
      "Continuous integration and deployment",
    ],
  },
  {
    num: "06",
    title: "QA & Testing",
    desc: "Functional, performance, security, and edge-case testing built into every sprint.",
    details: [
      "Functional and regression testing",
      "Performance and load testing",
      "Security audit and penetration testing",
      "Cross-browser and device testing",
    ],
  },
  {
    num: "07",
    title: "Deployment",
    desc: "Deploy to production with monitoring, alerting, and backup strategies in place.",
    details: [
      "Production environment setup",
      "CI/CD pipeline finalization",
      "Monitoring and alerting configuration",
      "Backup and disaster recovery setup",
    ],
  },
  {
    num: "08",
    title: "Monitoring & Support",
    desc: "Monitor performance, fix issues, roll out improvements, and provide ongoing technical support.",
    details: [
      "Performance monitoring and optimization",
      "Bug fixes and hotfixes",
      "Feature enhancements and iteration",
      "Technical support and maintenance",
    ],
  },
];

export function ProcessPageComponent() {
  return (
    <main>
      <PageHero
        title="Structured product delivery."
        subtitle="An 8-step engineering process from concept to launch."
      >
        <CTAButton
          href="/contact"
          className="bg-gradient-primary text-white shadow-lg shadow-electric/25"
        >
          Start a Project
        </CTAButton>
      </PageHero>

      <div className="py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-6 rounded-xl border border-border bg-card p-8 md:p-10"
              >
                <div className="md:col-span-1">
                  <span className="text-4xl md:text-5xl font-heading font-bold text-blue/20">
                    {step.num}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                <div className="md:col-span-2">
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue flex-shrink-0 mt-1.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <FinalCTA />
    </main>
  );
}
