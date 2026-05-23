import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel, FinalCTA } from "@/components/Shared";

export const Route = createFileRoute("/expertise")({
  head: () => ({ meta: [{ title: "Expertise — XStakUp" }, { name: "description", content: "Eight specialized engineering practices: product, Web3, AI, fintech, mobile, DevSecOps and more." }] }),
  component: () => (
    <>
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-quantum/25 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <SectionLabel>Capabilities</SectionLabel>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient-quantum">Engineering Disciplines</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Eight specialized practices powering custom enterprise software.
            Detailed capability pages coming soon.
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  ),
});
