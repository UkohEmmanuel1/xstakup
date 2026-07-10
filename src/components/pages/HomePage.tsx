import {
  HeroSection,
  PipelineSection,
  MarqueeSection,
  TestimonialSection,
  ExpertiseSection,
  FeaturedDeployments,
} from "@/components/home";
import { FinalCTA } from "@/components/common";

export function HomePage() {
  return (
    <main className="min-h-screen w-full bg-void-section">
      <HeroSection />
      <PipelineSection />
      <MarqueeSection />
      <ExpertiseSection />
      <FeaturedDeployments />
      <TestimonialSection />
      <FinalCTA />
    </main>
  );
}
