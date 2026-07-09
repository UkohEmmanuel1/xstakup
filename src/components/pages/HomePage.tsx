import {
  HeroSection,
  PipelineSection,
  MarqueeSection,
  TestimonialSection,
  ExpertiseSection,
  FeaturedDeployments,
} from "@/components/home";
import { FinalCTA } from "@/components/common";

export function HomePage() {
  return (
    // --- WRAPPER: Full page background image ---
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat max-lg:bg-scroll bg-fixed"
      style={{
        backgroundImage: "url('/assets/background.png')",
      }}
    >
      {/* --- OPTIONAL OVERLAY: Makes text readable --- */}
      {/* Change bg-[#303030]/40 to bg-white/10, or remove this <div> entirely if you don't want it */}
      <div className="min-h-screen w-full bg-void-section/80 backdrop-blur-[1px]">
        <HeroSection />
        <PipelineSection />
        <MarqueeSection />
        <ExpertiseSection />
        <FeaturedDeployments />
        <TestimonialSection />
        <FinalCTA />
      </div>
    </main>
  );
}
