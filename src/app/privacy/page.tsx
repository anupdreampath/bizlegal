import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ivory-100">
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
          Privacy Policy
        </h1>
        <p className="font-sans text-[0.9rem] text-gray-400 mb-[3rem]">
          Last updated: April 12, 2026
        </p>

        <div className="space-y-10 font-sans text-[1rem] text-gray-800 leading-[1.7]">
          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              1. Introduction
            </h2>
            <p>
              Biz Legal (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting the privacy of our clients and website visitors. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              LLC formation and management services.
            </p>
            <p className="mt-3">
              As a legal services provider operating in the State of California,
              we comply with the California Consumer Privacy Act (CCPA), the
              California Privacy Rights Act (CPRA), and all applicable federal
              and state privacy laws.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information that you voluntarily provide when using our
              services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal identification information:</strong> Full name,
                email address, phone number, mailing address, and date of birth.
              </li>
              <li>
                <strong>Business information:</strong> Proposed LLC name,
                business type, industry, member names, ownership percentages,
                management structure, and business address.
              </li>
              <li>
                <strong>Account credentials:</strong> Email address and
                encrypted password used to access your client portal.
              </li>
              <li>
                <strong>Financial information:</strong> Billing address and
                payment method details processed securely through our
                third-party payment processor. We do not store full credit card
                numbers on our servers.
              </li>
              <li>
                <strong>Communication records:</strong> Correspondence between
                you and our team, including emails, messages through the client
                portal, and notes from consultations.
              </li>
              <li>
                <strong>Usage data:</strong> IP address, browser type, device
                information, pages visited, time spent on pages, and referring
                URLs collected automatically through cookies and similar
                technologies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To provide LLC formation, management, and compliance services as
                requested.
              </li>
              <li>
                To prepare and file legal documents with the California
                Secretary of State, Franchise Tax Board, and other relevant
                agencies.
              </li>
              <li>
                To communicate with you regarding your service requests, account
                updates, filing deadlines, and compliance requirements.
              </li>
              <li>
                To verify your identity and prevent fraud or unauthorized access
                to your account.
              </li>
              <li>
                To improve our website, services, and user experience through
                analytics.
              </li>
              <li>
                To comply with legal obligations, respond to lawful requests
                from public authorities, and enforce our terms of use.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              4. Legal Basis for Processing
            </h2>
            <p>
              We process your personal information on the following legal bases:
              (a) your consent, which you may withdraw at any time; (b)
              performance of a contract for services you have requested; (c)
              compliance with legal obligations to which we are subject; and (d)
              our legitimate business interests, provided they do not override
              your fundamental rights.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              5. Information Sharing and Disclosure
            </h2>
            <p className="mb-3">
              We do not sell your personal information. We may share your
              information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Government agencies:</strong> When required to file
                documents on your behalf with the California Secretary of State,
                Franchise Tax Board, IRS, or other regulatory bodies.
              </li>
              <li>
                <strong>Service providers:</strong> With trusted third-party
                vendors who assist us in operating our website, processing
                payments, delivering communications, or providing services —
                subject to confidentiality agreements.
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law,
                subpoena, court order, or governmental regulation.
              </li>
              <li>
                <strong>Business transfers:</strong> In connection with a
                merger, acquisition, or sale of assets, in which case your
                information would remain subject to this Privacy Policy.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              6. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              information, including 256-bit SSL/TLS encryption for data in
              transit, AES-256 encryption for data at rest, regular security
              audits, access controls, and employee training on data privacy.
              While we strive to protect your data, no method of transmission or
              storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              7. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as your account is
              active or as needed to provide you services. Business formation
              documents and filing records are retained for a minimum of seven
              (7) years in accordance with California record-keeping
              requirements. You may request deletion of your account and
              personal data at any time, subject to our legal retention
              obligations.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              8. Your Rights Under California Law
            </h2>
            <p className="mb-3">
              As a California resident, you have the following rights under the
              CCPA/CPRA:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Right to know:</strong> You may request disclosure of
                the categories and specific pieces of personal information we
                have collected about you.
              </li>
              <li>
                <strong>Right to delete:</strong> You may request deletion of
                your personal information, subject to certain legal exceptions.
              </li>
              <li>
                <strong>Right to correct:</strong> You may request correction of
                inaccurate personal information.
              </li>
              <li>
                <strong>Right to opt out:</strong> You may opt out of the sale
                or sharing of your personal information. We do not sell personal
                information.
              </li>
              <li>
                <strong>Right to non-discrimination:</strong> We will not
                discriminate against you for exercising any of these rights.
              </li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@bizlegal.com"
                className="text-green-800 hover:opacity-60 transition-opacity cursor-pointer"
              >
                privacy@bizlegal.com
              </a>
              . We will respond within 45 days as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              9. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from minors. If
              we learn that we have collected information from a child under 18,
              we will take steps to delete that information promptly.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by posting the updated policy on
              our website and updating the &ldquo;Last updated&rdquo; date. Your
              continued use of our services after any changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              11. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your rights, please contact us:
            </p>
            <div className="mt-3 bg-ivory-200 rounded-[1rem] p-6">
              <p className="font-bold text-black">Biz Legal</p>
              <p>Los Angeles, California</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@bizlegal.com"
                  className="text-green-800 hover:opacity-60 transition-opacity cursor-pointer"
                >
                  privacy@bizlegal.com
                </a>
              </p>
              <p>Phone: (833) 555-0123</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
