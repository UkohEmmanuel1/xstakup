import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel, FinalCTA } from "@/components/Shared";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — XStakUp" }, { name: "description", content: "Join XStakUp. Engineer for scale." }] }),
  component: () => (
    <>
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-quantum/25 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <SectionLabel>Careers</SectionLabel>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient-quantum">Engineer for Scale.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're building Africa's premier engineering team. Open roles across
            backend, AI, Web3, and DevSecOps.
          </p>
          <a href="mailto:partnerships@xstakup.com" className="mt-10 inline-flex items-center gap-2 rounded-md bg-quantum-gradient px-6 py-3 text-sm font-medium text-white shadow-quantum">
            View Open Roles →
          </a>
        </div>
      </section>
      <FinalCTA />
    </>
  ),
});
