import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HairlineProps = HTMLAttributes<HTMLDivElement>;

export function Hairline({ className, ...props }: HairlineProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-px w-full bg-brass-dim/[0.18]", className)}
      {...props}
    />
  );
}
