import { AnimatedSection } from "@/components/common";

const metrics = [
  "99.99% Average Uptime",
  "5M+ Transactions Processed",
  "Zero Security Breaches",
  "10+ Enterprise Deployments",
  "Scalable Microservices",
  "24/7 DevSecOps Coverage",
  "100+ Engineers Deployed",
];

export function ImpactMarqueeSection() {
  return (
    <AnimatedSection>
      <section className="py-16 overflow-hidden border-b border-border">
        <div className="relative">
          <div className="flex animate-marquee-fast gap-8 w-max font-mono text-2xl md:text-4xl font-bold group hover:[animation-play-state:paused]">
            {[...metrics, ...metrics, ...metrics].map((m, i) => (
              <div key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="text-signal">{m}</span>
                <span className="text-muted-foreground">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
