import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PracticeTemplate } from "@/components/practice/PracticeTemplate";
import { PRACTICES } from "@/lib/content";

interface PracticePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(PRACTICES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PracticePageProps): Promise<Metadata> {
  const { slug } = await params;
  const practice = PRACTICES[slug];

  if (!practice) {
    return {};
  }

  return {
    title: practice.seo.title,
    description: practice.seo.description,
  };
}

export default async function PracticePage({ params }: PracticePageProps) {
  const { slug } = await params;
  const practice = PRACTICES[slug];

  if (!practice) {
    notFound();
  }

  return <PracticeTemplate practice={practice} />;
}
