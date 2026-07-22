import {
  HeroBannerSection,
  StatsStripSection,
  EventsSection,
  BenefitsSection,
  OpenSourceSection,
} from "@/components/sections/community";
import { FinalCTA } from "@/components/common";
import { TestimonialSection } from "@/components/home";

export function CommunityPage() {
  return (
    <main className="min-h-screen w-full">
      <HeroBannerSection />
      <StatsStripSection />
      <EventsSection />
      <BenefitsSection />
      <OpenSourceSection />
      <TestimonialSection />
      <FinalCTA />
    </main>
  );
}
