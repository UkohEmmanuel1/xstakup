import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PrimaryCTA({ children = "Initialize Your Build", to = "/contact" as const }: { children?: ReactNode; to?: "/contact" }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-md bg-quantum-gradient px-6 py-3 text-sm font-medium text-white shadow-quantum hover:shadow-glow transition-all hover:-translate-y-0.5"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function OutlineCTA({ children, to }: { children: ReactNode; to: "/clients" | "/about" | "/contact" }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground hover:border-signal hover:text-signal transition-colors"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-signal">
      <span className="h-px w-8 bg-signal" />
      {children}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div
          className="relative overflow-hidden rounded-2xl p-12 md:p-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, #0F1A7A 0%, #0F1A7A 60%, #1E2BFF 100%)",
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-signal/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto">
              Stop fighting technical debt. Let's engineer your solution.
            </h2>
            <p className="mt-5 text-white/70 max-w-xl mx-auto">
              Partner with a dedicated engineering team that ships elite,
              production-grade systems.
            </p>
            <div className="mt-10">
              <PrimaryCTA>Initialize Your Build</PrimaryCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
