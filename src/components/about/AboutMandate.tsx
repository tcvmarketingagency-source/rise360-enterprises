import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ABOUT_CONTENT } from "@/lib/content";

export function AboutMandate() {
  return (
    <Section>
      <Container>
        <Reveal>
          <p className="max-w-4xl font-display text-display-lg leading-[1.3] text-ink">
            {ABOUT_CONTENT.mandate}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
