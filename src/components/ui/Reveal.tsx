"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Reveal({ delay = 0, className, children }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
