import { AnimatedSection } from "@/components/common";
import { marqueeItems } from "@/data/home";

export function TechStackSection() {
  return (
    <AnimatedSection>
      <section className="border-y border-border overflow-hidden">
        <div className="section-container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Our <span className="text-gradient-blue">Tech Stack</span>
            </h2>
            <p className="section-subtitle mx-auto">Full-stack, cloud, blockchain & AI.</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div
            className="flex animate-marquee gap-6 md:gap-12 w-max group hover:[animation-play-state:paused]"
            role="list"
            aria-label="Technology stack"
          >
            {marqueeItems.map((item, i) => (
              <div
                key={i}
                role="listitem"
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/15"
              >
                <span className="h-2 w-2 rounded-full bg-blue" />
                <span className="text-sm whitespace-nowrap text-muted-foreground">{item}</span>
              </div>
            ))}
            <div aria-hidden="true" className="flex gap-6 md:gap-12">
              {marqueeItems.map((item, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/15"
                >
                  <span className="h-2 w-2 rounded-full bg-blue" />
                  <span className="text-sm whitespace-nowrap text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
