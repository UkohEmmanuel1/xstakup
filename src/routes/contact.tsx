import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/Shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Initialize Your Build — Contact XStakUp" },
      { name: "description", content: "Start a partnership with XStakUp. Tell us about your product and we'll architect a scalable solution." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[80vh]">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-quantum/30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16">
        <div>
          <SectionLabel>Initialize Your Build</SectionLabel>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient-quantum">engineer your solution.</span>
          </h1>
          <p className="mt-6 text-muted-foreground">
            Tell us about your product. A senior engineer will respond within 24
            hours with a technical roadmap proposal.
          </p>
          <div className="mt-12 space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">Direct Contact</p>
              <a href="mailto:partnerships@xstakup.com" className="mt-2 block text-lg text-foreground hover:text-signal">
                partnerships@xstakup.com
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">Engineering HQ</p>
              <p className="mt-2 text-foreground">Lagos, Nigeria</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">Response Time</p>
              <p className="mt-2 text-foreground">&lt; 24 hours</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="rounded-2xl glass-strong p-8 space-y-5 h-fit"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="mx-auto h-14 w-14 rounded-full bg-quantum-gradient flex items-center justify-center text-2xl">✓</div>
              <h3 className="mt-6 text-2xl font-bold">Build initialized.</h3>
              <p className="mt-3 text-muted-foreground">A senior engineer will reach out within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" name="name" />
                <Field label="Work Email" name="email" type="email" />
              </div>
              <Field label="Company" name="company" />
              <Field label="Project Type" name="type" placeholder="Fintech, AI, Web3, SaaS..." />
              <div>
                <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Project Brief</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full rounded-md bg-[color:var(--void-main)] border border-border px-4 py-3 text-foreground focus:border-signal focus:outline-none transition-colors"
                  placeholder="Tell us about the system you need to engineer..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-quantum-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-quantum hover:shadow-glow transition-all"
              >
                Initialize Your Build →
              </button>
              <p className="text-xs text-muted-foreground text-center">
                NDA-friendly. Your information is never shared.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-md bg-[color:var(--void-main)] border border-border px-4 py-3 text-foreground focus:border-signal focus:outline-none transition-colors"
      />
    </div>
  );
}
