# Rise360 Enterprises

Marketing and content site for Rise360 Enterprises — cross-border structuring across
Capital, Mobility, Trade, Assets and Digital for Indian businesses and principals
expanding internationally.

Built with Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4, Framer
Motion and Lenis smooth scroll. Long-form content (Insights) is authored as MDX with
frontmatter and parsed at build time — no CMS, no runtime `fs` access.

## Prerequisites

- Node.js **20.9 or later**
- npm (ships with Node)

## Setup

```bash
git clone https://github.com/tcvmarketingagency-source/rise360-enterprises.git
cd rise360-enterprises
npm install
```

Copy any environment variables you need into `.env.local` (none are required for a
local build — the site has no external API dependencies).

## Development

```bash
npm run dev
```

Opens the app at [http://localhost:3000](http://localhost:3000) with hot reload.

## Other scripts

| Command         | Purpose                                                |
| ---------------- | ------------------------------------------------------ |
| `npm run build`  | Production build (Turbopack), prerenders all static routes |
| `npm run start`  | Serve the production build locally                     |
| `npm run lint`   | Run ESLint                                              |

Before opening a PR, run all three checks:

```bash
npx tsc --noEmit
npx eslint src
npm run build
```

## Project structure

```
content/insights/        MDX articles (frontmatter + body) — read at build time only
src/app/                 Routes (App Router): /, /capabilities/[slug], /insights,
                         /insights/[slug], /about, /privacy, /terms, /disclosures,
                         sitemap.ts, robots.ts
src/components/          UI grouped by area: ui/, layout/, home/, practice/,
                         insights/, about/, legal/
src/lib/content.ts       All site copy and structured content (nav, footer, practices,
                         hero copy, SEO metadata per page)
src/lib/insights.ts      getAllArticles / getArticleBySlug / getArticlesByPractice
src/types/index.ts       Shared TypeScript types (Practice, Article, etc.)
```

## Adding an Insights article

Add a new `.mdx` file to `content/insights/` with this frontmatter:

```yaml
---
title: "Article Title"
slug: "article-title-slug"
excerpt: "One or two sentences shown in article listings."
publishedAt: "2026-08-01" # ISO date, not in the future
updatedAt: "2026-08-15" # optional
practice: "capital" # capital | mobility | trade | assets | digital
markets: ["UAE", "Singapore"]
seo:
  title: "SEO title"
  description: "SEO description"
---
```

Followed by the article body in Markdown/MDX. `readingTime` is computed automatically
— do not add it to the frontmatter. The article is picked up automatically by
`getAllArticles()`, appears in `/insights`, gets its own static route at
`/insights/[slug]`, and is added to `sitemap.ts` on the next build. No code changes
are needed.

## Configuration notes

- Site-wide constants (name, tagline, canonical URL) live in `SITE` in
  `src/lib/content.ts` — update `SITE.url` if the production domain changes, since
  `metadataBase` and canonical URLs derive from it.
- The legal pages (`/privacy`, `/terms`, `/disclosures`) are drafted boilerplate and
  have **not** been reviewed by qualified legal counsel — have them reviewed before
  relying on them in production.

## Deployment

The app is a standard Next.js App Router project and deploys to any Next.js-compatible
host (e.g. Vercel) with no additional configuration.
