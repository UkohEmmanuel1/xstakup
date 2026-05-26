import type { Metadata } from "next";
import { ContactPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Initialize Your Build — Contact XStakUp",
  description:
    "Start a partnership with XStakUp. Tell us about your product and we'll architect a scalable solution.",
};

export default function Page() {
  return <ContactPage />;
}
