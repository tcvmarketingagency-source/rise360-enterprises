import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { InsightsHero } from "@/components/insights/InsightsHero";
import { InsightsList } from "@/components/insights/InsightsList";
import { INSIGHTS_PAGE_CONTENT } from "@/lib/content";
import { getAllArticles } from "@/lib/insights";

export const metadata: Metadata = {
  title: INSIGHTS_PAGE_CONTENT.seo.title,
  description: INSIGHTS_PAGE_CONTENT.seo.description,
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: INSIGHTS_PAGE_CONTENT.seo.title,
    description: INSIGHTS_PAGE_CONTENT.seo.description,
    url: "/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  const articles = getAllArticles();

  return (
    <>
      <InsightsHero />
      <InsightsList articles={articles} />
      <ConsultationCTA />
    </>
  );
}
