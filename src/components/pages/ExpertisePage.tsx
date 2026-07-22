import {
  HeroBannerSection,
  StatsStripSection,
  ExpertiseDetailSection,
  CaseStudiesSection,
  PipelineSection,
  TechStackSection,
} from "@/components/sections/expertise";
import { FinalCTA } from "@/components/common";

export function ExpertisePage() {
  return (
    <main className="min-h-screen w-full">
      <HeroBannerSection />
      <StatsStripSection />
      <ExpertiseDetailSection />
      <CaseStudiesSection />
      <PipelineSection />
      <TechStackSection />
      <FinalCTA />
    </main>
  );
}
