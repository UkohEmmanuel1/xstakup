"use client";

import { motion } from "framer-motion";
import type { ServiceItem } from "@/types";
import {
  CodeIcon,
  GlobeIcon,
  SmartphoneIcon,
  CloudIcon,
  BrainIcon,
  WalletIcon,
  HexagonIcon,
  ServerIcon,
} from "@/components/common/Icons";

const iconMap: Record<string, React.ElementType> = {
  code: CodeIcon,
  globe: GlobeIcon,
  smartphone: SmartphoneIcon,
  cloud: CloudIcon,
  brain: BrainIcon,
  wallet: WalletIcon,
  hexagon: HexagonIcon,
  server: ServerIcon,
};

interface Props {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: Props) {
  const Icon = iconMap[service.icon] || CodeIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="group rounded-xl border border-border bg-card p-8 md:p-10 hover:shadow-card-hover transition-all duration-300 h-full min-h-[200px] flex flex-col">
        <div className="h-10 w-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4 group-hover:bg-blue/20 transition-colors">
          <Icon size={20} className="text-blue" />
        </div>
        <h3 className="text-lg font-heading font-bold text-foreground mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.shortDesc}</p>
        <ul className="space-y-1.5 mb-5">
          {service.deliverables.slice(0, 3).map((d) => (
            <li key={d} className="text-xs text-foreground/70 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-blue flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
