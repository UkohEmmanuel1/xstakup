import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionLabel, AnimatedSection, staggerContainer } from "@/components/common";
import { DeploymentCard } from "./DeploymentCard";
import { cases, caseGradients } from "@/data/home";

export function FeaturedDeployments() {
  return (
    <AnimatedSection>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Featured Deployments</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                High-Performance Systems We&apos;ve Engineered.
              </h2>
            </div>
            <Link to="/clients" className="text-sm text-signal hover:underline font-mono">
              VIEW ALL DEPLOYMENTS →
            </Link>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {cases.map((c, i) => (
              <DeploymentCard key={c.t} caseStudy={c} gradient={caseGradients[i]} />
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
