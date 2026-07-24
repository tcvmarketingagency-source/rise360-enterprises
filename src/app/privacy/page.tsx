import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { LegalBody } from "@/components/legal/LegalBody";
import { LegalHero } from "@/components/legal/LegalHero";
import { LEGAL_CONTACT_EMAIL, PRIVACY_SEO, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: PRIVACY_SEO.title,
  description: PRIVACY_SEO.description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: PRIVACY_SEO.title,
    description: PRIVACY_SEO.description,
    url: "/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <LegalHero title="Privacy Policy" />
      <LegalBody>
        <p>
          This Privacy Policy explains what information {SITE.name} collects, how it&apos;s
          used, and the choices you have around it. It applies to visitors to{" "}
          {SITE.url.replace("https://", "")} and to clients engaged with any of our practices.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you request a consultation or engage us for a service, we collect the
          information you provide directly — typically your name, email, phone number, and
          details about the business or move you&apos;re structuring. When you engage a
          specific practice, we collect the additional documentation that practice
          reasonably requires to do its work.
        </p>
        <p>
          When you browse the site, we collect standard analytics data — pages visited,
          browser type, and approximate location derived from IP address. We don&apos;t use
          this data to individually identify visitors, and we don&apos;t sell it.
        </p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries and scope a potential engagement</li>
          <li>To deliver the services set out in a signed engagement letter</li>
          <li>To maintain records required for regulatory and tax compliance</li>
          <li>To improve the site and the accuracy of our published content</li>
        </ul>

        <h2>Sharing With Third Parties</h2>
        <p>
          Where an engagement requires it, we share the minimum necessary information with
          the licensed third parties who carry out regulated work on your behalf — banks,
          immigration counsel, customs brokers, or real estate counsel in the relevant
          jurisdiction. We do not sell client or visitor information to third parties for
          marketing purposes.
        </p>

        <h2>International Transfers</h2>
        <p>
          Because our work is inherently cross-border, information may be processed in
          jurisdictions outside India where we or our licensed partners operate — including
          the UAE, Singapore, the UK, Canada and Australia. We take reasonable steps to
          apply appropriate safeguards to any such transfer, proportionate to the
          jurisdiction involved.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain client information for as long as the engagement is active, plus
          whatever period applicable law or regulatory obligation requires afterward.
          Analytics data is retained on a rolling basis and is not kept indefinitely.
        </p>

        <h2>Data Security</h2>
        <p>
          We apply reasonable administrative, technical and physical safeguards to protect
          information in our care. No method of transmission or storage is completely
          secure, and we cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>
          You can ask us to access, correct, or delete the personal information we hold
          about you, subject to any retention obligation that overrides deletion. Contact us
          at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a> to make a
          request.
        </p>

        <h2>Cookies</h2>
        <p>
          We use basic analytics cookies to understand how the site is used. We don&apos;t
          run third-party advertising trackers. Most browsers let you block or clear cookies
          if you&apos;d rather not have them.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We&apos;ll update this page when our practices change and update the date at the
          top accordingly. Material changes affecting active clients will be communicated
          directly.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
        </p>
      </LegalBody>
      <ConsultationCTA />
    </>
  );
}
