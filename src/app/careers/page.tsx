import PageShell from "@/components/PageShell";

const openings = [
  {
    title: "Business Formation Specialist",
    type: "Full-Time",
    location: "Los Angeles, CA (Hybrid)",
    description: "Help clients navigate the LLC formation process. You'll prepare legal documents, coordinate state filings, and serve as the primary point of contact for new clients.",
  },
  {
    title: "Compliance Manager",
    type: "Full-Time",
    location: "Los Angeles, CA (Hybrid)",
    description: "Oversee ongoing compliance for our managed LLC portfolio. Track filing deadlines, monitor regulatory changes, and ensure every client stays in good standing.",
  },
  {
    title: "Client Success Associate",
    type: "Full-Time",
    location: "Remote (California)",
    description: "Be the first point of contact for client inquiries. Answer questions, guide clients through the questionnaire process, and ensure a seamless onboarding experience.",
  },
  {
    title: "Paralegal — Business Law",
    type: "Full-Time",
    location: "Los Angeles, CA",
    description: "Support our legal team with document preparation, research on California business regulations, and review of Operating Agreements and Articles of Organization.",
  },
];

export default function CareersPage() {
  return (
    <PageShell
      cmsSlug="careers"
heroImage="https://images.unsplash.com/photo-1758691736979-ff263c04b3d1?auto=format&fit=crop&w=1400&q=80"
      heroAlt="Two people talking in a modern office hallway — careers at biz.legal"
      label="Careers"
      title="Build your career at Biz Legal"
      description="Join a team that helps thousands of California entrepreneurs launch and run their businesses."
    >
      {/* Culture */}
      <section className="bg-ivory-100 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="grid lg:grid-cols-2 gap-[3rem] lg:gap-[5rem]">
            <div>
              <div className="border-t-2 border-black pt-6 mb-8">
                <p className="text-[1rem] font-sans font-bold text-black uppercase">
                  Why Biz Legal
                </p>
              </div>

              <h2 className="font-serif text-[2rem] md:text-[2.75rem] leading-[1.1] text-black mb-6">
                Meaningful work, real impact
              </h2>

              <div className="space-y-4 font-sans text-[1rem] text-gray-600 leading-[1.7]">
                <p>
                  Every LLC we form represents someone&apos;s dream — a new
                  business, a side hustle becoming real, an investment being
                  protected. Our team makes those dreams possible by
                  removing the legal complexity that holds people back.
                </p>
                <p>
                  We value expertise, transparency, and a genuine desire to
                  help. We offer competitive compensation, flexible work
                  arrangements, and the opportunity to grow with a company
                  that&apos;s shaping how California businesses get started.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Team Collaboration",
                "Office Culture",
                "Client Meetings",
                "Team Events",
              ].map((label) => (
                <div
                  key={label}
                  className="aspect-square bg-ivory-200 rounded-[1rem] flex items-center justify-center"
                >
                  <p className="text-[0.8rem] font-sans text-gray-400 text-center px-4">
                    {label} Photo
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="bg-ivory-200 py-[4rem] md:py-[6rem]">
        <div className="max-w-[90rem] mx-auto px-6 md:px-[4.5rem]">
          <div className="border-t-2 border-black pt-6 mb-[3rem]">
            <p className="text-[1rem] font-sans font-bold text-black uppercase">
              Open Positions
            </p>
          </div>

          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-[1rem] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-[1.125rem] text-black mb-1">
                    {job.title}
                  </h3>
                  <p className="font-sans text-[0.9rem] text-gray-600 mb-2">
                    {job.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[0.8rem] font-bold text-green-800 uppercase tracking-wider">
                      {job.type}
                    </span>
                    <span className="font-sans text-[0.8rem] text-gray-400">
                      {job.location}
                    </span>
                  </div>
                </div>
                <a
                  href="mailto:careers@bizlegal.com"
                  className="inline-flex items-center justify-center px-7 py-3 text-[0.95rem] font-sans font-medium text-white bg-green-800 rounded-full hover:bg-green-600 transition-colors duration-200 cursor-pointer flex-shrink-0"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-[1rem] p-8">
            <h3 className="font-serif text-[1.5rem] text-black mb-3">
              Don&apos;t see the right role?
            </h3>
            <p className="font-sans text-[1rem] text-gray-600 leading-[1.6]">
              We&apos;re always interested in hearing from talented people.
              Send your resume and a note about what you&apos;d bring to
              the team to{" "}
              <a
                href="mailto:careers@bizlegal.com"
                className="text-green-800 hover:opacity-60 transition-opacity cursor-pointer"
              >
                careers@bizlegal.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
