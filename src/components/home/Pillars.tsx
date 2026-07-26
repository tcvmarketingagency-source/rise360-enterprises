import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PILLARS, PILLARS_CONTENT } from "@/lib/content";

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

        <Reveal delay={0.06}>
          <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-hairline pt-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.title} className="flex items-baseline gap-3">
                <span className="font-display text-sm text-brass">{pillar.index}</span>
                <span className="font-display text-heading text-ink">{pillar.title}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
