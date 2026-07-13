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
  image?: string;
}

export interface CaseStudyCard {
  title: string;
  industry: string;
  tags: string[];
  summary: string;
  platform: string;
  slug: string;
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
  image?: string;
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
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
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
  type: "Full time" | "Contract" | "Internship";
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

export interface CommunityEvent {
  title: string;
  date: string;
  type: "Meetup" | "Workshop" | "Talk" | "Hackathon";
  description: string;
  icon: string;
}

export interface CommunityProject {
  name: string;
  description: string;
  tech: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  deliverables: string[];
  slug: string;
}

export interface IndustryItem {
  title: string;
  description: string;
  icon: string;
}

export interface WhyItem {
  title: string;
  description: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface UseCase {
  title: string;
  problem: string;
  solution: string;
  output: string;
}

export interface EngagementModel {
  title: string;
  bestFor: string;
  includes: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface CaseStudyFull {
  id: string;
  title: string;
  industry: string;
  platform: string;
  tags: string[];
  summary: string;
  problem: string;
  goal: string;
  scope: string;
  features: string[];
  techStack: string[];
  designApproach: string;
  outcome: string;
  slug: string;
}
