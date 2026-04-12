import Link from "next/link";

export default function CookiePolicyPage() {
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
          Cookie Policy
        </h1>
        <p className="font-sans text-[0.9rem] text-gray-400 mb-[3rem]">
          Last updated: April 12, 2026
        </p>

        <div className="space-y-10 font-sans text-[1rem] text-gray-800 leading-[1.7]">
          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              1. What Are Cookies
            </h2>
            <p>
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile phone) when you visit a website.
              They are widely used to make websites function properly, improve
              user experience, and provide information to the website operator.
              Cookies may be set by the website you are visiting
              (&ldquo;first-party cookies&rdquo;) or by third-party services
              operating on that website (&ldquo;third-party cookies&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              2. How Biz Legal Uses Cookies
            </h2>
            <p className="mb-3">
              We use cookies and similar tracking technologies on our website
              for the following purposes:
            </p>

            <div className="space-y-6">
              <div className="bg-ivory-200 rounded-[1rem] p-6">
                <h3 className="font-bold text-black mb-2">
                  Essential Cookies (Strictly Necessary)
                </h3>
                <p>
                  These cookies are required for the website to function and
                  cannot be switched off. They are set in response to actions
                  you take, such as logging into your account, completing forms,
                  or setting your privacy preferences. Without these cookies,
                  certain services you have requested cannot be provided.
                </p>
                <div className="mt-3 border-t border-gray-200 pt-3">
                  <p className="text-[0.85rem] text-gray-600">
                    <strong>Examples:</strong> Session authentication, CSRF
                    protection, questionnaire progress, cookie consent
                    preferences.
                  </p>
                  <p className="text-[0.85rem] text-gray-600 mt-1">
                    <strong>Duration:</strong> Session to 1 year.
                  </p>
                </div>
              </div>

              <div className="bg-ivory-200 rounded-[1rem] p-6">
                <h3 className="font-bold text-black mb-2">
                  Functional Cookies
                </h3>
                <p>
                  These cookies enable enhanced functionality and
                  personalization, such as remembering your login details,
                  language preferences, and previously entered form data. If you
                  disable these cookies, some features may not function
                  properly.
                </p>
                <div className="mt-3 border-t border-gray-200 pt-3">
                  <p className="text-[0.85rem] text-gray-600">
                    <strong>Examples:</strong> Saved form inputs, display
                    preferences, recently viewed pages.
                  </p>
                  <p className="text-[0.85rem] text-gray-600 mt-1">
                    <strong>Duration:</strong> 30 days to 1 year.
                  </p>
                </div>
              </div>

              <div className="bg-ivory-200 rounded-[1rem] p-6">
                <h3 className="font-bold text-black mb-2">
                  Analytics Cookies
                </h3>
                <p>
                  These cookies help us understand how visitors interact with
                  our website by collecting information about pages visited,
                  time spent on pages, error messages encountered, and traffic
                  sources. All data is aggregated and anonymous. We use this
                  information to improve our website and services.
                </p>
                <div className="mt-3 border-t border-gray-200 pt-3">
                  <p className="text-[0.85rem] text-gray-600">
                    <strong>Examples:</strong> Google Analytics, page view
                    counts, scroll depth, navigation paths.
                  </p>
                  <p className="text-[0.85rem] text-gray-600 mt-1">
                    <strong>Duration:</strong> Up to 2 years.
                  </p>
                </div>
              </div>

              <div className="bg-ivory-200 rounded-[1rem] p-6">
                <h3 className="font-bold text-black mb-2">
                  Marketing Cookies
                </h3>
                <p>
                  These cookies may be set by our advertising partners to build
                  a profile of your interests and show you relevant
                  advertisements on other websites. They do not store personal
                  information directly but are based on uniquely identifying
                  your browser and device. If you do not allow these cookies,
                  you will experience less targeted advertising.
                </p>
                <div className="mt-3 border-t border-gray-200 pt-3">
                  <p className="text-[0.85rem] text-gray-600">
                    <strong>Examples:</strong> Social media pixels, retargeting
                    tags, conversion tracking.
                  </p>
                  <p className="text-[0.85rem] text-gray-600 mt-1">
                    <strong>Duration:</strong> 30 days to 2 years.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              3. Third-Party Cookies
            </h2>
            <p className="mb-3">
              Some cookies on our website are placed by third-party services
              that appear on our pages. We do not control these cookies. The
              third-party services we use include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google Analytics:</strong> Web analytics service that
                tracks and reports website traffic. See{" "}
                <span className="text-green-800">
                  Google&apos;s privacy policy
                </span>{" "}
                for more information.
              </li>
              <li>
                <strong>Stripe:</strong> Payment processing. Stripe uses cookies
                to prevent fraud and process transactions securely.
              </li>
              <li>
                <strong>Social media platforms:</strong> If we embed videos or
                social media content (Instagram, YouTube, X), those platforms
                may set their own cookies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              4. Managing Your Cookie Preferences
            </h2>
            <p className="mb-3">
              You have the right to decide whether to accept or reject cookies.
              You can manage your preferences in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Browser settings:</strong> Most browsers allow you to
                control cookies through their settings. You can set your browser
                to refuse all cookies, accept only first-party cookies, or
                delete cookies when you close your browser. Note that disabling
                cookies may affect the functionality of our website.
              </li>
              <li>
                <strong>Cookie consent banner:</strong> When you first visit our
                website, you will be presented with a cookie consent banner
                where you can accept or decline non-essential cookies.
              </li>
              <li>
                <strong>Opt-out tools:</strong> For Google Analytics, you can
                install the Google Analytics Opt-out Browser Add-on. For
                advertising cookies, you can visit the Digital Advertising
                Alliance&apos;s opt-out page.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              5. Do Not Track Signals
            </h2>
            <p>
              Some browsers offer a &ldquo;Do Not Track&rdquo; (DNT) feature
              that sends a signal to websites requesting that your browsing
              activity not be tracked. Our website currently responds to DNT
              signals by disabling non-essential cookies and analytics tracking
              when a DNT header is detected.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              6. California-Specific Rights
            </h2>
            <p>
              Under the California Consumer Privacy Act (CCPA) and the
              California Privacy Rights Act (CPRA), California residents have
              additional rights regarding cookies and tracking technologies,
              including the right to know what personal information is collected
              via cookies and the right to opt out of the sale or sharing of
              personal information collected through cookies. For more
              information, see our{" "}
              <Link
                href="/privacy"
                className="text-green-800 hover:opacity-60 transition-opacity cursor-pointer"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              7. Updates to This Cookie Policy
            </h2>
            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in technology, legislation, or our business practices. We
              will post any changes on this page and update the &ldquo;Last
              updated&rdquo; date. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-[1.125rem] text-black mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have questions about our use of cookies or this Cookie
              Policy, please contact us:
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
