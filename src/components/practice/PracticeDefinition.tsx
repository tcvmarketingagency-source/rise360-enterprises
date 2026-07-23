import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Practice } from "@/types";

export function PracticeDefinition({ practice }: { practice: Practice }) {
  return (
    <Section>
      <Container>
        <Reveal>
          <p className="max-w-4xl font-display text-display-lg leading-[1.3] text-ink">
            {practice.definition}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
