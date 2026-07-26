import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { CONSULTATION_CONTENT } from "@/lib/content";

interface ConsultationCTAProps {
  heading?: string;
  body?: string;
  practiceSlug?: string;
}

export function ConsultationCTA({ heading, body, practiceSlug }: ConsultationCTAProps = {}) {
  const href = practiceSlug ? `/consultation?practice=${practiceSlug}` : "/consultation";

  return (
    <Section id="consultation" className="bg-ink text-paper">
      <Container>
        <Reveal className="flex flex-col items-start gap-8">
          <h2 className="max-w-2xl font-display text-display-lg">
            {heading ?? CONSULTATION_CONTENT.heading}
          </h2>
          <p className="max-w-md text-body text-paper/70">
            {body ?? CONSULTATION_CONTENT.body}
          </p>
          <Button href={href} variant="primary">
            Private Consultation
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
