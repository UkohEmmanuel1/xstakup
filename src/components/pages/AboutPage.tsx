import {
  AboutHeroSection,
  NarrativeSection,
  MissionVisionSection,
  DifferentiatorsSection,
  ValuesSection,
  LeadershipSection
} from "@/components/sections/about";
import { FinalCTA } from "@/components/common";

export function AboutPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat max-lg:bg-scroll bg-fixed"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}
    >
      <div className="min-h-screen w-full bg-[#303030]/80 backdrop-blur-[1px]">
        <AboutHeroSection />
        <NarrativeSection />
        <MissionVisionSection />
        <DifferentiatorsSection />
        <ValuesSection />
        <LeadershipSection />
        <FinalCTA />
      </div>
    </main>
  );
}
