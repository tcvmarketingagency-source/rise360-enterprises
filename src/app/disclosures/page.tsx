import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { LegalBody } from "@/components/legal/LegalBody";
import { LegalHero } from "@/components/legal/LegalHero";
import {
  DISCLOSURES_SEO,
  FOOTER_LEGAL,
  LEGAL_CONTACT_EMAIL,
  LEGAL_ENTITY_NAME,
} from "@/lib/content";

export const metadata: Metadata = {
  title: DISCLOSURES_SEO.title,
  description: DISCLOSURES_SEO.description,
  alternates: {
    canonical: "/disclosures",
  },
  openGraph: {
    title: DISCLOSURES_SEO.title,
    description: DISCLOSURES_SEO.description,
    url: "/disclosures",
    type: "website",
  },
};

export default function DisclosuresPage() {
  return (
    <>
      <LegalHero title="Disclosures" />
      <LegalBody>
        <h2>Entity Information</h2>
        <p>
          Services are provided by {FOOTER_LEGAL.registration}. {LEGAL_ENTITY_NAME} is the
          entity referenced throughout this site and in any engagement letter.
        </p>

        <h2>No Attorney-Client or Fiduciary Relationship</h2>
        <p>
          Engaging Rise360 does not create an attorney-client relationship, a banking
          relationship, or a fiduciary relationship. Those relationships exist directly
          between you and the licensed bank, law firm, immigration counsel, customs broker
          or real estate counsel involved in your structure.
        </p>

        <h2>Not Licensed Legal, Tax or Immigration Advice</h2>
        <p>
          Rise360 provides structuring and coordination guidance based on general
          experience across the jurisdictions we work in. This is not a substitute for
          independent legal, tax or immigration advice specific to your situation. Where a
          decision requires a licensed opinion — a tax position, an immigration filing, a
          contract review — we coordinate with a licensed professional in that jurisdiction,
          and their advice, not ours, is the one to rely on for that decision.
        </p>

        <h2>Third-Party Licensed Partners</h2>
        <p>
          Banks, immigration counsel, customs brokers, and real estate agents or counsel
          that Rise360 coordinates with act independently, under their own licenses, and
          make their own decisions. Rise360 does not control, and is not responsible for,
          the outcome of their decisions — account approvals, visa grants, customs
          clearance, or transaction closings are theirs to make, not ours.
        </p>

        <h2>No Guarantee of Approval or Outcome</h2>
        <p>
          Nothing on this site or in any engagement should be read as a guarantee that an
          application, account, license or transaction will be approved, or approved within
          a particular timeframe. Outcomes depend on the deciding institution or authority,
          not on Rise360.
        </p>

        <h2>Regulatory Change</h2>
        <p>
          Cross-border regulatory regimes — tax treaties, substance requirements,
          immigration programs, customs rules — change over time. Guidance we provide
          reflects our understanding at the time it&apos;s given, not a permanent
          representation of the law in any jurisdiction.
        </p>

        <h2>Informational Content</h2>
        <p>
          Insights articles and other published content on this site are general
          information for a broad audience, not individualized advice for your specific
          structure. Decisions about your own structure should be based on a direct
          engagement, not on a published article alone.
        </p>

        <h2>Complaints &amp; Contact</h2>
        <p>
          If you have a concern about an engagement, contact us directly at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a> and we&apos;ll
          address it.
        </p>
      </LegalBody>
      <ConsultationCTA />
    </>
  );
}
