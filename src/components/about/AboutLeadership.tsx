import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { LEADERSHIP_AREAS, LEADERSHIP_CONTENT } from "@/lib/content";

export function AboutLeadership() {
  return (
    <Section id="leadership" className="bg-paper-soft">
      <Container>
        <Reveal>
          <Eyebrow>{LEADERSHIP_CONTENT.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-lg text-ink">
            {LEADERSHIP_CONTENT.heading}
          </h2>
          <p className="mt-6 max-w-xl text-body text-slate">{LEADERSHIP_CONTENT.body}</p>
        </Reveal>

        <div className="mt-16 border-t border-hairline">
          {LEADERSHIP_AREAS.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.06}>
              <div className="flex items-baseline gap-6 border-b border-hairline py-8 md:gap-10">
                <span className="font-display text-sm text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-heading text-ink">{area.title}</h3>
                  <p className="mt-2 max-w-xl text-body text-slate">{area.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
