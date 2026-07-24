import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { AboutCareers } from "@/components/about/AboutCareers";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutMandate } from "@/components/about/AboutMandate";
import { ABOUT_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
  title: ABOUT_CONTENT.seo.title,
  description: ABOUT_CONTENT.seo.description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: ABOUT_CONTENT.seo.title,
    description: ABOUT_CONTENT.seo.description,
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMandate />
      <AboutLeadership />
      <AboutCareers />
      <ConsultationCTA />
    </>
  );
}
