import type { Metadata } from "next";
import "../styles.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "XStakUp — Custom Enterprise Software Development",
  description:
    "XStakUp is your dedicated engineering partner. We architect scalable web, mobile, AI, and Web3 systems for market-leading businesses. Based in Lagos, Nigeria.",
  authors: [{ name: "XStakUp" }],
  openGraph: {
    title: "XStakUp — Custom Enterprise Software Development",
    description:
    "XStakUp is your dedicated engineering partner. We architect scalable web, mobile, AI, and Web3 systems for market-leading businesses. Based in Lagos, Nigeria.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XStakUp — Custom Enterprise Software Development",
    description:
    "XStakUp is your dedicated engineering partner. We architect scalable web, mobile, AI, and Web3 systems for market-leading businesses. Based in Lagos, Nigeria.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
