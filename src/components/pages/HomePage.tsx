import {
  HeroSection,
  PipelineSection,
  MarqueeSection,
  TestimonialSection,
  ExpertiseSection,
  FeaturedDeployments,
  GlobalReachSection,
} from "@/components/home";
import { FinalCTA } from "@/components/common";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PipelineSection />
      <MarqueeSection />
      <TestimonialSection />
      <ExpertiseSection />
      <FeaturedDeployments />
      <GlobalReachSection />
      <FinalCTA />
    </>
  );
}
