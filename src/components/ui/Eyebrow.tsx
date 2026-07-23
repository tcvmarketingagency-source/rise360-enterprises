import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement>;

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-ui text-caption uppercase text-brass",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
