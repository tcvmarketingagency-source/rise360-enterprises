import { AccentText } from "@/components/ui/AccentText";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SERVICES_PAGE_CONTENT } from "@/lib/content";

export function ServicesHero() {
  return (
    <Section className="bg-ink pb-16 pt-40 text-paper md:pb-20 md:pt-56">
      <Container>
        <Reveal>
          <Eyebrow>{SERVICES_PAGE_CONTENT.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg">
            <AccentText
              text={SERVICES_PAGE_CONTENT.heading}
              accent={SERVICES_PAGE_CONTENT.headingAccent}
            />
          </h1>
          <p className="mt-6 max-w-xl text-body text-paper/70">{SERVICES_PAGE_CONTENT.body}</p>
        </Reveal>
      </Container>
      <Container className="mt-16">
        <Hairline className="bg-brass/[0.18]" />
      </Container>
    </Section>
  );
}
