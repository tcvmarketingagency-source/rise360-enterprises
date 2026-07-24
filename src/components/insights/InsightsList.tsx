import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PRACTICES } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Article } from "@/types";

export function InsightsList({ articles }: { articles: Article[] }) {
  return (
    <Section>
      <Container>
        <div className="border-t border-hairline">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.06}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block border-b border-hairline py-10 transition-colors duration-200 hover:bg-ink-soft"
              >
                <span className="font-ui text-caption uppercase text-slate transition-colors duration-200 group-hover:text-paper/60">
                  {formatDate(article.publishedAt)}
                </span>
                <h2 className="mt-3 font-display text-display-lg text-ink transition-colors duration-200 group-hover:text-paper">
                  {article.title}
                </h2>
                <p className="mt-4 line-clamp-2 max-w-2xl text-body text-slate transition-colors duration-200 group-hover:text-paper/70">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="font-ui text-caption uppercase text-brass">
                    {PRACTICES[article.practice].name}
                  </span>
                  <span className="font-ui text-sm text-slate transition-colors duration-200 group-hover:text-paper/60">
                    {article.readingTime}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
