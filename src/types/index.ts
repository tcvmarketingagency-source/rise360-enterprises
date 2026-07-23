export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface OrganizationJsonLd {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  description: string;
  sameAs: string[];
}

export interface CtaLink {
  label: string;
  href: string;
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

export interface InsightItem {
  category: string;
  title: string;
  readTime: string;
}
