"use client";

import { SubPageHero } from "@/components/common";

export function ClientsHeroSection() {
  return (
    <SubPageHero
      title={
        <>
          <span className="text-gradient-blue">Client</span> Success Stories
        </>
      }
      subtitle="Real-world fintech, AI, Web3, and cloud deployments."
      bgImage="/assets/clients.webp"
    />
  );
}
