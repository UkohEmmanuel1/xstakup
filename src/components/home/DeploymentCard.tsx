"use client";

import type { CaseStudy } from "@/types";
import type { CardColor } from "@/types";

interface DeploymentCardProps {
  caseStudy: CaseStudy;
  gradient: string;
  color?: CardColor;
}

export function DeploymentCard({ caseStudy, gradient, color }: DeploymentCardProps) {
  const c = color ?? { border: "oklch(0.52 0.28 265 / 0.25)", hover: "oklch(0.52 0.28 265 / 0.5)", accent: "oklch(0.52 0.28 265 / 0.6)", bg: "oklch(0.21 0.08 265)" };

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-xl" style={{ border: `1px solid ${c.border}`, background: c.bg }}>
      <div
        className="relative w-full h-36 md:h-44 overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="flex flex-col flex-grow p-4 md:p-6">
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: c.accent }}>
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
