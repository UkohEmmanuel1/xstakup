"use client";

import { AnimatedSection } from "@/components/common";
import { communityTestimonials, testimonialCardColors } from "@/data/community";

export function TestimonialsSection() {
  return (
    <AnimatedSection>
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">
              Member <span className="text-gradient-blue">Testimonials</span>
            </h2>
            <p className="mt-4 text-white/70 text-base md:text-lg">From engineers and founders.</p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div
            className="flex gap-5 md:gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-2"
            role="list"
            aria-label="Member testimonials"
          >
            {communityTestimonials.map((t, i) => {
              const c = testimonialCardColors[i % testimonialCardColors.length];
              return (
                <div key={t.handle} role="listitem">
                  <div
                    className="w-[380px] md:w-[440px] max-w-[85vw] flex-shrink-0 rounded-2xl p-8 md:p-10 transition-all duration-300 flex flex-col justify-between"
                    style={{ border: `1px solid ${c.border}`, background: c.bg }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = c.hover;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = c.border;
                    }}
                  >
                    <div>
                      <p className="text-base leading-relaxed text-white/90">
                        &ldquo;{t.text}&rdquo;
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold"
                          style={{ background: c.accent }}
                        >
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-white">{t.name}</p>
                          <p className="text-xs text-white/60">
                            {t.handle} · {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div aria-hidden="true" className="flex gap-5 md:gap-6">
              {communityTestimonials.map((t, i) => {
                const c = testimonialCardColors[i % testimonialCardColors.length];
                return (
                  <div key={`dup-${t.handle}`}>
                    <div
                      className="w-[380px] md:w-[440px] max-w-[85vw] flex-shrink-0 rounded-2xl p-8 md:p-10 flex flex-col justify-between"
                      style={{ border: `1px solid ${c.border}`, background: c.bg }}
                    >
                      <div>
                        <p className="text-base leading-relaxed text-white/90">
                          &ldquo;{t.text}&rdquo;
                        </p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold"
                            style={{ background: c.accent }}
                          >
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-white">{t.name}</p>
                            <p className="text-xs text-white/60">
                              {t.handle} · {t.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
