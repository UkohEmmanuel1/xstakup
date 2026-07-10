"use client";

import Image from "next/image";
import type { CaseStudy } from "@/types";

interface DeploymentCardProps {
  caseStudy: CaseStudy;
  gradient: string;
}

export function DeploymentCard({ caseStudy, gradient }: DeploymentCardProps) {
  return (
    <div className="border border-card-border bg-card-bg rounded-xl h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-card-hover">
      <div
        className="relative w-full h-56 md:h-72 overflow-hidden flex-shrink-0"
        style={{ background: gradient }}
      >
        <div className="absolute top-0 left-3 right-3 h-[2px] rounded-full bg-card-accent z-20" />
        <div className="absolute inset-0 bg-overlay/40" />
        {caseStudy.image && (
          <Image
            src={caseStudy.image}
            alt={`${caseStudy.title} logo`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain opacity-80"
          />
        )}
        <span className="absolute top-3 left-3 rounded-lg bg-[#303030]/90 backdrop-blur-md px-3 py-1.5 shadow-lg border-l-2 border-blue text-blue text-xs font-bold uppercase tracking-wider z-10">
          {caseStudy.tag}
        </span>
      </div>
      <div className="flex flex-col flex-grow p-4 md:p-6">
        <h3 className="text-xl font-semibold text-white">{caseStudy.title}</h3>
        <p className="mt-2 text-base text-white/80 line-clamp-3 leading-relaxed">
          {caseStudy.description}
        </p>
      </div>
    </div>
  );
}
