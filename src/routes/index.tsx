import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/pages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XStakUp — Custom Enterprise Software Development Partner" },
      { name: "description", content: "Your dedicated engineering team. XStakUp architects scalable web, mobile, AI, and Web3 applications for ambitious businesses." },
      { property: "og:title", content: "XStakUp — Custom Enterprise Software Development" },
      { property: "og:description", content: "Dedicated engineering team building scalable web, mobile, AI, and Web3 infrastructure." },
    ],
  }),
  component: HomePage,
});
