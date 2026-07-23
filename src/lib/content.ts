import type {
  CapabilityStripItem,
  CtaLink,
  FooterColumn,
  InsightItem,
  JurisdictionMarker,
  NavLink,
  OrganizationJsonLd,
  Pillar,
  SocialLink,
} from "@/types";

export const SITE = {
  name: "Rise360 Enterprises",
  shortName: "Rise360",
  tagline: "We build the structure. You cross the border.",
  description:
    "Rise360 Enterprises helps Indian businesses and high-net-worth individuals establish legally, financially and operationally in international markets.",
  url: "https://rise360enterprises.com",
} as const;

export const LEGAL_ENTITY_NAME = "RISE 360 ENTERPRISES";

export const NAV_LINKS: NavLink[] = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Global", href: "/#global" },
  { label: "Insights", href: "/#insights" },
  { label: "About", href: "/about" },
];

export const HEADER_CONTENT = {
  wordmark: "RISE360",
  ctaLabel: "Private Consultation",
  ctaHref: "/#consultation",
} as const;

export const A11Y_LABELS = {
  primaryNav: "Primary",
  openMenu: "Open menu",
  mobileNav: "Mobile navigation",
  closeMenu: "Close menu",
  mobileNavList: "Mobile",
} as const;

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Rise360", href: "/about" },
      { label: "Leadership", href: "/about" },
      { label: "Careers", href: "/#careers" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Capital", href: "/#capabilities" },
      { label: "Mobility", href: "/#capabilities" },
      { label: "Trade", href: "/#capabilities" },
    ],
  },
  {
    title: "Global",
    links: [
      { label: "United States", href: "/#global" },
      { label: "United Kingdom", href: "/#global" },
      { label: "Singapore & UAE", href: "/#global" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Engagement", href: "/terms" },
      { label: "Disclosures", href: "/disclosures" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/rise360enterprises",
  },
  { label: "X", href: "https://x.com/rise360hq" },
];

export const FOOTER_LEGAL = {
  copyright: `© 2026 ${LEGAL_ENTITY_NAME}. All rights reserved.`,
  registration: `${LEGAL_ENTITY_NAME} Private Limited · Registered in India · CIN pending allotment`,
} as const;

export const ORGANIZATION_JSON_LD: OrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: LEGAL_ENTITY_NAME,
  url: SITE.url,
  description: SITE.description,
  sameAs: SOCIAL_LINKS.map((social) => social.href),
};

export const HERO_CONTENT: {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
} = {
  eyebrow: "Cross-Border Infrastructure",
  headline: SITE.tagline,
  body: "Rise360 designs the legal, financial and operational foundation for Indian enterprises and principals expanding beyond India — structured for scrutiny, built for scale.",
  primaryCta: { label: "Private Consultation", href: "/#consultation" },
  secondaryCta: { label: "Explore Capabilities", href: "/#capabilities" },
};

export const MANDATE_CONTENT = {
  eyebrow: "The Mandate",
  statement:
    "Rise360 structures the legal, financial and operational foundation that lets Indian enterprises and private clients establish themselves in international markets — and hold their position there.",
} as const;

export const PILLARS_CONTENT = {
  eyebrow: "Capabilities",
  heading: "Every discipline a cross-border structure requires, under one accountable roof.",
} as const;

export const PILLARS: Pillar[] = [
  {
    index: "01",
    title: "Capital",
    description: "Finance & Forex · Crypto / Digital Assets",
    services: ["Finance & Forex", "Crypto / Digital Assets"],
  },
  {
    index: "02",
    title: "Mobility",
    description: "Immigration Services",
    services: ["Immigration Services"],
  },
  {
    index: "03",
    title: "Trade",
    description: "Business Consulting · Business Administration · Import / Export",
    services: ["Business Consulting", "Business Administration", "Import / Export"],
  },
  {
    index: "04",
    title: "Assets",
    description: "Luxury & Real Estate",
    services: ["Luxury & Real Estate"],
  },
];

export const DIGITAL_PRACTICE = {
  title: "Digital",
  services: ["Website & App Development", "Graphic Design", "Digital Marketing"],
} as const;

export const DIGITAL_NOTE = "Also: Digital — web, brand and growth systems →";

export const CAPABILITY_STRIP_ITEMS: CapabilityStripItem[] = [
  { label: "Four Practices", description: "Capital · Mobility · Trade · Assets" },
  { label: "Seven Services", description: "Advisory through execution" },
  { label: "Cross-Border", description: "India-outbound structuring" },
  { label: "Single Point", description: "One firm, end to end" },
];

export const JURISDICTIONS_CONTENT = {
  eyebrow: "Global Reach",
  heading: "Structured presence, not paperwork, in the markets that matter.",
} as const;

export const JURISDICTION_MARKERS: JurisdictionMarker[] = [
  { name: "USA", x: 28.6, y: 28.4 },
  { name: "Canada", x: 29.0, y: 24.8 },
  { name: "UK", x: 50.0, y: 21.4 },
  { name: "UAE", x: 65.4, y: 36.0 },
  { name: "India", x: 71.4, y: 34.1 },
  { name: "Singapore", x: 78.8, y: 49.3 },
  { name: "Australia", x: 92.0, y: 68.8 },
];

export const INSIGHTS_CONTENT = {
  eyebrow: "Insights",
  heading: "Perspective from inside the structuring work.",
} as const;

export const INSIGHTS: InsightItem[] = [
  {
    category: "Tax",
    title: "What Indian founders miss when structuring a US holding company",
    readTime: "6 min read",
  },
  {
    category: "Immigration",
    title: "Sequencing residency applications around a funding round",
    readTime: "5 min read",
  },
  {
    category: "Banking",
    title: "Why institutional banking relationships take longer to build than entities",
    readTime: "7 min read",
  },
];

export const CONSULTATION_CONTENT: {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
} = {
  heading: "You cross the border. We build what carries you across it.",
  body: "A private consultation begins with your structure, not our services.",
  ctaLabel: "Private Consultation",
  ctaHref: "mailto:hello@rise360enterprises.com",
};
