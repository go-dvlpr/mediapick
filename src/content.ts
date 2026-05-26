import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  CreditCard,
  Dice5,
  Globe2,
  Landmark,
  Link2,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Smartphone,
  Target,
  TrendingUp,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export type Industry = {
  title: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ResultMetric = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const contactEmail = "david@mediapick.io";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    title: "Media Buying",
    description:
      "Paid acquisition across search, social, display, native, programmatic, and direct traffic with daily optimization discipline.",
    bullets: ["Channel planning", "Creative testing", "Bid and budget control"],
    icon: ShoppingCart,
  },
  {
    title: "Lead Generation",
    description:
      "High-intent funnels that qualify prospects before your sales team spends time on them.",
    bullets: ["CPL and CPA offers", "Landing page testing", "Lead quality scoring"],
    icon: UsersRound,
  },
  {
    title: "Affiliation",
    description:
      "Partner and affiliate programs built around transparent tracking, payout control, and incremental growth.",
    bullets: ["Network management", "Publisher recruitment", "Fraud-aware reporting"],
    icon: Link2,
  },
];

export const industries: Industry[] = [
  { title: "Finance", icon: Landmark },
  { title: "iGaming", icon: Dice5 },
  { title: "E-commerce", icon: ShoppingBag },
  { title: "Fintech", icon: CreditCard },
  { title: "SaaS", icon: Cloud },
  { title: "Mobile Apps", icon: Smartphone },
  { title: "Lead-Gen Verticals", icon: UserRoundCheck },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Strategy",
    description:
      "We map the offer, audience, compliance limits, traffic mix, and economics before spend starts.",
    icon: Search,
  },
  {
    number: "02",
    title: "Launch",
    description:
      "We build campaigns, creatives, landing flows, tracking, and reporting around one clear acquisition target.",
    icon: Send,
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "We move budget toward proven segments while improving CTR, CVR, lead quality, CAC, and payback.",
    icon: SlidersHorizontal,
  },
  {
    number: "04",
    title: "Scale",
    description:
      "We expand channels, partners, geos, and creative systems once the unit economics hold.",
    icon: TrendingUp,
  },
];

export const resultMetrics: ResultMetric[] = [
  {
    value: "2.4x",
    label: "ROAS lift",
    description: "Average improvement target across optimized paid traffic programs.",
    icon: TrendingUp,
  },
  {
    value: "-38%",
    label: "CAC pressure",
    description: "Typical reduction objective after funnel, bid, and audience cleanup.",
    icon: Target,
  },
  {
    value: "65%+",
    label: "Qualified leads",
    description: "Lead quality benchmark we use before campaigns move into scale mode.",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "Market coverage",
    description: "Always-on campaign monitoring across priority geos and channels.",
    icon: Globe2,
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: ["Media Buying", "Lead Generation", "Affiliation"],
  },
  {
    title: "Industries",
    links: ["Finance", "iGaming", "E-commerce", "Fintech", "SaaS", "Mobile Apps"],
  },
  {
    title: "Company",
    links: ["Process", "Results", "Contact"],
  },
];
