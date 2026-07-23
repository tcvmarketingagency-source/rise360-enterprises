import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Practice } from "@/types";

export function PracticeServices({ practice }: { practice: Practice }) {
  return (
    <Section id="services" className="bg-paper-soft">
      <Container>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
        </Reveal>

        <div className="mt-10 border-t border-hairline">
          {practice.services.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.06}>
              <div className="group flex items-center justify-between gap-6 border-b border-hairline py-8 transition-colors duration-200 hover:bg-ink-soft">
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="font-display text-sm text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-display-lg text-ink transition-colors duration-200 group-hover:text-paper">
                      {service.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-body text-slate transition-colors duration-200 group-hover:text-paper/70">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-ink transition-[transform,color] duration-200 group-hover:translate-x-1.5 group-hover:text-paper"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
