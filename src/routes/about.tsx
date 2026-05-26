import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About XStakUp — Engineering the Future of Digital Enterprise" },
      { name: "description", content: "XStakUp is a team of engineers, architects, and strategists building the technical infrastructure that powers market-leading businesses. Part of the FTRX Group." },
      { property: "og:title", content: "About XStakUp — Engineering for Scale" },
      { property: "og:description", content: "Dedicated engineering partners specializing in fintech, AI, and scalable cloud architecture." },
    ],
  }),
  component: AboutPage,
});
