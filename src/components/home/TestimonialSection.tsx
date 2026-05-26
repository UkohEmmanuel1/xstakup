"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/common";

const tweets = [
  {
    name: "Adaeze Okonkwo",
    handle: "@ada_okonkwo",
    role: "CTO, XPay",
    avatar: "bg-gradient-to-tr from-blue-600 to-indigo-900",
    text: "XStakUp isn't a vendor — they're embedded in our roadmap. They shipped our payment infrastructure faster and more securely than any in-house team we'd hired. They engineer like founders.",
    time: "2:14 PM · May 25, 2026",
    metrics: { replies: "12", reposts: "48", likes: "342", views: "12K" }
  },
  {
    name: "Tunde Rahman",
    handle: "@tunderahman",
    role: "Founder, Quik",
    avatar: "bg-gradient-to-tr from-emerald-500 to-teal-900",
    text: "We needed our NLP booking systems up in 3 weeks. The engineering velocity out of the XStakUp laboratory is actually terrifying. No drop in code architecture quality either. Complete professionals.",
    time: "9:05 AM · Apr 18, 2026",
    metrics: { replies: "8", reposts: "29", likes: "194", views: "8.4K" }
  },
  {
    name: "Elena Rostova",
    handle: "@elena_dev",
    role: "VP of Product, FTRX",
    avatar: "bg-gradient-to-tr from-purple-600 to-pink-900",
    text: "Most outsourcing studios just write what you tell them. XStakUp pushed back on our cloud deployment topology, saved us 40% on monthly AWS compute overhead, and shipped an immutable multi-region pipeline.",
    time: "11:42 AM · May 2, 2026",
    metrics: { replies: "15", reposts: "84", likes: "512", views: "24K" }
  },
  {
    name: "Marcus Sterling",
    handle: "@marcus_fintech",
    role: "Director, Cashflow Africa",
    avatar: "bg-gradient-to-tr from-amber-500 to-orange-800",
    text: "Cross-border B2B ledgering infrastructure requires absolute structural fault tolerance. XStakUp decoupled our state processing engines flawlessly. Zero settlement errors across 5M+ volume transactions.",
    time: "4:30 PM · Mar 14, 2026",
    metrics: { replies: "4", reposts: "19", likes: "118", views: "5.1K" }
  }
];

export function TestimonialSection() {
  return (
    <AnimatedSection>
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              What the Ecosystem is Saying
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              Real engineering feedback from production build deployments.
            </p>
          </div>

          {/* Masked Edge viewport housing the scrolling marquee mechanism */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            
            {/* The Infinite CSS Marquee Animation Track */}
            <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-2">
              
              {/* Double mapping handles seamless visual looping seams */}
              {[...tweets, ...tweets].map((t, index) => (
                <div
                  key={`${t.handle}-${index}`}
                  className="w-[350px] md:w-[420px] flex-shrink-0 rounded-2xl border border-border/60 bg-[color:var(--void-surface)]/40 p-6 shadow-sm hover:border-signal/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: User Meta Profile Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full ${t.avatar} flex-shrink-0`} />
                        <div className="leading-tight">
                          <div className="flex items-center gap-1">
                            <p className="font-semibold text-sm text-foreground hover:underline cursor-pointer">{t.name}</p>
                            <svg viewBox="0 0 24 24" className="h-4 w-4 text-signal fill-current">
                              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.99-3.818-3.99-.48 0-.94.1-1.348.27C14.825 2.515 13.512 1.5 12 1.5s-2.825 1.015-3.422 2.28c-.407-.17-.867-.27-1.348-.27-2.108 0-3.818 1.78-3.818 3.99 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.71 3.99 3.818 3.99.48 0 .94-.1 1.348-.27.597 1.265 1.91 2.28 3.422 2.28s2.825-1.015 3.422-2.28c.407.17.867.27 1.348.27 2.108 0 3.818-1.78 3.818-3.99 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.22 3.58l-3.5-3.5 1.41-1.42 2.08 2.08 5.67-5.67 1.41 1.42-7.07 7.09z"/>
                            </svg>
                          </div>
                          <p className="text-xs text-muted-foreground font-mono">{t.handle}</p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground/40 font-bold">X</span>
                    </div>

                    {/* Body Text Content Segment */}
                    <p className="mt-4 text-[14px] md:text-[15px] leading-normal text-foreground/90 font-sans tracking-normal">
                      {t.text}
                    </p>
                  </div>

                  <div>
                    {/* Timestamp Label Metadata */}
                    <div className="mt-4 pt-3 border-t border-border/20 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                      <span>{t.time}</span>
                      <span className="text-signal/80 font-semibold">{t.role}</span>
                    </div>

                    {/* Action Bar Interactions Subcomponent Footer */}
                    <div className="mt-3 pt-2 border-t border-border/10 flex items-center justify-between text-muted-foreground/70 font-mono text-[11px]">
                      <div className="flex items-center gap-1.5 hover:text-blue-500 transition-colors cursor-pointer">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641l-.318 1.235c-.07.272.176.518.448.448l1.235-.319c.601-.154 1.194.154 1.641.586A11.472 11.472 0 0012 20.25z" /></svg>
                        <span>{t.metrics.replies}</span>
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors cursor-pointer">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 10.5l3 3 3-3" /></svg>
                        <span>{t.metrics.reposts}</span>
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-rose-500 transition-colors cursor-pointer">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                        <span>{t.metrics.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-signal transition-colors cursor-pointer">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 18.375v-5.25zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-9.75zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                        <span>{t.metrics.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </AnimatedSection>
  );
}