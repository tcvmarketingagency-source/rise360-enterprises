import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PRACTICES } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

export function ArticleHeader({ article }: { article: Article }) {
  const practice = PRACTICES[article.practice];

  return (
    <Section className="bg-ink pb-16 pt-40 text-paper md:pb-20 md:pt-56">
      <Container>
        <Reveal>
          <Link href={`/capabilities/${practice.slug}`} className="inline-block">
            <Eyebrow className="transition-colors duration-200 hover:text-brass-dim">
              {practice.name}
            </Eyebrow>
          </Link>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg">{article.title}</h1>
          <div className="mt-6 flex items-center gap-3 font-ui text-sm text-paper/70">
            <span>{formatDate(article.publishedAt)}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
        </Reveal>
      </Container>
      <Container className="mt-16">
        <Hairline className="bg-brass/[0.18]" />
      </Container>
    </Section>
  );
}
