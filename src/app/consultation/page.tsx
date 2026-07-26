import type { Metadata } from "next";
import { ConsultationFlow } from "@/components/consultation/ConsultationFlow";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CONSULTATION_PAGE_CONTENT } from "@/lib/content";
import { PRACTICE_SLUGS, type PracticeSlugValue } from "@/lib/consultation-schema";

interface ConsultationPageProps {
  searchParams: Promise<{ practice?: string }>;
}

export const metadata: Metadata = {
  title: CONSULTATION_PAGE_CONTENT.seo.title,
  description: CONSULTATION_PAGE_CONTENT.seo.description,
  alternates: {
    canonical: "/consultation",
  },
  openGraph: {
    title: CONSULTATION_PAGE_CONTENT.seo.title,
    description: CONSULTATION_PAGE_CONTENT.seo.description,
    url: "/consultation",
    type: "website",
  },
};

function isPracticeSlug(value: string | undefined): value is PracticeSlugValue {
  return Boolean(value) && (PRACTICE_SLUGS as readonly string[]).includes(value ?? "");
}

export default async function ConsultationPage({ searchParams }: ConsultationPageProps) {
  const { practice } = await searchParams;
  const initialPracticeSlug = isPracticeSlug(practice) ? practice : undefined;

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{CONSULTATION_PAGE_CONTENT.eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-display-lg text-ink">
            {CONSULTATION_PAGE_CONTENT.heading}
          </h1>
          <p className="mt-4 text-body text-slate">{CONSULTATION_PAGE_CONTENT.body}</p>
        </div>

        <div className="mt-16">
          <ConsultationFlow initialPracticeSlug={initialPracticeSlug} />
        </div>
      </Container>
    </Section>
  );
}
