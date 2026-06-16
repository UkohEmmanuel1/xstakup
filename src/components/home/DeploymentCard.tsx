"use client";

import type { CaseStudy } from "@/types";

interface DeploymentCardProps {
  caseStudy: CaseStudy;
  gradient: string;
}

export function DeploymentCard({ caseStudy, gradient }: DeploymentCardProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-[color:var(--void-surface)]/50 backdrop-blur-sm">
      <div
        className="relative w-full h-36 md:h-44 overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {caseStudy.tag}
        </span>
        <h3 className="mt-2 text-2xl font-bold text-foreground">{caseStudy.title}</h3>
        <p className="mt-4 text-base md:text-lg text-muted-foreground line-clamp-3 leading-relaxed">
          {caseStudy.description}
        </p>
      </div>
    </div>
  );
}
