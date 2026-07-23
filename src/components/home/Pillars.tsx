import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { DIGITAL_NOTE, PILLARS, PILLARS_CONTENT } from "@/lib/content";

export function Pillars() {
  return (
    <Section id="capabilities">
      <Container>
        <Reveal>
          <Eyebrow>{PILLARS_CONTENT.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-lg text-ink">
            {PILLARS_CONTENT.heading}
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-hairline">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.06}>
              <div className="group flex items-center justify-between gap-6 border-b border-hairline py-8 transition-colors duration-200 hover:bg-ink-soft">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-display text-sm text-brass">{pillar.index}</span>
                  <div>
                    <h3 className="font-display text-display-lg text-ink transition-colors duration-200 group-hover:text-paper">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-body text-slate transition-colors duration-200 group-hover:text-paper/70">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-ink transition-[transform,color] duration-200 group-hover:translate-x-1.5 group-hover:text-paper"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-ui text-sm text-slate">{DIGITAL_NOTE}</p>
      </Container>
    </Section>
  );
}
