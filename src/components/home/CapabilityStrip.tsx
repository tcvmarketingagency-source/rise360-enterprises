import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CAPABILITY_STRIP_ITEMS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function CapabilityStrip() {
  const lastIndex = CAPABILITY_STRIP_ITEMS.length - 1;

  return (
    <Section id="capability-strip" className="bg-ink text-paper">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {CAPABILITY_STRIP_ITEMS.map((item, index) => {
            const rightColMobile = index % 2 === 1;
            const bottomRowMobile = index >= 2;
            const lastOverall = index === lastIndex;

            return (
              <div
                key={item.label}
                className={cn(
                  "flex flex-col gap-2 px-6 py-6 text-center",
                  !rightColMobile && "border-r border-hairline",
                  rightColMobile && !lastOverall && "md:border-r md:border-hairline",
                  !bottomRowMobile && "border-b border-hairline md:border-b-0",
                )}
              >
                <span className="font-display text-display-lg text-brass">{item.label}</span>
                <span className="font-ui text-caption uppercase text-paper/60">
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
