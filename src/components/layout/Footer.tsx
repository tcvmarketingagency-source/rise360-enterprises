import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";
import { FOOTER_COLUMNS, FOOTER_LEGAL, SOCIAL_LINKS } from "@/lib/content";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2h3.308l-7.227 8.26L23 22h-6.657l-5.213-6.817L5.15 22H1.84l7.73-8.835L1 2h6.828l4.713 6.231L18.244 2Zm-1.161 18h1.833L7.084 3.9H5.117L17.083 20Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container>
        <Hairline />

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16 md:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="font-ui text-sm font-medium text-paper">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-ui text-sm text-slate transition-colors duration-200 hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Hairline />

        <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 font-ui text-sm text-slate md:flex-row md:gap-4">
            <span>{FOOTER_LEGAL.copyright}</span>
            <span>{FOOTER_LEGAL.registration}</span>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-paper opacity-40 transition-opacity duration-200 hover:opacity-100"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
