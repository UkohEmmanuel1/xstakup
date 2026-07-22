"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/common";
import { faqItems, faqCardColors } from "@/data/careers";

export function FAQSection() {
  return (
    <AnimatedSection>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="section-header text-center max-w-2xl mx-auto">
            <h2 className="section-title">
              <span className="text-gradient-blue">FAQs</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item, i) => {
              const c = faqCardColors[i % faqCardColors.length];
              return (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="group relative rounded-xl px-5"
                  style={{ border: `1px solid ${c.border}`, background: c.bg }}
                >
                  <div
                    className="absolute top-0 left-3 right-3 h-[2px] rounded-full"
                    style={{ background: c.accent }}
                  />
                  <AccordionTrigger className="text-base font-medium py-4 hover:no-underline text-white/90">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </AnimatedSection>
  );
}
