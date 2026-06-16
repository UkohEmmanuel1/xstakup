import { AnimatedSection } from "@/components/common";
import { marqueeItems } from "@/data/home";

export function MarqueeSection() {
  return (
    <AnimatedSection>
      <section className="py-20 relative bg-[color:var(--void-section)] border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
          <h2 className="mt-4 text-2xl md:text-4xl font-bold max-w-3xl mx-auto">
            Trusted by Industry Leaders: Enterprise Technology Stack
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Our engineering team specializes in modern frameworks, cloud infrastructure, blockchain
            protocols, and AI platforms.
          </p>
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
                <span className="h-2 w-2 rounded-full bg-signal" />
                <span className="font-mono text-sm whitespace-nowrap text-foreground/80">
                  {item}
                </span>
              </div>
            ))}
            <div aria-hidden="true" className="flex gap-6 md:gap-12">
              {marqueeItems.map((item, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/15"
                >
                  <span className="h-2 w-2 rounded-full bg-signal" />
                  <span className="font-mono text-sm whitespace-nowrap text-foreground/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
