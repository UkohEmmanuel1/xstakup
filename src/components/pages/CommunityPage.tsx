import {
  HeroBannerSection,
  StatsStripSection,
  EventsSection,
  BenefitsSection,
  OpenSourceSection,
  TestimonialsSection,
} from "@/components/sections/community";
import { FinalCTA } from "@/components/common";

export function CommunityPage() {
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
        <EventsSection />
        <BenefitsSection />
        <OpenSourceSection />
        <TestimonialsSection />
        <FinalCTA />
      </div>
    </main>
  );
}
