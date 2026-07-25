"use client";

import { m, useReducedMotion } from "framer-motion";
import { useHeroReady } from "@/components/layout/PreloaderProvider";
import { heroHeadlineTiming, WORD_DURATION_S, WORD_STAGGER_S } from "@/lib/hero-headline-timing";

const EASE = [0.22, 1, 0.36, 1] as const;

interface HeroHeadlineProps {
  text: string;
  accent: string;
}

export function HeroHeadline({ text, accent }: HeroHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();
  const ready = useHeroReady();
  const words = text.split(" ");
  const lastIndex = words.length - 1;
  const { accentDelay } = heroHeadlineTiming(words.length);

  return (
    <>
      {words.map((word, i) => {
        const isAccent = word.includes(accent);
        const content = isAccent ? <em className="text-brass italic">{word}</em> : word;
        const trailingSpace = i < lastIndex ? " " : "";

        if (shouldReduceMotion) {
          return (
            <span key={i}>
              {content}
              {trailingSpace}
            </span>
          );
        }

        const delay = isAccent ? accentDelay : i * WORD_STAGGER_S;

        return (
          <m.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: WORD_DURATION_S, delay, ease: EASE }}
          >
            {content}
            {trailingSpace}
          </m.span>
        );
      })}
    </>
  );
}
