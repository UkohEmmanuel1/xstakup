"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, CTAButton, FinalCTA } from "@/components/common";
import { services } from "@/data";
import {
  CodeIcon,
  GlobeIcon,
  SmartphoneIcon,
  CloudIcon,
  BrainIcon,
  WalletIcon,
  HexagonIcon,
  ServerIcon,
} from "@/components/common/Icons";

const iconMap: Record<string, React.ElementType> = {
  code: CodeIcon,
  globe: GlobeIcon,
  smartphone: SmartphoneIcon,
  cloud: CloudIcon,
  brain: BrainIcon,
  wallet: WalletIcon,
  hexagon: HexagonIcon,
  server: ServerIcon,
};

interface Props {
  serviceId: string;
}

export function ServiceDetailPageComponent({ serviceId }: Props) {
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md px-6">
          <h1 className="text-4xl font-heading font-bold text-foreground">Service not found</h1>
          <p className="mt-4 text-muted-foreground">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex items-center gap-2 text-blue hover:text-blue/80 transition-colors"
          >
            <ArrowLeft size={16} /> Back to services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = iconMap[service.icon] || CodeIcon;

  return (
    <main>
      <PageHero title={service.title} subtitle={service.description}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton
            href="/contact"
            className="bg-gradient-primary text-white shadow-lg shadow-electric/25"
          >
            Start a Project
          </CTAButton>
          <CTAButton href="/contact" className="border-white/20 text-white hover:bg-white/10">
            Book a Consultation
          </CTAButton>
        </div>
      </PageHero>

      <AnimatedSection>
        <section className="relative bg-[color:var(--void-surface)]">
          <div className="section-divider" />
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
                  What we deliver
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-card p-8 md:p-10">
                  <div className="h-12 w-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Key deliverables</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle size={16} className="text-blue flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative bg-[color:var(--void-section)]">
          <div className="section-divider" />
          <div className="section-container">
            <div className="section-header text-center">
              <h2 className="section-title">Our delivery process.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "We understand your product idea, users, and requirements.",
                },
                {
                  num: "02",
                  title: "Planning",
                  desc: "We define scope, architecture, roadmap, and timeline.",
                },
                {
                  num: "03",
                  title: "Development",
                  desc: "We build in sprint cycles with testing and reviews.",
                },
                {
                  num: "04",
                  title: "Launch",
                  desc: "We deploy, monitor, and support the product post-launch.",
                },
              ].map((step) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-card p-8 md:p-10"
                >
                  <span className="text-3xl font-bold text-blue/30">{step.num}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative bg-[color:var(--void-surface)]">
          <div className="section-divider" />
          <div className="section-container">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
                  Who needs this
                </h2>
              </div>
              <div className="flex-1 space-y-4">
                <div className="rounded-xl border border-border bg-card p-8 md:p-10">
                  <h3 className="text-sm font-bold text-foreground mb-1">
                    Startups &amp; founders
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Turn your idea into a working product.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-8 md:p-10">
                  <h3 className="text-sm font-bold text-foreground mb-1">Growing businesses</h3>
                  <p className="text-sm text-muted-foreground">
                    Scale your product and add features.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-8 md:p-10">
                  <h3 className="text-sm font-bold text-foreground mb-1">Enterprise teams</h3>
                  <p className="text-sm text-muted-foreground">
                    Extra engineering capacity when you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="relative bg-blue-gradient py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Build with {service.title}.
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Tell us about your project for a plan and timeline.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/contact" className="bg-white text-blue hover:bg-white/90 shadow-lg">
                Start a Project
              </CTAButton>
              <CTAButton href="/contact" className="border-white/30 text-white hover:bg-white/10">
                Book a Consultation
              </CTAButton>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <FinalCTA />
    </main>
  );
}
