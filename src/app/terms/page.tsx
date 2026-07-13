import type { Metadata } from "next";
import { TermsPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Terms & Conditions | XStakUp",
  description:
    "Review the Terms & Conditions governing the use of XStakUp's software development services, website, and platforms. XStakUp is an FTRX Group Company.",
  openGraph: {
    title: "Terms & Conditions | XStakUp",
    description:
      "Review the Terms & Conditions governing the use of XStakUp's software development services, website, and platforms.",
  },
};

export default function Page() {
  return <TermsPage />;
}
