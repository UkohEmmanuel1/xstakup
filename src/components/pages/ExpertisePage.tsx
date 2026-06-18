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
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat max-lg:bg-scroll bg-fixed"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}
    >
      <div className="min-h-screen w-full bg-black/80 backdrop-blur-[1px]">
        <HeroBannerSection />
        <StatsStripSection />
        <ExpertiseDetailSection />
        <CaseStudiesSection />
        <PipelineSection />
        <TechStackSection />
        <FinalCTA />
      </div>
    </main>
  );
}
