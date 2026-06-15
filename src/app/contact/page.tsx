import type { Metadata } from "next";
import { ContactPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Enterprise Software Project",
  description:
    "Contact XStakUp to start your custom enterprise software development project. Tell us about your product and our senior engineers will respond within 24 hours with a technical roadmap.",
  openGraph: {
    title: "Contact XStakUp | Start Your Build",
    description:
      "Tell us about your enterprise software project. A senior engineer will respond within 24 hours with a technical roadmap.",
  },
};

export default function Page() {
  return <ContactPage />;
}
