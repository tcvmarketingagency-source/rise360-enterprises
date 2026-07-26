import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { SERVICES_CONTENT } from "@/lib/content";

export function ServicesShowcase() {
  return (
    <Section id="services">
      <Container>
        <Reveal>
          <Eyebrow>{SERVICES_CONTENT.eyebrow}</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-display-lg text-ink">
            {SERVICES_CONTENT.heading}
          </h2>
        </Reveal>

        <div className="mt-16">
          <ServicesGrid />
        </div>
      </Container>
    </Section>
  );
}
