import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CASE_STUDY } from "@/lib/content";

export function CaseStudy() {
  return (
    <Section id="case-study">
      <Container>
        <Reveal>
          <Eyebrow>{CASE_STUDY.eyebrow}</Eyebrow>
        </Reveal>
      </Container>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
        <Reveal className="relative flex min-h-[20rem] items-center justify-center overflow-hidden bg-ink-soft md:min-h-[28rem]">
          <div aria-hidden="true" className="absolute inset-6 border border-brass/[0.18]" />
          <span
            aria-hidden="true"
            className="select-none font-display text-[12rem] leading-none text-brass/10 md:text-[16rem]"
          >
            {CASE_STUDY.numeral}
          </span>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col justify-center gap-6 bg-paper-soft px-6 py-16 md:px-16"
        >
          <h2 className="max-w-md font-display text-display-lg text-ink">
            {CASE_STUDY.title}
          </h2>
          <p className="max-w-md text-body text-slate">{CASE_STUDY.summary}</p>

          <div className="flex flex-wrap divide-x divide-hairline">
            {CASE_STUDY.metrics.map((metric) => (
              <div key={metric.label} className="px-6 first:pl-0">
                <span className="block font-display text-heading text-brass">
                  {metric.value}
                </span>
                <span className="block font-ui text-caption uppercase text-slate">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href={CASE_STUDY.ctaHref}
            className="inline-flex w-fit items-center gap-2 font-ui text-sm text-ink transition-colors duration-200 hover:text-brass-dim"
          >
            {CASE_STUDY.ctaLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
