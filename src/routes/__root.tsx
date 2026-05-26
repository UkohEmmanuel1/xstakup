import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NotFoundPage } from "@/components/layout/NotFound";
import { ErrorPage } from "@/components/layout/ErrorPage";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "XStakUp — Custom Enterprise Software Development" },
      { name: "description", content: "XStakUp is your dedicated engineering partner. We architect scalable web, mobile, AI, and Web3 systems for market-leading businesses. Based in Lagos, Nigeria." },
      { name: "author", content: "XStakUp" },
      { property: "og:title", content: "XStakUp — Custom Enterprise Software Development" },
      { property: "og:description", content: "XStakUp is your dedicated engineering partner. We architect scalable web, mobile, AI, and Web3 systems for market-leading businesses. Based in Lagos, Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "XStakUp — Custom Enterprise Software Development" },
      { name: "twitter:description", content: "XStakUp is your dedicated engineering partner. We architect scalable web, mobile, AI, and Web3 systems for market-leading businesses. Based in Lagos, Nigeria." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
