import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { LEGAL_LAST_UPDATED } from "@/lib/content";

export function LegalHero({ title }: { title: string }) {
  return (
    <Section className="bg-ink pb-16 pt-40 text-paper md:pb-20 md:pt-56">
      <Container>
        <Reveal>
          <Eyebrow>Legal</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg">{title}</h1>
          <p className="mt-6 font-ui text-sm text-paper/70">
            Last updated: {LEGAL_LAST_UPDATED}
          </p>
        </Reveal>
      </Container>
      <Container className="mt-16">
        <Hairline className="bg-brass/[0.18]" />
      </Container>
    </Section>
  );
}
