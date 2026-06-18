import type { ReactNode } from "react";

export interface PipelineStep {
  number: string;
  title: string;
  description: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  title: string;
  tag: string;
  description: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
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
  title: string;
  description: string;
  icon: string;
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
  value: string;
  label: string;
}

/* Added CardColor interface */
export interface CardColor {
  border: string;
  hover: string;
  accent: string;
  bg: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  description: string;
  requirements: string[];
  applyUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}