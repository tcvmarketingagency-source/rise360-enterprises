import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ArticleBody } from "@/components/insights/ArticleBody";
import { ArticleFooter } from "@/components/insights/ArticleFooter";
import { ArticleHeader } from "@/components/insights/ArticleHeader";
import { LEGAL_ENTITY_NAME, SITE } from "@/lib/content";
import { getAllArticles, getArticleBySlug } from "@/lib/insights";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const url = `/insights/${article.slug}`;

  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [SITE.name],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const articles = getAllArticles();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const index = articles.findIndex((item) => item.slug === slug);
  const nextArticle = articles[index + 1];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    description: article.seo.description,
    author: {
      "@type": "Organization",
      name: LEGAL_ENTITY_NAME,
      url: SITE.url,
    },
  };

  return (
    <>
      <ArticleHeader article={article} />
      <ArticleBody content={article.content} />
      <ArticleFooter practice={article.practice} nextArticle={nextArticle} />
      <ConsultationCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
