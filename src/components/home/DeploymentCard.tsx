"use client";

import Image from "next/image";
import type { CaseStudy } from "@/types";

interface DeploymentCardProps {
  caseStudy: CaseStudy;
  gradient: string;
}

export function DeploymentCard({ caseStudy, gradient }: DeploymentCardProps) {
  return (
    <div className="border border-border bg-card rounded-xl h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/30">
      <div
        className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0"
        style={{ background: gradient }}
      >
        <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full bg-blue z-20" />
        {caseStudy.image && (
          <Image
            src={caseStudy.image}
            alt={`${caseStudy.title} logo`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        )}
        <span className="absolute top-3 left-3 rounded-lg bg-[color:var(--void-surface)]/90 backdrop-blur-md px-3 py-1.5 shadow-lg border-l-2 border-blue text-blue text-xs font-bold uppercase tracking-wider z-10">
          {caseStudy.tag}
        </span>
      </div>
      <div className="flex flex-col flex-grow p-4 md:p-6">
        <h3 className="text-xl font-semibold text-foreground">{caseStudy.title}</h3>
        <p className="mt-2 text-base text-muted-foreground line-clamp-3 leading-relaxed">
          {caseStudy.description}
        </p>
      </div>
    </div>
  );
}
