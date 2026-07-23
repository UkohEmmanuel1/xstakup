"use client";

import { motion } from "framer-motion";
import type { IndustryItem } from "@/types";
import {
  BuildingIcon,
  CloudIcon,
  SparklesIcon,
  HexagonIcon,
  BookOpenIcon,
  CartIcon,
  TruckIcon,
  CameraIcon,
  BriefcaseIcon,
  StoreIcon,
} from "@/components/common/Icons";

const iconMap: Record<string, React.ElementType> = {
  "building-bank": BuildingIcon,
  cloud: CloudIcon,
  sparkles: SparklesIcon,
  hexagon: HexagonIcon,
  "book-open": BookOpenIcon,
  "shopping-cart": CartIcon,
  truck: TruckIcon,
  camera: CameraIcon,
  briefcase: BriefcaseIcon,
  store: StoreIcon,
};

interface Props {
  item: IndustryItem;
  index: number;
}

export function IndustryCard({ item, index }: Props) {
  const Icon = iconMap[item.icon] || BuildingIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="group rounded-xl border border-border bg-card p-8 md:p-10 hover:shadow-card-hover hover:border-blue/30 transition-all duration-300 h-full min-h-[200px]">
        <div className="h-9 w-9 rounded-lg bg-blue/10 flex items-center justify-center mb-3 group-hover:bg-blue/20 transition-colors">
          <Icon size={18} className="text-blue" />
        </div>
        <h3 className="text-base font-heading font-bold text-foreground mb-1.5">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
}
