import {
  ClientsHeroSection,
  FeaturedCaseStudiesSection,
  ImpactMarqueeSection,
} from "@/components/sections/clients";
import { FinalCTA } from "@/components/common";

export function ClientsPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat max-lg:bg-scroll bg-fixed"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}
    >
      <div className="min-h-screen w-full bg-[#303030]/80 backdrop-blur-[1px]">
        <ClientsHeroSection />
        <FeaturedCaseStudiesSection />
        <ImpactMarqueeSection />
        <FinalCTA />
      </div>
    </main>
  );
}
