import type {
  CaseStudy,
  CtaLink,
  FooterColumn,
  InsightItem,
  JurisdictionMarker,
  NavLink,
  OrganizationJsonLd,
  Pillar,
  ProofMetric,
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
  copyright: "© 2026 Rise360 Enterprises. All rights reserved.",
  registration:
    "Rise360 Enterprises Private Limited · Registered in India · CIN pending allotment",
} as const;

export const ORGANIZATION_JSON_LD: OrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
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
    description: "Finance, forex, digital assets and investment structuring",
  },
  {
    index: "02",
    title: "Mobility",
    description: "Immigration, residency and long-term global positioning",
  },
  {
    index: "03",
    title: "Trade",
    description: "Import, export, operations and business administration",
  },
  {
    index: "04",
    title: "Assets",
    description: "Luxury and commercial real estate across key markets",
  },
];

export const DIGITAL_NOTE = "Also: Digital — web, brand and growth systems →";

export const PROOF_METRICS: ProofMetric[] = [
  { value: 12, suffix: "", label: "Jurisdictions" },
  { value: 40, suffix: "+", label: "Mandates" },
  { value: 8, suffix: "", label: "Years" },
  { value: 9, suffix: "", label: "Practices" },
];

export const CASE_STUDY: CaseStudy = {
  eyebrow: "Selected Mandate",
  numeral: "01",
  title: "Moving a Bengaluru manufacturer into three markets at once",
  summary:
    "A mid-sized industrial manufacturer needed US, UK and UAE entities live before a single funding close. We sequenced entity formation, banking and residency in parallel rather than in series, so every structure was operational before the deal closed.",
  metrics: [
    { value: "3", label: "Markets" },
    { value: "90", label: "Days to operational" },
    { value: "1", label: "Funding close" },
  ],
  ctaLabel: "Read the mandate",
  ctaHref: "#",
};

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
