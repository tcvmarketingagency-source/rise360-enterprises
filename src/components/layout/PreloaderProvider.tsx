"use client";

import { cubicBezier, m } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const SESSION_KEY = "rise360:preloader-shown";
const COUNT_DURATION_MS = 1000;
const HOLD_DURATION_MS = 150;
const EXIT_DURATION_S = 0.4;
const EASE = [0.22, 1, 0.36, 1] as const;
const ease = cubicBezier(...EASE);

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Phase = "pending" | "counting" | "exiting" | "hidden";

const HeroReadyContext = createContext(false);

export function useHeroReady() {
  return useContext(HeroReadyContext);
}

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("pending");
  const [count, setCount] = useState(0);
  const [heroReady, setHeroReady] = useState(false);
  const hairlineRef = useRef<HTMLDivElement>(null);
  const decidedRef = useRef(false);
  const rafRef = useRef(0);
  const exitTimeoutRef = useRef<number | undefined>(undefined);
  const skippedRef = useRef(false);

  // Called from timer/event callbacks (never from an effect body) so the
  // resulting state updates are a direct response to that callback, not a
  // derived-state chain reacting to `phase` itself.
  const enterExiting = useCallback(() => {
    document.body.style.overflow = "";
    setHeroReady(true);
    setPhase("exiting");
    exitTimeoutRef.current = window.setTimeout(() => setPhase("hidden"), EXIT_DURATION_S * 1000);
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (decidedRef.current) return;
    decidedRef.current = true;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyShown = window.sessionStorage.getItem(SESSION_KEY);

    if (pathname !== "/" || reduced || alreadyShown) {
      setPhase("hidden");
      setHeroReady(true);
      return;
    }

    window.sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("counting");
  }, [pathname]);

  useEffect(() => {
    if (phase !== "counting") return;

    document.body.style.overflow = "hidden";
    const start = performance.now();
    let lastDisplayed = -1;

    function frame(now: number) {
      const elapsed = now - start;
      const t = Math.min(elapsed / COUNT_DURATION_MS, 1);
      const eased = ease(t);

      if (hairlineRef.current) {
        hairlineRef.current.style.transform = `scaleX(${eased})`;
      }

      const displayed = Math.round(eased * 100);
      if (displayed !== lastDisplayed) {
        lastDisplayed = displayed;
        setCount(displayed);
      }

      if (t < 1) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        window.setTimeout(() => {
          if (!skippedRef.current) enterExiting();
        }, HOLD_DURATION_MS);
      }
    }

    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, enterExiting]);

  useEffect(() => {
    if (phase !== "counting") return;

    function skip() {
      if (skippedRef.current) return;
      skippedRef.current = true;
      cancelAnimationFrame(rafRef.current);
      setCount(100);
      if (hairlineRef.current) hairlineRef.current.style.transform = "scaleX(1)";
      enterExiting();
    }

    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, [phase, enterExiting]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(exitTimeoutRef.current);
    };
  }, []);

  return (
    <HeroReadyContext.Provider value={heroReady}>
      {(phase === "counting" || phase === "exiting") && (
        <m.div
          role="presentation"
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={false}
          animate={phase === "exiting" ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: EXIT_DURATION_S, ease: EASE }}
        >
          <div className="flex items-center gap-2 font-display text-2xl text-paper">
            <span>RISE360</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
          </div>
          <div className="mt-6 font-ui text-sm tabular-nums text-brass">{count}</div>
          <div className="mt-4 h-px w-40 overflow-hidden bg-hairline">
            <div
              ref={hairlineRef}
              className="h-full w-full origin-left bg-brass"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </m.div>
      )}
      {children}
    </HeroReadyContext.Provider>
  );
}
