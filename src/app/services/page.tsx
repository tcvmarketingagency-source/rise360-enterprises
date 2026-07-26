import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesHero } from "@/components/services/ServicesHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SERVICES_PAGE_CONTENT } from "@/lib/content";

export const metadata: Metadata = {
  title: SERVICES_PAGE_CONTENT.seo.title,
  description: SERVICES_PAGE_CONTENT.seo.description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: SERVICES_PAGE_CONTENT.seo.title,
    description: SERVICES_PAGE_CONTENT.seo.description,
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Section>
        <Container>
          <ServicesGrid detailed />
        </Container>
      </Section>
      <ConsultationCTA />
    </>
  );
}
