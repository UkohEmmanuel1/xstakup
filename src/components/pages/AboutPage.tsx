import {
  AboutHeroSection,
  NarrativeSection,
  MissionVisionSection,
  DifferentiatorsSection,
  ValuesSection,
  LeadershipSection,
  GlobalFootprintSection,
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
      <GlobalFootprintSection />
      <FinalCTA />
    </>
  );
}
