"use client";

import type { CaseStudy } from "@/types";

interface DeploymentCardProps {
  caseStudy: CaseStudy;
  gradient: string;
}

export function DeploymentCard({ caseStudy, gradient }: DeploymentCardProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-xl bg-card-solid-bg">
      <div
        className="relative w-full h-36 md:h-44 overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="flex flex-col flex-grow p-4 md:p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
          {caseStudy.tag}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-white">{caseStudy.title}</h3>
        <p className="mt-3 text-base text-white/80 line-clamp-3 leading-relaxed">
          {caseStudy.description}
        </p>
      </div>
    </div>
  );
}
