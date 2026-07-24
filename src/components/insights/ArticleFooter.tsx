import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PRACTICES } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Article, PracticeSlug } from "@/types";

interface ArticleFooterProps {
  practice: PracticeSlug;
  nextArticle?: Article;
}

export function ArticleFooter({ practice, nextArticle }: ArticleFooterProps) {
  const practiceData = PRACTICES[practice];

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-[68ch]">
          <Reveal>
            <Link
              href={`/capabilities/${practiceData.slug}`}
              className="group inline-flex items-center gap-2 font-ui text-sm text-ink transition-colors duration-200 hover:text-brass"
            >
              This relates to our {practiceData.name} practice
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          {nextArticle && (
            <>
              <Hairline className="mt-12" />
              <Reveal className="mt-12">
                <Link href={`/insights/${nextArticle.slug}`} className="group block">
                  <span className="font-ui text-caption uppercase text-brass">Next</span>
                  <h2 className="mt-3 font-display text-display-lg text-ink transition-colors duration-200 group-hover:text-brass-dim">
                    {nextArticle.title}
                  </h2>
                  <span className="mt-3 block font-ui text-sm text-slate">
                    {formatDate(nextArticle.publishedAt)}
                  </span>
                </Link>
              </Reveal>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
