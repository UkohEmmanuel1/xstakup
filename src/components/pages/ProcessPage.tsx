"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, SectionLabel, CTAButton, FinalCTA } from "@/components/common";

const steps = [
  {
    num: "01",
    title: "Product Discovery",
    desc: "We start by understanding your product idea, business goals, target users, and technical requirements. This phase includes stakeholder interviews, user research, competitive analysis, and feasibility assessment.",
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
    desc: "We shape the product scope, define the feature set, create a technical roadmap, and establish the development plan. You get a clear document of what will be built, how, and when.",
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
    desc: "We create user flows, wireframes, high-fidelity UI screens, and interactive prototypes. The design is built around your users' needs and your business goals.",
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
    desc: "We design the system architecture, database schema, API contracts, and infrastructure setup. This ensures the product is built on a solid technical foundation.",
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
    desc: "We build the frontend, backend, APIs, integrations, and infrastructure in iterative sprint cycles. Code is reviewed, tested, and deployed continuously.",
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
    desc: "We run comprehensive testing including functionality, performance, security, responsiveness, and edge cases. Quality is built into every sprint, not tacked on at the end.",
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
    desc: "We deploy the product to production with proper infrastructure, monitoring, alerting, and backup strategies. Your product goes live with confidence.",
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
    desc: "After launch, we monitor performance, fix issues, roll out improvements, and provide ongoing technical support. We stay with you as your product grows.",
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
        title="From idea to deployment, with structure at every step."
        subtitle="A clear 8-step engineering process designed to take your product from concept to launch — and beyond."
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
                className="grid grid-cols-1 md:grid-cols-5 gap-6 rounded-xl border border-border bg-card p-6 md:p-8"
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
