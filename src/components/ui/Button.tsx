import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center whitespace-nowrap font-ui text-sm px-6 py-3 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brass text-paper hover:bg-brass-dim",
  ghost: "border border-hairline text-ink hover:border-brass",
};

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
}

interface NativeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  variant?: ButtonVariant;
  children: ReactNode;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (props.href) {
    const { href, ...rest } = props as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const rest = props as NativeButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
