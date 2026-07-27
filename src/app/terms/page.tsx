import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { LegalBody } from "@/components/legal/LegalBody";
import { LegalHero } from "@/components/legal/LegalHero";
import { LEGAL_CONTACT_EMAIL, LEGAL_ENTITY_NAME, TERMS_SEO } from "@/lib/content";

export const metadata: Metadata = {
  title: TERMS_SEO.title,
  description: TERMS_SEO.description,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: TERMS_SEO.title,
    description: TERMS_SEO.description,
    url: "/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>
      <LegalHero title="Terms of Service" />
      <LegalBody>
        <p>
          These Terms of Service govern use of this site and the general relationship
          between{" "}
          {LEGAL_ENTITY_NAME} (&quot;Rise360&quot;) and anyone who engages us for advisory
          or structuring services. They sit alongside, not instead of, the specific
          engagement letter signed for each piece of work.
        </p>

        <h2>Nature of Services</h2>
        <p>
          Rise360 provides advisory, structuring and coordination services across Capital,
          Mobility, Trade, Assets and Digital. Our role is to design the structure, sequence
          the work, and coordinate the licensed parties who carry it out.
        </p>
        <p>
          This site and the content on it are informational. Nothing published here — an
          insights article, a practice page, a service description — is legal, tax,
          immigration or financial advice, and browsing it does not create any advisory
          relationship. Advice specific to your situation is given only within a formal
          engagement, or by the licensed professional handling the regulated part of your
          structure.
        </p>

        <h2>What Rise360 Is Not</h2>
        <p>
          Rise360 is not a bank, a licensed immigration authority, a customs broker, or a
          licensed real estate agent. Regulated activity in each of those areas — opening an
          account, filing an immigration application, clearing customs, closing a property
          transaction — is always carried out by a licensed party in the relevant
          jurisdiction, not by Rise360 directly. Our practice pages describe this division
          of responsibility for each service.
        </p>

        <h2>Engagement-Specific Agreements</h2>
        <p>
          Scope, deliverables, fees and timeline for a specific engagement are set out in a
          separate signed engagement letter. Where these Terms and an engagement letter
          conflict, the engagement letter governs for that engagement.
        </p>

        <h2>Client Responsibilities</h2>
        <p>
          You agree to provide accurate and timely information needed to do the work, and to
          make your own decision on whether to proceed with any licensed third party we
          coordinate on your behalf.
        </p>

        <h2>No Guaranteed Outcomes</h2>
        <p>
          Visa approvals, account openings, licensing decisions and property closings are
          decided by third-party institutions and government authorities, not by Rise360. We
          cannot guarantee a specific outcome or timeline, and any timeline we give reflects
          our best current estimate, not a commitment.
        </p>

        <h2>Confidentiality</h2>
        <p>
          We treat information shared as part of an engagement as confidential and share it
          externally only with the licensed parties whose involvement the engagement
          requires.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the extent permitted by applicable law, Rise360&apos;s liability arising from
          an engagement is limited to the fees paid for that specific engagement. Rise360 is
          not liable for the decisions or conduct of independent licensed third parties we
          coordinate but do not control.
        </p>

        <h2>Termination</h2>
        <p>
          Either party may terminate an active engagement in line with the notice terms set
          out in the relevant engagement letter. Fees for work already completed remain
          payable.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, without regard to conflict-of-law
          principles.
        </p>

        <h2>Amendments</h2>
        <p>
          We may update these Terms from time to time; the date at the top of this page
          reflects the most recent revision. Continued use of our services after an update
          constitutes acceptance of the revised Terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
        </p>
      </LegalBody>
      <ConsultationCTA />
    </>
  );
}
