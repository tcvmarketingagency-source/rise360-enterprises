import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { MANDATE_CONTENT } from "@/lib/content";

export function Mandate() {
  return (
    <Section id="mandate">
      <Container>
        <Reveal>
          <Eyebrow>{MANDATE_CONTENT.eyebrow}</Eyebrow>
          <p className="mt-6 max-w-4xl font-display text-display-lg leading-[1.3] text-ink">
            {MANDATE_CONTENT.statement}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
