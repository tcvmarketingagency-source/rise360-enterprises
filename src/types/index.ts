export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface OrganizationContactPoint {
  "@type": "ContactPoint";
  telephone: string;
  email: string;
  contactType: string;
}

export interface OrganizationJsonLd {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  description: string;
  telephone: string;
  email: string;
  contactPoint: OrganizationContactPoint;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: CtaLink;
  whatsapp: CtaLink;
  email: CtaLink;
}

export interface Pillar {
  index: string;
  title: string;
  description: string;
  services: string[];
}

export interface JurisdictionMarker {
  name: string;
  x: number;
  y: number;
}

export interface CapabilityStripItem {
  label: string;
  description: string;
}

export interface PracticeService {
  name: string;
  description: string;
}

export interface PracticeProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PracticeFaq {
  question: string;
  answer: string;
}

export interface PracticeSeo {
  title: string;
  description: string;
}

export interface Practice {
  slug: string;
  name: string;
  eyebrow: string;
  mandate: string;
  mandateAccent?: string;
  heroSupport: string;
  definition: string;
  services: PracticeService[];
  process: PracticeProcessStep[];
  markets: string[];
  faqs: PracticeFaq[];
  seo: PracticeSeo;
}

export type PracticeSlug = "capital" | "mobility" | "trade" | "assets" | "digital";

export type ServiceMotifId =
  | "consultant"
  | "immigration"
  | "finance"
  | "admin"
  | "tradeflow"
  | "web"
  | "design"
  | "marketing"
  | "assets";

export interface ServiceCard {
  index: string;
  motif: ServiceMotifId;
  name: string;
  description: string;
  detail: string;
  href: string;
}

export interface ArticleSeo {
  title: string;
  description: string;
}

export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  practice: PracticeSlug;
  markets: string[];
  readingTime: string;
  seo: ArticleSeo;
  content: string;
}
