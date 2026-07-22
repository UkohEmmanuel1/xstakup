"use client";

import { SubPageHero, AnimatedSection, FinalCTA } from "@/components/common";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly to us, including your name, email address, phone number, company name, and any other details you submit through our contact forms, inquiries, or service engagements. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, operating system, referring URLs, and pages visited.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, provide our software development and consulting services, communicate with you about projects and updates, improve our website and services, send relevant marketing communications with your consent, comply with legal obligations, and prevent fraud or misuse of our services.",
  },
  {
    title: "3. Legal Basis for Processing",
    content:
      "We process your personal data based on the following legal grounds: performance of a contract when providing services you have requested, your consent for marketing communications, our legitimate interests in improving our services and website, and compliance with applicable legal obligations.",
  },
  {
    title: "4. Data Sharing and Disclosure",
    content:
      "We do not sell your personal information to third parties. We may share your data with trusted service providers who assist us in operating our business (such as hosting providers, analytics services, and communication tools), provided they agree to maintain confidentiality. We may also disclose information when required by law, to protect our rights, or in connection with a business transfer such as a merger or acquisition.",
  },
  {
    title: "5. Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. For client engagements, we retain project-related data for the duration of the engagement plus a reasonable period thereafter. Marketing data is retained until you withdraw consent or request deletion.",
  },
  {
    title: "6. Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, secure data storage, and regular security assessments. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "7. Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data, restrict or object to processing, and withdraw consent at any time. To exercise these rights, please contact us at partnerships@xstakup.com. We will respond to your request within the timeframes required by applicable law.",
  },
  {
    title: "8. Cookies and Tracking Technologies",
    content:
      "Our website uses cookies and similar tracking technologies to enhance user experience, analyze site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain for a set period).",
  },
  {
    title: "9. Third-Party Links",
    content:
      "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.",
  },
  {
    title: "10. International Data Transfers",
    content:
      "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for any international data transfers, including standard contractual clauses or equivalent mechanisms, to protect your personal information in accordance with applicable data protection laws.",
  },
  {
    title: "11. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the 'Last updated' date. We encourage you to review this policy periodically for any changes.",
  },
  {
    title: "12. Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer at partnerships@xstakup.com or write to us at our engineering headquarters in Lagos, Nigeria.",
  },
];

export function PrivacyPage() {
  return (
    <main className="min-h-screen w-full">
      <SubPageHero
        title="Privacy Policy"
        subtitle="We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our services or visit our website."
        bgImage="/assets/about.webp"
      />

      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-2xl p-8 md:p-12 border border-border bg-card">
              <p className="text-sm text-muted-foreground mb-10">Last updated: July 2026</p>
              <div className="space-y-10">
                {sections.map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <FinalCTA />
    </main>
  );
}
