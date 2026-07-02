"use client";

import { SubPageHero } from "@/components/common";

export function ClientsHeroSection() {
  return (
    <SubPageHero
      title={
        <>
          <span className="text-gradient-blue">Enterprise Software Case Studies</span>{" "}
          Client Success Stories
        </>
      }
      subtitle="Real world enterprise software deployments: fintech, AI, Web3, and cloud infrastructure engineered for market leading businesses."
      bgImage="/assets/clients.webp"
    />
  );
}
