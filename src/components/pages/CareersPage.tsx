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
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat max-lg:bg-scroll bg-fixed"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}
    >
      <div className="min-h-screen w-full bg-[#303030]/80 backdrop-blur-[1px]">
        <HeroBannerSection />
        <CompanyMissionSection />
        <OpenPositionsSection />
        <WhyJoinUsSection />
        <FAQSection />
        <FinalCTA />
      </div>
    </main>
  );
}
