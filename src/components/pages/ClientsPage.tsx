import {
  ClientsHeroSection,
  FeaturedCaseStudiesSection,
  ImpactMarqueeSection,
} from "@/components/sections/clients";
import { FinalCTA } from "@/components/common";

export function ClientsPage() {
  return (
    <main className="min-h-screen w-full">
      <ClientsHeroSection />
      <FeaturedCaseStudiesSection />
      <ImpactMarqueeSection />
      <FinalCTA />
    </main>
  );
}
