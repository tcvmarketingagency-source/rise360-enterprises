import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { INSIGHTS, INSIGHTS_CONTENT } from "@/lib/content";

export function InsightTeaser() {
  return (
    <Section id="insights" className="bg-paper-soft">
      <Container>
        <Reveal>
          <Eyebrow>{INSIGHTS_CONTENT.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-lg text-ink">
            {INSIGHTS_CONTENT.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {INSIGHTS.map((insight, index) => (
            <Reveal key={insight.title} delay={index * 0.06}>
              <Link href="/#insights" className="group block border-t border-hairline pt-8">
                <span className="font-ui text-caption uppercase text-brass">
                  {insight.category}
                </span>
                <h3 className="mt-4 font-display text-heading text-ink transition-colors duration-200 group-hover:text-brass-dim">
                  {insight.title}
                </h3>
                <span className="mt-4 block font-ui text-sm text-slate">{insight.readTime}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
