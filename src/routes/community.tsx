import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel, FinalCTA } from "@/components/Shared";

export const Route = createFileRoute("/community")({
  head: () => ({ meta: [{ title: "Community — XStakUp" }, { name: "description", content: "Join the XStakUp engineering community across Africa." }] }),
  component: () => (
    <>
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-violet/25 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <SectionLabel>Community</SectionLabel>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-gradient-quantum">Engineers Building Together</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Meetups, technical talks, and open-source contributions powering
            Africa's next generation of builders.
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  ),
});
