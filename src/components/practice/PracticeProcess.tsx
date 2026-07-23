import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Practice } from "@/types";

export function PracticeProcess({ practice }: { practice: Practice }) {
  return (
    <Section id="process">
      <Container>
        <Reveal>
          <Eyebrow>How We Work</Eyebrow>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {practice.process.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="border-l-2 border-hairline pl-6 md:border-l-0 md:border-t-2 md:pl-0 md:pt-6">
                <span className="font-display text-sm text-brass">{step.step}</span>
                <h3 className="mt-3 font-display text-heading text-ink">{step.title}</h3>
                <p className="mt-2 text-body text-slate">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
