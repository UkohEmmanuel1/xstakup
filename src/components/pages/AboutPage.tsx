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
      <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/about.webp')" }}
      >
        <div className="absolute inset-0 bg-[color:var(--void-main)]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--void-main)] via-transparent to-[color:var(--void-main)]/50" />
        <div className="relative">
          <NarrativeSection />
          <DifferentiatorsSection />
          <ValuesSection />
          <LeadershipSection />
        </div>
      </div>
      <FinalCTA />
    </main>
  );
}
