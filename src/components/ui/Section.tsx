import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-24 md:py-40", className)} {...props}>
      {children}
    </section>
  );
}
