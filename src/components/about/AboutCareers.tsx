import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CAREERS_CONTENT } from "@/lib/content";

export function AboutCareers() {
  return (
    <Section id="careers">
      <Container>
        <Reveal className="flex flex-col items-start gap-6">
          <Eyebrow>{CAREERS_CONTENT.eyebrow}</Eyebrow>
          <h2 className="max-w-2xl font-display text-display-lg text-ink">
            {CAREERS_CONTENT.heading}
          </h2>
          <p className="max-w-xl text-body text-slate">{CAREERS_CONTENT.body}</p>
          <Button href={CAREERS_CONTENT.ctaHref} variant="ghost">
            {CAREERS_CONTENT.ctaLabel}
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
