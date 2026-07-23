import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Practice } from "@/types";

export function PracticeMarkets({ practice }: { practice: Practice }) {
  return (
    <Section id="markets" className="bg-paper-soft">
      <Container>
        <Reveal>
          <Eyebrow>Markets</Eyebrow>
          <div className="mt-10 flex flex-wrap divide-x divide-hairline">
            {practice.markets.map((market) => (
              <span key={market} className="px-6 font-ui text-heading text-ink first:pl-0">
                {market}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
