"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PROOF_METRICS } from "@/lib/content";
import { cn } from "@/lib/utils";

const COUNT_UP_DURATION_MS = 1200;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function Metric({
  target,
  suffix,
  label,
  className,
}: {
  target: number;
  suffix: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;

    let rafId: number;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / COUNT_UP_DURATION_MS, 1);
      setCount(Math.round(target * easeOutCubic(progress)));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    }

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [inView, target]);

  return (
    <div ref={ref} className={cn("flex flex-col gap-2 px-6 py-6 text-center", className)}>
      <span className="font-display text-display-lg text-brass">
        {count}
        {suffix}
      </span>
      <span className="font-ui text-caption uppercase text-paper/60">{label}</span>
    </div>
  );
}

export function ProofStrip() {
  const lastIndex = PROOF_METRICS.length - 1;

  return (
    <Section id="proof" className="bg-ink text-paper">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {PROOF_METRICS.map((metric, index) => {
            const rightColMobile = index % 2 === 1;
            const bottomRowMobile = index >= 2;
            const lastOverall = index === lastIndex;

            return (
              <Metric
                key={metric.label}
                target={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                className={cn(
                  !rightColMobile && "border-r border-hairline",
                  rightColMobile && !lastOverall && "md:border-r md:border-hairline",
                  !bottomRowMobile && "border-b border-hairline md:border-b-0",
                )}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
