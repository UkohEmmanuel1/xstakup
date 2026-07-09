"use client";

import Image from "next/image";
import type { CaseStudy } from "@/types";

interface DeploymentCardProps {
  caseStudy: CaseStudy;
  gradient: string;
}

export function DeploymentCard({ caseStudy, gradient }: DeploymentCardProps) {
  return (
    <div className="border border-card-border bg-card-bg rounded-xl h-full min-h-[200px] md:min-h-[260px] flex flex-col overflow-hidden">
      <div
        className="relative w-full h-36 md:h-44 overflow-hidden flex-shrink-0"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 bg-overlay" />
        {caseStudy.image && (
          <Image
            src={caseStudy.image}
            alt={`${caseStudy.title} logo`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover opacity-50"
          />
        )}
      </div>
      <div className="flex flex-col flex-grow p-8 md:p-10">
        <span className="text-xs font-semibold uppercase tracking-wider text-card-accent">
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
