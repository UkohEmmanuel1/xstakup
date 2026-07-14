"use client";

import { SubPageHero, AnimatedSection, FinalCTA } from "@/components/common";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the XStakUp website, services, or platforms, you agree to be bound by these Terms & Conditions. If you do not agree, you must not use our services. These terms apply to all visitors, users, and clients of XStakUp, an FTRX Group Company.",
  },
  {
    title: "2. Services Description",
    content:
      "XStakUp provides custom software development, engineering consulting, cloud infrastructure, AI/ML solutions, Web3 development, and related technology services. The specific scope, deliverables, timelines, and fees for each engagement shall be defined in a separate Statement of Work (SOW) or service agreement executed by both parties.",
  },
  {
    title: "3. Intellectual Property Rights",
    content:
      "Upon full payment for services, XStakUp assigns to the client all intellectual property rights in the custom deliverables created specifically for that engagement, excluding any pre-existing tools, libraries, frameworks, or methodologies owned by XStakUp. XStakUp retains the right to use general skills, knowledge, and experience gained during the engagement, as well as the right to display completed work in its portfolio unless otherwise agreed in writing.",
  },
  {
    title: "4. Client Responsibilities",
    content:
      "Clients agree to provide timely access to necessary resources, information, and personnel required for project execution. Clients are responsible for the accuracy and completeness of all materials provided. Delays caused by client failure to meet these responsibilities may result in adjusted timelines and additional costs.",
  },
  {
    title: "5. Confidentiality",
    content:
      "Both parties agree to maintain the confidentiality of all proprietary information shared during the engagement. Confidential information shall not be disclosed to third parties without prior written consent, except as required by law. This obligation survives the termination of the engagement for a period of three years.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, XStakUp's aggregate liability for any claim arising from or related to the services shall not exceed the total fees paid by the client for the specific engagement giving rise to the claim. XStakUp shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunity.",
  },
  {
    title: "7. Warranties and Disclaimers",
    content:
      "XStakUp warrants that services will be performed in a professional and workmanlike manner in accordance with industry standards. Services are provided 'as is' and XStakUp makes no other warranties, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose. XStakUp does not warrant that services will be uninterrupted or error-free.",
  },
  {
    title: "8. Termination",
    content:
      "Either party may terminate an engagement with written notice as specified in the applicable SOW. Upon termination, the client shall pay for all services rendered up to the effective date of termination. Provisions regarding confidentiality, intellectual property, and limitation of liability shall survive termination.",
  },
  {
    title: "9. Governing Law",
    content:
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Lagos, Nigeria.",
  },
  {
    title: "10. Changes to Terms",
    content:
      "XStakUp reserves the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after any modifications constitutes acceptance of the updated terms. We encourage you to review this page periodically.",
  },
  {
    title: "11. Contact",
    content:
      "For questions about these Terms & Conditions, please contact us at partnerships@xstakup.com or at our engineering headquarters in Lagos, Nigeria.",
  },
];

export function TermsPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      <div className="min-h-screen w-full bg-void-section/80 backdrop-blur-[1px]">
        <SubPageHero
          title="Terms & Conditions"
          subtitle="Please read these terms carefully before using our services. These terms govern your relationship with XStakUp, an FTRX Group Company."
          bgImage="/assets/about.webp"
        />

        <AnimatedSection>
          <section className="py-16 md:py-24">
            <div className="mx-auto max-w-4xl px-6">
              <div
                className="rounded-2xl p-8 md:p-12"
                style={{
                  border: "1px solid rgba(0, 148, 199, 0.15)",
                  background: "var(--card-bg)",
                }}
              >
                <p className="text-sm text-white/60 mb-10">Last updated: July 2026</p>
                <div className="space-y-10">
                  {sections.map((section, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {section.title}
                      </h2>
                      <p className="text-white/70 leading-relaxed">{section.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <FinalCTA />
      </div>
    </main>
  );
}
