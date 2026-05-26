import type { ReactNode } from "react";

export interface PipelineStep {
  n: string;
  t: string;
  d: string;
}

export interface ExpertiseItem {
  t: string;
  d: string;
  i: string;
}

export interface CaseStudy {
  t: string;
  tag: string;
  d: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
}

export interface Differentiator {
  t: string;
  d: string;
}

export interface ValueItem {
  i: string;
  t: string;
  d: string;
}

export interface FeaturedCase {
  name: string;
  tag: string;
  headline: string;
  challenge: string;
  solution: string;
  stack: string[];
  gradient: string;
}

export interface EcosystemItem {
  t: string;
  d: string;
  i: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

export interface NavLink {
  to: string;
  label: string;
}

export interface ButtonProps {
  children: ReactNode;
  to?: string;
  className?: string;
}

export interface SectionLabelProps {
  children: ReactNode;
}

export interface StatsItem {
  v: string;
  l: string;
}
