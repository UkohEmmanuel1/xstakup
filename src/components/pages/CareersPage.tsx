import {
  HeroBannerSection,
  CompanyMissionSection,
  OpenPositionsSection,
  WhyJoinUsSection,
  FAQSection,
} from "@/components/sections/careers";
import { FinalCTA } from "@/components/common";

export function CareersPage() {
  return (
    <main className="min-h-screen w-full">
      <HeroBannerSection />
      <CompanyMissionSection />
      <OpenPositionsSection />
      <WhyJoinUsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
