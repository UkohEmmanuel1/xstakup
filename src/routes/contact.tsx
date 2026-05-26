import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Initialize Your Build — Contact XStakUp" },
      { name: "description", content: "Start a partnership with XStakUp. Tell us about your product and we'll architect a scalable solution." },
    ],
  }),
  component: ContactPage,
});
