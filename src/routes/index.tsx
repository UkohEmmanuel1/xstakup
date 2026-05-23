import { createFileRoute, Link } from "@tanstack/react-router";
import { PrimaryCTA, OutlineCTA, SectionLabel, FinalCTA } from "@/components/Shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XStakUp — Custom Enterprise Software Development Partner" },
      { name: "description", content: "Your dedicated engineering team. XStakUp architects scalable web, mobile, AI, and Web3 applications for ambitious businesses." },
      { property: "og:title", content: "XStakUp — Custom Enterprise Software Development" },
      { property: "og:description", content: "Dedicated engineering team building scalable web, mobile, AI, and Web3 infrastructure." },
    ],
  }),
  component: HomePage,
});

const pipeline = [
  { n: "01", t: "System Strategy", d: "Clear technical roadmapping for complex software solutions aligned with your business goals." },
  { n: "02", t: "Architecture & UI/UX Design", d: "User-centered, interactive, and scalable system design built for your target audience." },
  { n: "03", t: "Full-Stack Development", d: "Robust, custom coding (web, mobile, and Web3) tailored to your exact specifications." },
  { n: "04", t: "DevSecOps & Support", d: "Secure, scalable deployments, post-launch monitoring, and 99.9% uptime maintenance." },
];

const expertise = [
  { t: "Product Engineering", d: "End-to-end development from your idea to launch.", i: "◇" },
  { t: "Web3 & Blockchain", d: "Smart contracts and decentralized infrastructure.", i: "⬡" },
  { t: "Web & SaaS Development", d: "Custom, high-performance web applications.", i: "▤" },
  { t: "Mobile Development", d: "High-performing iOS & Android applications.", i: "▢" },
  { t: "AI & Machine Learning", d: "Custom AI integrations to make your business smarter.", i: "✦" },
  { t: "Fintech Solutions", d: "Payment gateways and secure financial architecture.", i: "₿" },
  { t: "CTO-as-a-Service", d: "On-demand technical leadership to guide your internal team.", i: "◈" },
  { t: "DevSecOps", d: "Secure, scalable, and worry-free deployments for your peace of mind.", i: "⟁" },
];

const cases = [
  { t: "XPay", tag: "Fintech / Web3", d: "Crypto, gift card & fiat payment infrastructure with real-time multi-currency settlement." },
  { t: "Quik", tag: "AI / NLP", d: "AI-powered booking application that intelligently syncs availability and automates communication." },
  { t: "Cashflow Africa", tag: "Trade Finance", d: "Intra-African B2B trade finance platform digitizing invoicing and securing lending." },
];

const marqueeItems = ["React", "Node.js", "Solidity", "AWS", "Python", "Kubernetes", "PostgreSQL", "Go", "TypeScript", "OpenAI", "PayStack", "Stripe", "Web3.js", "GraphQL"];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-quantum/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse-glow" />
              <span className="text-muted-foreground">SYSTEM ONLINE</span>
              <span className="text-foreground/70">·</span>
              <span className="text-signal">Accepting new partnerships Q3 2026</span>
            </div>

            <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl">
              Your Partner in{" "}
              <span className="text-gradient-quantum">Custom Enterprise</span>{" "}
              Software Development.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              We are your dedicated engineering team. We architect scalable web,
              mobile, AI, and Web3 applications so you can focus on leading your
              market.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PrimaryCTA>Initialize Your Build</PrimaryCTA>
              <OutlineCTA to="/clients">View Client Success</OutlineCTA>
            </div>

            {/* Stats strip */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl glass w-full max-w-4xl">
              {[
                ["99.99%", "Average Uptime"],
                ["5M+", "Transactions"],
                ["10+", "Enterprise Builds"],
                ["0", "Security Breaches"],
              ].map(([v, l]) => (
                <div key={l} className="px-6 py-6 bg-[color:var(--void-surface)]/50">
                  <p className="font-mono text-2xl md:text-3xl font-bold text-foreground">{v}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="relative py-24 bg-[color:var(--void-section)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <SectionLabel>The Engineering Pipeline</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              Build confidently with a team that puts your product first.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pipeline.map((s) => (
              <div
                key={s.n}
                className="group relative rounded-xl glass p-6 hover:border-signal/40 hover:-translate-y-1 transition-all"
              >
                <div className="font-mono text-xs text-signal">{s.n}</div>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-signal/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF — MARQUEE */}
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
          <div className="flex animate-marquee gap-12 w-max">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-lg glass">
                <span className="h-2 w-2 rounded-full bg-signal" />
                <span className="font-mono text-sm whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="relative overflow-hidden rounded-2xl p-10 md:p-16"
            style={{ background: "linear-gradient(135deg, #0F1A7A 0%, #0A0B10 100%)" }}
          >
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-signal/20 blur-3xl" />
            <div className="relative">
              <span className="font-mono text-6xl text-signal/40 leading-none">"</span>
              <p className="mt-2 text-2xl md:text-3xl font-medium text-white leading-relaxed">
                XStakUp isn't a vendor — they're embedded in our roadmap. They
                shipped our payment infrastructure faster and more securely than
                any in-house team we'd hired. They engineer like founders.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-quantum-gradient" />
                <div>
                  <p className="font-semibold text-white">Adaeze Okonkwo</p>
                  <p className="text-sm text-white/60 font-mono">CTO, XPay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Explore Our Expertise</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Eight specialized practice areas, one accountable engineering team.
              Custom-built for the scale your business demands.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {expertise.map((e) => (
              <div
                key={e.t}
                className="group relative rounded-xl glass p-6 hover:border-signal hover:shadow-glow transition-all cursor-pointer"
              >
                <div className="font-mono text-3xl text-signal/80 group-hover:text-signal transition-colors">
                  {e.i}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                <div className="mt-6 flex items-center gap-2 font-mono text-xs text-signal opacity-0 group-hover:opacity-100 transition-opacity">
                  EXPLORE <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DEPLOYMENTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Featured Deployments</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                High-Performance Systems We've Engineered.
              </h2>
            </div>
            <Link to="/clients" className="text-sm text-signal hover:underline font-mono">
              VIEW ALL DEPLOYMENTS →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cases.map((c, i) => (
              <div
                key={c.t}
                className="group rounded-xl glass overflow-hidden hover:border-signal/40 transition-all"
              >
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{
                    background: i === 0
                      ? "linear-gradient(135deg, #1E2BFF, #0F1A7A)"
                      : i === 1
                      ? "linear-gradient(135deg, #7A5CFF, #1E2BFF)"
                      : "linear-gradient(135deg, #00D1FF, #0F1A7A)",
                  }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-5xl font-bold text-white/90">{c.t}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-signal">{c.tag}</span>
                  <h3 className="mt-3 text-xl font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                  <Link to="/clients" className="mt-5 inline-flex items-center gap-2 text-sm text-foreground hover:text-signal transition-colors">
                    View Architecture <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Global Reach</SectionLabel>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold">
              We build impactful technology for businesses worldwide.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Let's build yours. Headquartered in Lagos, deploying systems across
              Africa, Europe, and the Americas.
            </p>
            <div className="mt-8">
              <PrimaryCTA>Initialize Your Build</PrimaryCTA>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-quantum/20 blur-3xl animate-pulse-glow" />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <radialGradient id="globe">
                  <stop offset="0%" stopColor="#1E2BFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0A0B10" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#globe)" />
              <circle cx="200" cy="200" r="180" fill="none" stroke="#1E2BFF" strokeOpacity="0.3" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="#00D1FF" strokeOpacity="0.2" strokeDasharray="2 4" />
              <circle cx="200" cy="200" r="100" fill="none" stroke="#7A5CFF" strokeOpacity="0.2" strokeDasharray="2 4" />
              {/* Latitude lines */}
              {[0, 1, 2, 3, 4].map(i => (
                <ellipse key={i} cx="200" cy="200" rx="180" ry={180 - i * 35} fill="none" stroke="#1E2BFF" strokeOpacity="0.15" />
              ))}
              {/* Nigeria pin */}
              <g>
                <circle cx="210" cy="220" r="6" fill="#00D1FF">
                  <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="210" cy="220" r="3" fill="#fff" />
                <text x="220" y="218" fill="#F9FAFB" fontSize="10" fontFamily="monospace">LAGOS, NG</text>
              </g>
              {/* Other deployment dots */}
              {[[120, 140], [280, 160], [310, 240], [150, 280], [240, 110]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="#7A5CFF" opacity="0.7" />
              ))}
            </svg>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
