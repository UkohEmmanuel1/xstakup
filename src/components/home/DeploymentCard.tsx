"use client";

import Image from "next/image";
import type { CaseStudy } from "@/types";

interface DeploymentCardProps {
  caseStudy: CaseStudy;
  gradient: string;
}

export function DeploymentCard({ caseStudy, gradient }: DeploymentCardProps) {
  return (
    <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-[color:var(--void-surface)]/50 backdrop-blur-sm">
      <div className="relative w-full h-44 overflow-hidden bg-[color:var(--void-section)]">
        <div className="absolute inset-0 opacity-20" style={{ background: gradient }} />
        <Image
          src="/assets/pattern.webp"
          alt={caseStudy.title || "Deployment Featured Image"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 hover:scale-105"
        />
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
