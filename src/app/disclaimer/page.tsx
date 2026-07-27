import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { LegalBody } from "@/components/legal/LegalBody";
import { LegalHero } from "@/components/legal/LegalHero";
import { DISCLAIMER_SEO, LEGAL_CONTACT_EMAIL, LEGAL_ENTITY_NAME } from "@/lib/content";

export const metadata: Metadata = {
  title: DISCLAIMER_SEO.title,
  description: DISCLAIMER_SEO.description,
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: DISCLAIMER_SEO.title,
    description: DISCLAIMER_SEO.description,
    url: "/disclaimer",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <LegalHero title="Disclaimer" />
      <LegalBody>
        <p>
          This Disclaimer explains what {LEGAL_ENTITY_NAME} (&quot;Rise360&quot;) is and
          isn&apos;t, and how the regulated parts of a cross-border structure are actually
          carried out. It applies to this site and to every engagement.
        </p>

        <h2>General Information, Not Individualized Advice</h2>
        <p>
          Insights articles, practice pages and other published content on this site are
          general information for a broad audience. They are not individualized legal, tax,
          immigration or financial advice for your specific structure. Using this site, or
          reading any page on it, does not create an attorney-client relationship, a banking
          relationship, or any other advisory or fiduciary relationship between you and
          Rise360.
        </p>

        <h2>Not Licensed Legal, Tax or Immigration Advice</h2>
        <p>
          Rise360 provides structuring and coordination guidance based on general experience
          across the jurisdictions we work in. This is not a substitute for independent
          legal, tax or immigration advice specific to your situation. Where a decision
          requires a licensed opinion — a tax position, an immigration filing, a contract
          review — we coordinate with a licensed professional in that jurisdiction, and their
          advice, not ours, is the one to rely on for that decision.
        </p>

        <h2>Regulated Activity Runs Through Licensed Local Partners</h2>
        <p>
          Rise360 is not a bank, a licensed immigration authority, a customs broker, or a
          licensed real estate agent. The regulated activity behind a cross-border structure —
          opening a bank account, filing an immigration application, clearing customs, closing
          a property transaction — is always carried out by a licensed bank, law firm,
          immigration counsel, customs broker or real estate counsel in the relevant
          jurisdiction, acting independently and under its own license. Rise360 coordinates
          that work; it does not perform it, and does not control the outcome of those
          independent parties&apos; decisions.
        </p>

        <h2>No Guarantee of Approval or Outcome</h2>
        <p>
          Nothing on this site or in any engagement should be read as a guarantee that an
          application, account, license or transaction will be approved, or approved within a
          particular timeframe. Outcomes depend on the deciding institution or authority, not
          on Rise360.
        </p>

        <h2>Regulatory Change</h2>
        <p>
          Cross-border regulatory regimes — tax treaties, substance requirements, immigration
          programs, customs rules — change over time. Guidance we provide reflects our
          understanding at the time it&apos;s given, not a permanent representation of the
          law in any jurisdiction.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this Disclaimer can be sent to{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
        </p>
      </LegalBody>
      <ConsultationCTA />
    </>
  );
}
