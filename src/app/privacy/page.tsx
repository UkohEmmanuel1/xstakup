import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Privacy Policy | XStakUp",
  description:
    "Read XStakUp's Privacy Policy to understand how we collect, use, and protect your personal information when you use our services or visit our website.",
  openGraph: {
    title: "Privacy Policy | XStakUp",
    description:
      "Read XStakUp's Privacy Policy to understand how we collect, use, and protect your personal information.",
  },
};

export default function Page() {
  return <PrivacyPage />;
}
