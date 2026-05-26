import { SectionLabel, AnimatedSection } from "@/components/common";
import { marqueeItems } from "@/data/home";

export function MarqueeSection() {
  return (
    <AnimatedSection>
      <section className="py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
          <SectionLabel>Stack & Partners</SectionLabel>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold max-w-3xl mx-auto">
            Innovative systems built for ambitious companies.
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee gap-12 w-max group hover:[animation-play-state:paused]">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-lg glass">
                <span className="h-2 w-2 rounded-full bg-signal" />
                <span className="font-mono text-sm whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
