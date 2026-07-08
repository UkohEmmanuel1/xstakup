export interface SocialLink {
  platform: "LinkedIn" | "Instagram" | "X";
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/xstakup",
    label: "LinkedIn",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/xstakup",
    label: "Instagram",
  },
  {
    platform: "X",
    url: "https://x.com/xstakup",
    label: "X",
  },
];
