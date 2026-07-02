"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { AnimatedSection, SectionLabel, CTAButton, FinalCTA } from "@/components/common";
import { caseStudies, caseStudiesFull } from "@/data";

interface Props {
  slug: string;
}

export function WorkDetailPageComponent({ slug }: Props) {
  const study = caseStudiesFull.find((c) => c.slug === slug);
  const currentIndex = caseStudiesFull.findIndex((c) => c.slug === slug);
  const next =
    currentIndex >= 0 && currentIndex < caseStudiesFull.length - 1
      ? caseStudiesFull[currentIndex + 1]
      : null;
  const prev = currentIndex > 0 ? caseStudiesFull[currentIndex - 1] : null;

  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md px-6">
          <h1 className="text-4xl font-heading font-bold text-foreground">Case study not found</h1>
          <p className="mt-4 text-muted-foreground">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-2 text-blue hover:text-blue/80 transition-colors"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero title={study.title} subtitle={study.summary}>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-medium text-blue bg-blue/10 px-3 py-1 rounded-full">
            {study.industry}
          </span>
          <span className="text-xs text-white/60">{study.platform}</span>
          {study.tags.map((t) => (
            <span key={t} className="text-xs text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </PageHero>

      <AnimatedSection className="py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Problem</SectionLabel>
              <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
                The challenge
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {study.problem}
              </p>
            </div>
            <div>
              <SectionLabel>Goal</SectionLabel>
              <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold text-foreground tracking-tight">
                What we set out to achieve
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{study.goal}</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {study.scope && (
        <AnimatedSection className="py-16 md:py-24 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <SectionLabel>Scope</SectionLabel>
              <h2 className="mt-4 text-2xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
                Product scope
              </h2>
              <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
                {study.scope}
              </p>
            </div>
          </div>
        </AnimatedSection>
      )}

      {study.features && study.features.length > 0 && (
        <AnimatedSection className="py-16 md:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <SectionLabel>Features</SectionLabel>
              <h2 className="mt-4 text-2xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
                What we built
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {study.features.map((f) => (
                <div key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle size={16} className="text-blue flex-shrink-0 mt-0.5" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      {study.techStack && study.techStack.length > 0 && (
        <AnimatedSection className="py-16 md:py-24 border-b border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <SectionLabel>Technology</SectionLabel>
              <h2 className="mt-4 text-2xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
                Tech stack
              </h2>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {study.techStack.map((t) => (
                  <span
                    key={t}
                    className="text-sm font-medium text-foreground bg-card border border-border px-4 py-2 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      )}

      {study.outcome && (
        <AnimatedSection className="py-16 md:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto">
              <SectionLabel>Outcome</SectionLabel>
              <h2 className="mt-4 text-2xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
                The result
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                {study.outcome}
              </p>
            </div>
          </div>
        </AnimatedSection>
      )}

      <section className="py-16 md:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              {prev && (
                <Link
                  href={`/work/${prev.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue transition-colors"
                >
                  <ArrowLeft size={16} /> {prev.title}
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link
                  href={`/work/${next.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue transition-colors"
                >
                  Next: {next.title} <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
