import { createFileRoute } from "@tanstack/react-router";
import { OutlineCTA, SectionLabel, FinalCTA } from "@/components/Shared";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Client Deployments — High-Performance Systems by XStakUp" },
      { name: "description", content: "Explore enterprise software, fintech infrastructure, and AI applications engineered by XStakUp: XPay, Quik, Cashflow Africa, and more." },
      { property: "og:title", content: "Client Deployments — XStakUp" },
      { property: "og:description", content: "Market-leading platforms engineered by XStakUp." },
    ],
  }),
  component: ClientsPage,
});

const featured = [
  {
    name: "XPay",
    tag: "Fintech & Web3 Infrastructure",
    headline: "Bridging Crypto, Gift Cards, and Fiat Payments.",
    challenge: "Building a high-liquidity, zero-latency payment gateway capable of processing traditional and digital assets seamlessly across borders.",
    solution: "We engineered a highly secure, scalable payment architecture featuring real-time transaction ledgers, enterprise-grade fraud protection, and instant multi-currency settlements.",
    stack: ["React", "Node.js", "Web3.js", "AWS Secure Enclave", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #1E2BFF, #0F1A7A)",
  },
  {
    name: "Quik",
    tag: "AI & Machine Learning",
    headline: "The Intelligent AI Booking Engine.",
    challenge: "Traditional scheduling apps require manual data entry. The market needed an autonomous agent capable of handling natural language requests and complex calendar integrations.",
    solution: "XStakUp developed a custom NLP booking application that intelligently syncs availability, manages conflicts, and automates client communication without human intervention.",
    stack: ["Python", "OpenAI API", "React Native", "GraphQL", "Redis"],
    gradient: "linear-gradient(135deg, #7A5CFF, #1E2BFF)",
  },
  {
    name: "Cashflow Africa",
    tag: "Enterprise SaaS & Trade Finance",
    headline: "Powering Intra-African Trade.",
    challenge: "Cross-border B2B trade in Africa suffers from fragmented financial data and slow liquidity cycles.",
    solution: "We deployed an enterprise-grade trade finance platform that digitizes invoicing, secures B2B lending, and provides real-time financial dashboards for high-volume merchants.",
    stack: ["Vue.js", "GoLang", "Kubernetes", "Snowflake", "Docker"],
    gradient: "linear-gradient(135deg, #00D1FF, #0F1A7A)",
  },
];

const ecosystem = [
  { t: "Digidrop", d: "Web3 social platform with on-chain identity.", i: "⬡" },
  { t: "BePopula", d: "Agency infrastructure & creator monetization.", i: "◇" },
  { t: "MediCore ERP", d: "Healthcare resource planning at hospital scale.", i: "✚" },
  { t: "LearnStack", d: "EdTech platform with adaptive learning paths.", i: "✦" },
  { t: "FleetOps", d: "Logistics command center & real-time tracking.", i: "▤" },
  { t: "GreenLedger", d: "Carbon credit tokenization on-chain.", i: "⟁" },
  { t: "PulseHR", d: "Distributed-team HR & payroll for Africa.", i: "◈" },
  { t: "VaultSign", d: "E-signature & document custody platform.", i: "▢" },
];

const metrics = [
  "99.99% Average Uptime",
  "5M+ Transactions Processed",
  "Zero Security Breaches",
  "10+ Enterprise Deployments",
  "Scalable Microservices",
  "24/7 DevSecOps Coverage",
  "100+ Engineers Deployed",
];

function ClientsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-quantum/25 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 text-center">
          <SectionLabel>Client Deployments</SectionLabel>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto">
            <span className="text-gradient-quantum">High-Performance Systems</span>{" "}
            Built for Scale.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            We don't just write code; we architect market-leading platforms.
            Explore the enterprise software, fintech infrastructure, and AI
            applications engineered by XStakUp.
          </p>
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-32">
          {featured.map((c, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={c.name}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Mockup */}
                <div className="relative">
                  <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-40" style={{ background: c.gradient }} />
                  <div className="relative rounded-2xl glass-strong overflow-hidden aspect-[4/3]">
                    <div className="absolute inset-0" style={{ background: c.gradient, opacity: 0.85 }} />
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    {/* Mock interface */}
                    <div className="absolute inset-6 rounded-lg bg-[color:var(--void-main)]/85 backdrop-blur-sm p-4 flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                        <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                        <span className="ml-2 font-mono text-[10px] text-muted-foreground">{c.name.toLowerCase()}.xstakup.io</span>
                      </div>
                      <div className="flex-1 grid grid-cols-3 gap-2">
                        <div className="col-span-2 rounded bg-white/5 p-3 flex flex-col gap-2">
                          <div className="h-2 w-1/3 rounded bg-signal/60" />
                          <div className="h-8 rounded bg-quantum/20" />
                          <div className="h-2 w-2/3 rounded bg-white/10" />
                          <div className="h-2 w-1/2 rounded bg-white/10" />
                          <div className="mt-auto grid grid-cols-3 gap-1">
                            <div className="h-6 rounded bg-quantum/40" />
                            <div className="h-6 rounded bg-violet/30" />
                            <div className="h-6 rounded bg-signal/30" />
                          </div>
                        </div>
                        <div className="rounded bg-white/5 p-3 flex flex-col gap-2">
                          <div className="h-2 w-2/3 rounded bg-signal/60" />
                          {[1, 2, 3, 4].map(k => (
                            <div key={k} className="h-1.5 rounded bg-white/10" style={{ width: `${50 + k * 10}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="inline-block font-mono text-xs uppercase tracking-widest text-signal border border-signal/30 rounded-full px-3 py-1">
                    {c.tag}
                  </span>
                  <h2 className="mt-5 text-3xl md:text-4xl font-bold">
                    <span className="text-gradient-quantum">{c.name}:</span>{" "}
                    <span className="text-foreground">{c.headline}</span>
                  </h2>
                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The Challenge</p>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">The Solution</p>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tech Stack</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {c.stack.map((s) => (
                          <span key={s} className="font-mono text-xs px-2.5 py-1 rounded border border-border bg-[color:var(--void-surface)]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <OutlineCTA to="/contact">View Architecture Details</OutlineCTA>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ECOSYSTEM GRID */}
      <section className="py-24 bg-[color:var(--void-section)] border-y border-border mt-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>The Broader Ecosystem</SectionLabel>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Other Notable Deployments</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Sleek systems shipped across Web3, healthcare, EdTech, and
              enterprise logistics.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((e) => (
              <a
                key={e.t}
                href="#"
                className="group rounded-xl glass p-6 hover:border-quantum hover:shadow-quantum transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono text-2xl text-signal">{e.i}</div>
                  <span className="text-muted-foreground group-hover:text-signal group-hover:translate-x-1 transition-all">→</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT MARQUEE */}
      <section className="py-16 overflow-hidden border-b border-border">
        <div className="relative">
          <div className="flex animate-marquee-fast gap-8 w-max font-mono text-2xl md:text-4xl font-bold">
            {[...metrics, ...metrics, ...metrics].map((m, i) => (
              <div key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="text-signal">{m}</span>
                <span className="text-muted-foreground">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — custom variant */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div
            className="relative overflow-hidden rounded-2xl p-12 md:p-20 text-center"
            style={{ background: "linear-gradient(135deg, #0F1A7A 0%, #0F1A7A 60%, #1E2BFF 100%)" }}
          >
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-signal/30 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
                Your Product Deserves Elite Engineering.
              </h2>
              <p className="mt-5 text-white/70 max-w-xl mx-auto">
                Don't risk your launch on outsourced templates. Partner with the
                dedicated engineers at XStakUp.
              </p>
              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[color:var(--deep-core)] hover:bg-signal hover:text-white transition-all"
                >
                  Initialize Your Build <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
