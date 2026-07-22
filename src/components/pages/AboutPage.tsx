import {
  AboutHeroSection,
  NarrativeSection,
  DifferentiatorsSection,
  ValuesSection,
  LeadershipSection,
} from "@/components/sections/about";
import { FinalCTA } from "@/components/common";

export function AboutPage() {
  return (
    <main className="min-h-screen w-full">
      <AboutHeroSection />
      <NarrativeSection />
      <DifferentiatorsSection />
      <ValuesSection />
      <LeadershipSection />
      <FinalCTA />
    </main>
  );
}
