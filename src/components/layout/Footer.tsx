import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Hairline } from "@/components/ui/Hairline";
import { CONTACT, FOOTER_COLUMNS, FOOTER_LEGAL } from "@/lib/content";

const linkClassName =
  "font-ui text-sm text-slate transition-colors duration-200 hover:text-paper";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container>
        <Hairline />

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16 md:grid-cols-5">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="font-ui text-sm font-medium text-paper">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={linkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="font-ui text-sm font-medium text-paper">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={CONTACT.phone.href} className={linkClassName}>
                  Call {CONTACT.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noreferrer"
                  className={linkClassName}
                >
                  WhatsApp {CONTACT.whatsapp.label}
                </a>
              </li>
              <li>
                <a href={CONTACT.email.href} className={linkClassName}>
                  {CONTACT.email.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Hairline />

        <div className="flex flex-col gap-1 py-8 font-ui text-sm text-slate md:flex-row md:gap-4">
          <span>{FOOTER_LEGAL.copyright}</span>
          <span>{FOOTER_LEGAL.registration}</span>
        </div>
      </Container>
    </footer>
  );
}
