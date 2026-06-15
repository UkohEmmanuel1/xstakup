import {
  AboutHeroSection,
  NarrativeSection,
  MissionVisionSection,
  DifferentiatorsSection,
  ValuesSection,
  LeadershipSection,
} from "@/components/sections/about";
import { FinalCTA } from "@/components/common";

export function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <NarrativeSection />
      <MissionVisionSection />
      <DifferentiatorsSection />
      <ValuesSection />
      <LeadershipSection />
      <FinalCTA />
    </>
  );
}
