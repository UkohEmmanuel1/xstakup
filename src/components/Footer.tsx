import { Link } from "@tanstack/react-router";

export function Footer() {
  const cols = [
    {
      title: "Company",
      links: [
        { to: "/about", label: "About" },
        { to: "/careers", label: "Careers" },
        { to: "/blog", label: "Blog" },
        { to: "/community", label: "Community" },
      ],
    },
    {
      title: "Expertise",
      links: [
        { to: "/expertise", label: "Product Engineering" },
        { to: "/expertise", label: "Web3 & Blockchain" },
        { to: "/expertise", label: "AI & Machine Learning" },
        { to: "/expertise", label: "Fintech Solutions" },
      ],
    },
    {
      title: "Work",
      links: [
        { to: "/clients", label: "Client Deployments" },
        { to: "/clients", label: "XPay" },
        { to: "/clients", label: "Quik" },
        { to: "/clients", label: "Cashflow Africa" },
      ],
    },
  ] as const;

  return (
    <footer className="relative border-t border-border bg-[color:var(--void-section)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent" style={{ background: "linear-gradient(90deg, transparent, oklch(0.82 0.16 220 / 0.4), transparent)" }} />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-md bg-quantum-gradient" />
                <div className="absolute inset-[3px] rounded-[5px] bg-background flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-signal">X</span>
                </div>
              </div>
              <span className="font-semibold text-foreground">XStakUp</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Custom enterprise software development. We architect scalable web,
              mobile, AI, and Web3 systems for market-leading businesses.
            </p>
            <div className="mt-6 space-y-1 text-sm">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Engineering HQ
              </p>
              <p className="text-foreground">Lagos, Nigeria</p>
              <a
                href="mailto:partnerships@xstakup.com"
                className="text-signal hover:underline"
              >
                partnerships@xstakup.com
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/80 hover:text-signal transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 XStakUp. An FTRX Group Company. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground font-mono">
            <span>SYSTEM STATUS: <span className="text-signal">● OPERATIONAL</span></span>
            <span>UPTIME: 99.99%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
