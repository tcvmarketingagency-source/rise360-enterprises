import type {
  CapabilityStripItem,
  CtaLink,
  FooterColumn,
  JurisdictionMarker,
  NavLink,
  OrganizationJsonLd,
  Pillar,
  Practice,
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
  { label: "Insights", href: "/insights" },
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
      { label: "Leadership", href: "/about#leadership" },
      { label: "Careers", href: "/about#careers" },
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
    description: "Business Consulting & Administration · Import / Export",
    services: ["Business Consulting & Administration", "Import / Export"],
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

export const PRACTICES: Record<string, Practice> = {
  capital: {
    slug: "capital",
    name: "Capital",
    eyebrow: "Capital",
    mandate: "Capital that moves as freely as the business it funds.",
    heroSupport:
      "Banking, forex and digital asset structuring built for money that crosses borders as often as your business does.",
    definition:
      "Capital covers the financial architecture behind an international move: multi-currency banking, forex exposure, and increasingly, digital assets. We structure how money enters, moves through, and exits each jurisdiction you operate in — so currency risk and repatriation are questions already answered, not discovered later.",
    services: [
      {
        name: "Finance & Forex",
        description:
          "Multi-currency banking, treasury structuring and forex exposure management for businesses moving capital across two or more jurisdictions.",
      },
      {
        name: "Crypto / Digital Assets",
        description:
          "Structuring and compliance guidance for holding and moving digital assets across jurisdictions with materially different regulatory treatment.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We map your current currency exposure, banking relationships and capital flows across every jurisdiction you touch.",
      },
      {
        step: "02",
        title: "Structure",
        description:
          "We design the banking and treasury architecture around the currencies and markets you actually operate in.",
      },
      {
        step: "03",
        title: "Establish",
        description:
          "We coordinate account opening, compliance documentation and the connections between jurisdictions.",
      },
      {
        step: "04",
        title: "Operate",
        description:
          "Ongoing forex and treasury support as your volumes, markets and currency exposure change.",
      },
    ],
    markets: ["UAE", "Singapore", "UK", "USA", "India"],
    faqs: [
      {
        question: "How do we decide which jurisdiction to bank in first?",
        answer:
          "It depends on where your revenue actually originates and where your counterparties expect to be paid — not on which jurisdiction sounds most prestigious. We start by mapping your transaction flows, then sequence banking around the jurisdiction that removes the most friction first.",
      },
      {
        question: "How long does it take before international banking is operational?",
        answer:
          "It depends on the jurisdiction's KYC and beneficial-ownership requirements and how quickly your entity documentation is ready. We sequence the banking application alongside entity formation so banking isn't the bottleneck.",
      },
      {
        question: "What documentation should we have ready before we start?",
        answer:
          "Incorporation documents, a clear beneficial-ownership chain, and a source-of-funds narrative for the capital being moved. Banks in every jurisdiction we work in ask for these; having them prepared before the application starts is what actually saves time.",
      },
      {
        question: "Does Rise360 open bank accounts or hold custody on our behalf?",
        answer:
          "No. Bank accounts and digital asset custody are held directly by the licensed bank or custodian in the relevant jurisdiction, with your entity as the account holder. We structure the relationship and manage the process — the account itself is always yours, held with a licensed institution, not with us.",
      },
      {
        question: "Can you manage our day-to-day forex and treasury operations?",
        answer:
          "We set up the structure and advise on an ongoing basis as your exposure changes, but day-to-day execution — wiring funds, hedging trades — sits with your own finance team or, for regulated instruments, a licensed treasury or brokerage partner. Our role is the architecture, not the daily transaction.",
      },
    ],
    seo: {
      title: "Capital — Cross-Border Finance, Forex & Digital Assets",
      description:
        "Rise360 structures multi-currency banking, forex exposure and digital asset positioning for Indian businesses and principals expanding internationally.",
    },
  },
  mobility: {
    slug: "mobility",
    name: "Mobility",
    eyebrow: "Mobility",
    mandate: "Mobility structured to match your business timeline, not the immigration office's.",
    heroSupport:
      "Investor, founder and family immigration pathways sequenced alongside your corporate structure — not after it.",
    definition:
      "Mobility covers the immigration and residency work that lets you, your family and your key people actually be where your business operates. We sequence visa and residency applications alongside entity formation, so the right people can enter, work and stay exactly when the business needs them to.",
    services: [
      {
        name: "Immigration Services",
        description:
          "Investor, founder, employment and family visa pathways structured around your corporate timeline — sequenced so residency isn't the last piece to fall into place.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We map who needs to move, when, and under which visa category — founders, key employees or family members.",
      },
      {
        step: "02",
        title: "Structure",
        description:
          "We choose the residency or investor pathway that aligns with your corporate structure and timeline.",
      },
      {
        step: "03",
        title: "Apply",
        description:
          "We prepare and coordinate the application through licensed immigration counsel in the destination jurisdiction.",
      },
      {
        step: "04",
        title: "Maintain",
        description:
          "Ongoing compliance support as residency renewal, family sponsorship or status changes come up.",
      },
    ],
    markets: ["UAE", "Singapore", "UK", "Canada", "Australia", "USA"],
    faqs: [
      {
        question: "Which country should we pursue residency in first?",
        answer:
          "It depends on whether the priority is speed, investment threshold, or a long-term citizenship pathway — a fast investor visa and a strong citizenship pathway are rarely the same jurisdiction. We map that against your business timeline before recommending one.",
      },
      {
        question: "How long do immigration and residency applications typically take?",
        answer:
          "Timelines vary widely by jurisdiction and visa category — some investor programs process in weeks, others take the better part of a year. We sequence the application alongside your corporate formation so it runs in parallel rather than blocking the rest of the structure.",
      },
      {
        question: "What documentation is usually required?",
        answer:
          "Passport and background documentation, proof of funds or investment, and increasingly a clean corporate and tax history for the applicant. We confirm exactly what's needed for your specific pathway before you start gathering it.",
      },
      {
        question: "Does Rise360 file the immigration application itself?",
        answer:
          "No. Immigration filings must be submitted through licensed immigration counsel registered in the destination jurisdiction — that's a legal requirement, not a preference. We select and coordinate with that counsel and manage the process end to end, but the filing itself is theirs.",
      },
      {
        question: "Can you help with family members' visas alongside the primary applicant?",
        answer:
          "Yes — most investor and employment pathways allow spouse and dependent children to be included. We sequence family applications alongside the primary one so the household moves together, not in stages.",
      },
    ],
    seo: {
      title: "Mobility — Immigration & Residency Structuring",
      description:
        "Rise360 sequences investor, founder and family immigration pathways alongside your corporate structure for Indian principals expanding internationally.",
    },
  },
  trade: {
    slug: "trade",
    name: "Trade",
    eyebrow: "Trade",
    mandate: "Trade infrastructure built to move goods, not just paperwork.",
    heroSupport:
      "Business consulting, administration and import/export structuring for companies operating across two or more markets at once.",
    definition:
      "Trade covers the operational and administrative work behind running a business across borders: day-to-day consulting, back-office administration, and the import/export mechanics of moving goods internationally. We structure these as one coordinated function, so operational complexity in a new market doesn't fall entirely on your own team.",
    services: [
      {
        name: "Business Consulting",
        description:
          "Strategic and operational advisory for entering or scaling in a new market — market entry, competitive positioning and operating model design.",
      },
      {
        name: "Business Administration",
        description:
          "Day-to-day back-office administration — compliance filings, corporate secretarial work and operational coordination once you're live in a jurisdiction.",
      },
      {
        name: "Import / Export",
        description:
          "Customs, tariff classification and logistics structuring for goods moving between India and your international markets.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We review your current operating model and trade flows to identify what changes once you cross the border.",
      },
      {
        step: "02",
        title: "Structure",
        description:
          "We design the administrative and trade-compliance framework for the specific goods, markets and volumes involved.",
      },
      {
        step: "03",
        title: "Establish",
        description:
          "We set up the operational processes and customs and logistics relationships needed to move goods and run day-to-day operations.",
      },
      {
        step: "04",
        title: "Operate",
        description:
          "Ongoing consulting and administrative support as your operating model and trade volumes evolve.",
      },
    ],
    markets: ["UAE", "Singapore", "UK", "USA", "India"],
    faqs: [
      {
        question: "Which market should we expand our operations into first?",
        answer:
          "It depends on where your existing customers or supply chain already are, and which market has trade or tariff advantages for your specific goods. We assess your current trade flows before recommending where to formalize operations first.",
      },
      {
        question: "How long does it take to get import/export operations running in a new market?",
        answer:
          "It depends on the product category — some goods clear customs registration in weeks, others require licensing that takes considerably longer. We identify which category you fall into early, so it doesn't surprise you mid-process.",
      },
      {
        question: "What documentation do we need for cross-border trade?",
        answer:
          "Product classification (HS codes), certificates of origin, and — depending on the goods — import/export licenses specific to the destination market. We confirm the exact list for your product category before you ship anything.",
      },
      {
        question: "Does Rise360 handle customs clearance and logistics directly?",
        answer:
          "No. Customs clearance is handled by a licensed customs broker or freight forwarder in each jurisdiction — that's a regulatory requirement. We structure the trade compliance framework and coordinate with the licensed broker, but the clearance itself is theirs.",
      },
      {
        question: "Can you run our day-to-day back-office operations once we're live?",
        answer:
          "We can structure and stand up the administrative function, and support it on an ongoing basis, but day-to-day execution is typically handed to your own operating team or a local administrative partner once the framework is running — our role is the structure, not permanent operations.",
      },
    ],
    seo: {
      title: "Trade — Cross-Border Operations, Consulting & Import/Export",
      description:
        "Rise360 structures business consulting, administration and import/export operations for Indian companies trading and operating internationally.",
    },
  },
  assets: {
    slug: "assets",
    name: "Assets",
    eyebrow: "Assets",
    mandate: "Property and assets structured to outlast a single transaction.",
    heroSupport:
      "Structuring guidance for acquiring, holding and eventually transferring luxury and commercial real estate across the markets you operate in.",
    definition:
      "Assets covers the structuring behind luxury and commercial real estate acquired outside India — how a property is held, by which entity, and how it's eventually transferred. We think about ownership structure before you close, so tax exposure and succession aren't questions answered after the fact.",
    services: [
      {
        name: "Luxury & Real Estate",
        description:
          "Acquisition structuring, holding-entity design and exit planning for luxury and commercial real estate across your international markets.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We review the property type, jurisdiction and your long-term intent — personal use, investment, or eventual transfer to family.",
      },
      {
        step: "02",
        title: "Structure",
        description:
          "We design the holding structure — direct ownership, corporate entity, or trust — based on tax and succession implications.",
      },
      {
        step: "03",
        title: "Acquire",
        description:
          "We coordinate the structuring work alongside your local licensed real estate counsel through to closing.",
      },
      {
        step: "04",
        title: "Hold & Exit",
        description:
          "Ongoing guidance on holding-structure maintenance and exit or succession planning as circumstances change.",
      },
    ],
    markets: ["UAE", "UK", "Singapore", "Canada", "Australia"],
    faqs: [
      {
        question: "Should we hold property directly or through a company?",
        answer:
          "It depends on the jurisdiction's tax treatment of individual versus corporate ownership, and whether succession planning is a priority. Direct ownership is simpler; a holding entity often makes more sense for larger acquisitions or multi-generational transfer — we model both before you decide.",
      },
      {
        question: "How long does the acquisition and structuring process take?",
        answer:
          "The structuring itself can be designed in parallel with your property search. The acquisition timeline is set by the transaction and local closing process, which varies by jurisdiction and property type — we align our structuring work to that timeline, not the other way around.",
      },
      {
        question: "What documentation is needed to acquire property internationally?",
        answer:
          "Source-of-funds documentation is the consistent requirement across every market we work in, alongside the standard identity and entity documents for whichever holding structure you choose. Some jurisdictions add residency or investment-threshold requirements on top of that.",
      },
      {
        question: "Does Rise360 handle the property transaction itself?",
        answer:
          "No. The purchase transaction is handled by a licensed real estate agent and local legal counsel in the destination market — that's a regulatory requirement in every jurisdiction we work in. We design the ownership structure and coordinate with that local counsel through closing.",
      },
      {
        question: "Can you help with succession planning for property already held internationally?",
        answer:
          "Yes — if the current structure wasn't designed with succession in mind, we review it and recommend changes, working alongside your existing legal and tax advisors where they're already in place.",
      },
    ],
    seo: {
      title: "Assets — International Real Estate & Luxury Asset Structuring",
      description:
        "Rise360 structures the acquisition, holding and succession of luxury and commercial real estate for Indian principals investing internationally.",
    },
  },
  digital: {
    slug: "digital",
    name: "Digital",
    eyebrow: "Digital",
    mandate: "Digital presence built for the market you're entering, not the one you left.",
    heroSupport:
      "Website, brand and growth systems built for businesses presenting themselves in a new international market.",
    definition:
      "Digital covers the web, brand and growth infrastructure that supports an international move — a site and brand that reads correctly to a new market, and the marketing systems to reach it. We treat this as part of market entry, not an afterthought once the legal structure is in place.",
    services: [
      {
        name: "Website & App Development",
        description:
          "Design and development of websites and applications built for the market you're entering, not a template repurposed from your home market.",
      },
      {
        name: "Graphic Design",
        description:
          "Brand identity and visual design adapted for how your business needs to present itself to a new market's customers and partners.",
      },
      {
        name: "Digital Marketing",
        description:
          "Search, social and paid marketing systems built around how customers in your target market actually discover and evaluate businesses like yours.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description: "We review your current digital presence and how it needs to change for the market you're entering.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "We design the brand, website and marketing approach around how your new market's customers actually discover and evaluate businesses.",
      },
      {
        step: "03",
        title: "Build",
        description: "We develop and launch the website, application or campaign infrastructure.",
      },
      {
        step: "04",
        title: "Grow",
        description: "Ongoing marketing and growth support as your presence in the new market matures.",
      },
    ],
    markets: ["UAE", "Singapore", "UK", "USA"],
    faqs: [
      {
        question: "Do we need a completely new website for each market, or can we adapt our Indian site?",
        answer:
          "It depends on how different the buying behavior and expectations are in the new market. Sometimes localization — language, currency, trust signals — is enough; sometimes the product or positioning is different enough to warrant a dedicated site. We assess this before recommending either.",
      },
      {
        question: "How long does a website or brand refresh take?",
        answer:
          "It depends on scope — a focused brand and marketing site is a materially shorter build than a full application. We scope this specifically once we know what you're building, rather than quoting a generic timeline upfront.",
      },
      {
        question: "What do you need from us to get started?",
        answer:
          "Your current brand assets if they exist, a clear sense of who the new market's customer actually is, and any compliance or industry-specific content requirements for that market. We can work with very little existing material if needed.",
      },
      {
        question: "Does Rise360 run paid advertising accounts and ad spend directly?",
        answer:
          "We design and manage the marketing strategy and campaigns, but ad platform accounts and spend are typically held under your own corporate entity for billing, compliance and ownership reasons — not under ours.",
      },
      {
        question: "Is digital part of every engagement, or only if we ask for it?",
        answer:
          "Only if you ask for it. Digital is a supporting practice, not a required part of a Capital, Mobility, Trade or Assets engagement — some clients need it immediately for market entry, others already have it covered.",
      },
    ],
    seo: {
      title: "Digital — Website, Brand & Growth Systems",
      description:
        "Rise360 builds websites, brand identity and growth marketing systems for Indian businesses presenting themselves in new international markets.",
    },
  },
};

export const CAPABILITY_STRIP_ITEMS: CapabilityStripItem[] = [
  { label: "Four Practices", description: "Capital · Mobility · Trade · Assets" },
  { label: "Nine Services", description: "Advisory through execution" },
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

export const INSIGHTS_PAGE_CONTENT = {
  eyebrow: "Insights",
  heading: "Perspective from inside the structuring work.",
  body: "Practical analysis on jurisdiction choice, cross-border structure, residency and trade compliance — written for the decisions our clients are actually making.",
  seo: {
    title: "Insights — Cross-Border Structuring Analysis",
    description:
      "Practical analysis on jurisdiction choice, cross-border structure, residency by investment and trade compliance from Rise360 Enterprises.",
  },
} as const;

export const ABOUT_CONTENT = {
  eyebrow: "About",
  heading: "One firm, accountable for the whole structure — not just its own piece of it.",
  heroSupport:
    "Rise360 exists because cross-border expansion is usually handled by five disconnected advisors who never see each other's work. We built one firm that sees all of it.",
  mandate:
    "Most Indian businesses expanding internationally end up coordinating their own advisors — a banker here, an immigration consultant there, a real estate broker somewhere else — and discovering the gaps between them only when something breaks. Rise360's mandate is to be the single accountable point across Capital, Mobility, Trade, Assets and Digital, so the structure is designed as one thing from the start, not stitched together after the fact.",
  seo: {
    title: "About Rise360 — Cross-Border Structuring, One Accountable Firm",
    description:
      "Rise360 Enterprises is a single accountable firm structuring Capital, Mobility, Trade, Assets and Digital for Indian businesses expanding internationally.",
  },
} as const;

export const LEADERSHIP_CONTENT = {
  eyebrow: "Leadership",
  heading: "Led by specialists in each discipline, accountable for the outcomes they run.",
  body: "Rise360 is organized around the practice, not a flat hierarchy. Each discipline is led by people who work in it daily and answer directly for what it delivers.",
} as const;

export const LEADERSHIP_AREAS: { title: string; description: string }[] = [
  {
    title: "Capital",
    description: "Led by specialists in multi-currency banking, treasury and digital-asset structuring.",
  },
  {
    title: "Mobility",
    description: "Led by specialists in cross-border immigration and residency strategy.",
  },
  {
    title: "Trade",
    description: "Led by specialists in trade compliance, customs and operating-model design.",
  },
  {
    title: "Assets",
    description: "Led by specialists in international real estate and asset-holding structures.",
  },
  {
    title: "Digital",
    description: "Led by specialists in brand, web and growth systems for market entry.",
  },
];

export const CAREERS_CONTENT = {
  eyebrow: "Careers",
  heading: "No open roles right now.",
  body: "Rise360 doesn't keep a standing careers page open for its own sake. When a practice needs a specialist, we'll list it here. If you work in cross-border banking, immigration law, trade compliance, real estate or digital, and want to be in the loop first, write to us directly.",
  ctaLabel: "careers@rise360enterprises.com",
  ctaHref: "mailto:careers@rise360enterprises.com",
} as const;

export const LEGAL_CONTACT_EMAIL = "hello@rise360enterprises.com";

export const LEGAL_LAST_UPDATED = "July 24, 2026";

export const PRIVACY_SEO = {
  title: "Privacy Policy",
  description:
    "How Rise360 Enterprises collects, uses and protects information from clients and site visitors.",
} as const;

export const TERMS_SEO = {
  title: "Terms of Engagement",
  description:
    "The general terms governing engagements with Rise360 Enterprises across Capital, Mobility, Trade, Assets and Digital.",
} as const;

export const DISCLOSURES_SEO = {
  title: "Disclosures",
  description:
    "Regulatory status, licensing scope and third-party partner disclosures for Rise360 Enterprises.",
} as const;

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

export function getPracticeCtaBody(practiceName: string): string {
  return `A ${practiceName} consultation begins with your structure, not our services.`;
}
