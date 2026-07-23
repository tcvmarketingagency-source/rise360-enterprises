"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { A11Y_LABELS, HEADER_CONTENT, NAV_LINKS } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  const showSolidChrome = !isHome || scrolled;

  useEffect(() => {
    if (!mobileOpen) return;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        showSolidChrome
          ? "border-hairline bg-paper/80 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between md:grid md:grid-cols-3">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-[-0.02em] text-ink"
        >
          {HEADER_CONTENT.wordmark}
          <span className="text-brass">.</span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 md:flex"
          aria-label={A11Y_LABELS.primaryNav}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-ui text-sm text-ink/80 transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
          <Button
            href={HEADER_CONTENT.ctaHref}
            variant="ghost"
            className="hidden md:inline-flex"
          >
            {HEADER_CONTENT.ctaLabel}
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
            aria-label={A11Y_LABELS.openMenu}
            aria-expanded={mobileOpen}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label={A11Y_LABELS.mobileNav}
            className="fixed inset-0 z-50 flex flex-col bg-paper md:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="flex h-20 items-center justify-between">
              <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                {HEADER_CONTENT.wordmark}
                <span className="text-brass">.</span>
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-ink"
                aria-label={A11Y_LABELS.closeMenu}
              >
                <X size={22} aria-hidden="true" />
              </button>
            </Container>

            <nav
              className="flex flex-1 flex-col items-start justify-center gap-6 px-6"
              aria-label={A11Y_LABELS.mobileNavList}
            >
              {NAV_LINKS.map((link, index) => (
                <m.div
                  key={link.href}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl text-ink"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}

              <Button
                href={HEADER_CONTENT.ctaHref}
                variant="primary"
                className="mt-4"
                onClick={() => setMobileOpen(false)}
              >
                {HEADER_CONTENT.ctaLabel}
              </Button>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
