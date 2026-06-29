import Link from "next/link";
import CmsPageRuntime from "@/components/cms/CmsPageRuntime";
import CmsStandaloneShell from "@/components/cms/CmsStandaloneShell";

export default function TermsOfUsePage() {
  return (
    <CmsStandaloneShell>
      <CmsPageRuntime slug="terms" fallback={<div className="min-h-screen bg-ivory-100">
      {/* Header */}
      <div className="bg-ivory-100 border-b border-gray-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem] py-5 flex items-center justify-between">
          <Link href="/" className="font-serif text-[1.5rem] text-black">
            Biz Legal
          </Link>
          <Link
            href="/"
            className="text-[0.9rem] font-sans text-gray-600 hover:text-black transition-colors cursor-pointer"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[48rem] mx-auto px-6 py-[4rem] md:py-[5rem]">
        <h1 className="font-serif text-[2.75rem] md:text-[3.5rem] leading-[1.05] text-black mb-4">
          Terms of Use
        </h1>
        <p className="font-sans text-[0.9rem] text-gray-400 mb-[3rem]">
          Last updated: April 12, 2026
        </p>

        <div className="space-y-10 font-sans text-[1rem] text-gray-800 leading-[1.7]">
          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Biz Legal website and services
              (collectively, the &ldquo;Services&rdquo;), you agree to be bound
              by these Terms of Use. If you do not agree to these terms, you may
              not access or use the Services. These Terms constitute a legally
              binding agreement between you and Biz Legal.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              2. Description of Services
            </h2>
            <p className="mb-3">
              Biz Legal provides LLC formation, management, compliance, and
              related business services for clients in the State of California.
              Our Services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Preparation and filing of Articles of Organization with the
                California Secretary of State.
              </li>
              <li>
                Drafting of Operating Agreements customized to your business
                structure.
              </li>
              <li>
                EIN/Tax ID acquisition from the Internal Revenue Service.
              </li>
              <li>
                Registered agent services for California LLCs.
              </li>
              <li>
                Ongoing compliance services including annual Statement of
                Information filings and Franchise Tax Board obligations.
              </li>
              <li>
                Amendments, updates, and restructuring of existing LLCs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              3. Not a Law Firm Disclaimer
            </h2>
            <p>
              Biz Legal is a legal services company and not a law firm. While
              our documents are prepared and reviewed by licensed attorneys, our
              Services do not constitute legal advice, and no attorney-client
              relationship is created by your use of the Services. We recommend
              consulting with a licensed attorney for legal advice specific to
              your situation. Our team provides guidance on LLC formation and
              compliance procedures, but we do not represent clients in legal
              proceedings or disputes.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              4. User Accounts
            </h2>
            <p className="mb-3">
              To access certain features of our Services, you must create an
              account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide accurate, current, and complete information during
                registration and in all questionnaires and forms.
              </li>
              <li>
                Maintain the security of your password and accept responsibility
                for all activities under your account.
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account.
              </li>
              <li>
                Not create accounts using false or misleading information or on
                behalf of another person without their authorization.
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate
              these Terms or that have been inactive for more than twelve (12)
              consecutive months.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              5. Service Requests and Submissions
            </h2>
            <p>
              When you submit a request through our questionnaire, you
              understand that: (a) submission of a request does not guarantee
              acceptance or commencement of services; (b) no fees are charged at
              the time of submission; (c) our team will review your request and
              contact you to discuss next steps, scope, and any applicable fees
              before work begins; and (d) you are responsible for the accuracy
              of all information provided in your submission.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              6. Fees and Payment
            </h2>
            <p>
              Service fees will be communicated to you after our team reviews
              your request and before any work commences. You agree to pay all
              fees associated with the Services you authorize. State filing fees
              (such as the California Secretary of State filing fee and the
              annual Franchise Tax) are separate from our service fees and are
              required by the State of California. We will clearly disclose all
              applicable fees before you authorize any charges.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              7. Accuracy of Information
            </h2>
            <p>
              You are solely responsible for the accuracy and completeness of
              all information you provide to us. Biz Legal is not liable for
              errors, delays, or rejections by state agencies resulting from
              inaccurate or incomplete information provided by you. If
              corrections or refilings are necessary due to inaccurate
              information you supplied, additional fees may apply.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              8. Intellectual Property
            </h2>
            <p>
              All content on the Biz Legal website — including text, graphics,
              logos, page layouts, and software — is the property of Biz Legal
              and is protected by United States copyright and trademark laws.
              You may not reproduce, distribute, modify, or create derivative
              works from any content without our prior written consent. The
              &ldquo;Biz Legal&rdquo; name, logo, and all related marks are
              trademarks of Biz Legal.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by California law, Biz Legal shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of the Services. Our total liability for any claims
              arising under these Terms shall not exceed the total amount of
              fees paid by you to Biz Legal during the twelve (12) months
              preceding the claim. This limitation applies regardless of the
              theory of liability, whether in contract, tort, strict liability,
              or otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless Biz Legal, its officers,
              directors, employees, and agents from any claims, liabilities,
              damages, losses, and expenses (including reasonable
              attorneys&apos; fees) arising from: (a) your use of the Services;
              (b) your violation of these Terms; (c) your violation of any
              rights of a third party; or (d) inaccurate information you
              provided.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              11. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of California, without regard to its
              conflict of law provisions. Any dispute arising out of or relating
              to these Terms or the Services shall be resolved exclusively in
              the state or federal courts located in Los Angeles County,
              California. You consent to the personal jurisdiction of such
              courts.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              12. Termination
            </h2>
            <p>
              We may terminate or suspend your access to the Services at any
              time, with or without cause, upon written notice. Upon
              termination, your right to use the Services ceases immediately.
              Provisions that by their nature should survive termination
              (including indemnification, limitation of liability, and governing
              law) shall survive.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              13. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by posting the revised Terms on our
              website and updating the &ldquo;Last updated&rdquo; date. Your
              continued use of the Services after the effective date of any
              changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              14. Contact
            </h2>
            <p>
              For questions about these Terms of Use, please contact us:
            </p>
            <div className="mt-3 bg-ivory-200 rounded-[1rem] p-6">
              <p className="font-bold text-black">Biz Legal</p>
              <p>Los Angeles, California</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:legal@bizlegal.com"
                  className="text-green-800 hover:opacity-60 transition-opacity cursor-pointer"
                >
                  legal@bizlegal.com
                </a>
              </p>
              <p>Phone: (833) 555-0123</p>
            </div>
          </section>
        </div>
      </div>
      </div>} />
    </CmsStandaloneShell>
  );
}
