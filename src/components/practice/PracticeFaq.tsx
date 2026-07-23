import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import type { Practice } from "@/types";

export function PracticeFaq({ practice }: { practice: Practice }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: practice.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Section id="faq">
      <Container>
        <Reveal>
          <Eyebrow>Frequently Asked</Eyebrow>
        </Reveal>

        <div className="mt-10 border-t border-hairline">
          {practice.faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-hairline py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-heading text-ink [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-2xl leading-none text-brass transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl text-body text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </Section>
  );
}
