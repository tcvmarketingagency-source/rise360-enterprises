"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useHeroReady } from "@/components/layout/PreloaderProvider";

const EASE = [0.22, 1, 0.36, 1] as const;

interface HeroSupportingProps {
  delay: number;
  children: ReactNode;
}

export function HeroSupporting({ delay, children }: HeroSupportingProps) {
  const shouldReduceMotion = useReducedMotion();
  const ready = useHeroReady();

  return (
    <m.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}
