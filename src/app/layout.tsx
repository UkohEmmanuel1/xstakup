import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "XStakUp | Enterprise Software Development Company | Web, Mobile, AI & Web3",
    template: "%s | XStakUp - Enterprise Software Development",
  },
  description:
    "XStakUp is a leading custom enterprise software development company. We architect scalable web applications, mobile apps, AI solutions, and Web3 infrastructure for businesses worldwide. Based in Lagos, Nigeria.",
  keywords: [
    "enterprise software development",
    "custom software development company",
    "web application development",
    "mobile app development",
    "AI development services",
    "Web3 development",
    "blockchain development",
    "fintech software development",
    "Nigeria software company",
    "Africa software engineering",
    "CTO as a service",
    "DevSecOps services",
  ],
  authors: [{ name: "XStakUp", url: "https://xstakup.com" }],
  creator: "XStakUp",
  publisher: "XStakUp",
  metadataBase: new URL("https://xstakup.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "XStakUp",
    title: "XStakUp | Enterprise Software Development Company",
    description:
      "Custom enterprise software development for web, mobile, AI, and Web3. Your dedicated engineering team for scalable, production-grade systems.",
    images: [
      {
        url: "/assets/home.webp",
        width: 1200,
        height: 630,
        alt: "XStakUp Enterprise Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XStakUp | Enterprise Software Development Company",
    description:
      "Custom enterprise software development for web, mobile, AI, and Web3. Your dedicated engineering team.",
    images: ["/assets/home.webp"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://xstakup.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <link rel="icon" href="/assets/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "XStakUp",
              url: "https://xstakup.com",
              logo: "https://xstakup.com/assets/foot_logo.webp",
              description:
                "Custom enterprise software development company. Web, mobile, AI, and Web3 development services.",
              foundingDate: "2020",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "partnerships@xstakup.com",
                contactType: "sales",
              },
              sameAs: [],
            }),
          }}
        />
        <Providers>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
