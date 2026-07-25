import { AccentText } from "@/components/ui/AccentText";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { HERO_CONTENT } from "@/lib/content";

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-40 pb-24 md:pt-56 md:pb-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[28rem] leading-none text-brass/[0.04] md:text-[36rem]"
      >
        360
      </span>

      <Container className="relative">
        <Reveal>
          <Eyebrow>{HERO_CONTENT.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-display-xl text-ink">
            <AccentText text={HERO_CONTENT.headline} accent="structure" />
          </h1>
          <p className="mt-8 max-w-xl text-body text-slate">{HERO_CONTENT.body}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={HERO_CONTENT.primaryCta.href} variant="primary">
              {HERO_CONTENT.primaryCta.label}
            </Button>
            <Button href={HERO_CONTENT.secondaryCta.href} variant="ghost">
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
