import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PROSE_CLASSNAME } from "@/lib/prose";

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <Section>
      <Container>
        <div className={PROSE_CLASSNAME}>{children}</div>
      </Container>
    </Section>
  );
}
