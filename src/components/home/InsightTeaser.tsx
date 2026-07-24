import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { INSIGHTS_CONTENT, PRACTICES } from "@/lib/content";
import { getAllArticles } from "@/lib/insights";
import { formatDate } from "@/lib/utils";

export function InsightTeaser() {
  const [latest] = getAllArticles();

  if (!latest) {
    return null;
  }

  return (
    <Section id="insights" className="bg-paper-soft">
      <Container>
        <Reveal>
          <Eyebrow>{INSIGHTS_CONTENT.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-lg text-ink">
            {INSIGHTS_CONTENT.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="mt-16">
          <Link
            href={`/insights/${latest.slug}`}
            className="group block border-t border-hairline pt-8"
          >
            <span className="font-ui text-caption uppercase text-brass">
              {PRACTICES[latest.practice].name}
            </span>
            <h3 className="mt-4 font-display text-heading text-ink transition-colors duration-200 group-hover:text-brass-dim">
              {latest.title}
            </h3>
            <p className="mt-4 max-w-2xl text-body text-slate">{latest.excerpt}</p>
            <div className="mt-4 flex items-center gap-3 font-ui text-sm text-slate">
              <span>{formatDate(latest.publishedAt)}</span>
              <span aria-hidden="true">·</span>
              <span>{latest.readingTime}</span>
            </div>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
