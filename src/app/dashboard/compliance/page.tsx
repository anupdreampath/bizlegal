import { Calendar, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const deadlines = [
  { name: "Annual Franchise Tax", form: "Form 3522", date: "Apr 15, 2026", daysLeft: 3, status: "due-soon", fee: "$800" },
  { name: "Statement of Information", form: "Form LLC-12", date: "Jun 2, 2026", daysLeft: 51, status: "upcoming", fee: "$20" },
  { name: "BOI Report (FinCEN)", form: "BOI Report", date: "Jun 10, 2026", daysLeft: 59, status: "upcoming", fee: "$0" },
  { name: "LLC Fee Estimate", form: "Form 3536", date: "Jun 15, 2026", daysLeft: 64, status: "upcoming", fee: "Varies" },
  { name: "Form 568 (LLC Return)", form: "CA Form 568", date: "Apr 15, 2027", daysLeft: 368, status: "far", fee: "N/A" },
];

const completedItems = [
  { name: "Articles of Organization", date: "Mar 6, 2026" },
  { name: "Initial Statement of Information", date: "Mar 6, 2026" },
  { name: "Operating Agreement", date: "Mar 5, 2026" },
  { name: "Registered Agent Designation", date: "Mar 6, 2026" },
];

export default function CompliancePage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-[1.75rem] text-black">Compliance</h1>
        <p className="font-sans text-[0.9rem] text-gray-600 mt-1">Your LLC&apos;s compliance calendar and requirements.</p>
      </div>

      {/* Compliance score */}
      <div className="bg-white rounded-[1rem] border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-6">
          <div className="relative w-16 h-16 flex-shrink-0">
            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 72 72">
              <circle cx="36" cy="36" r="30" fill="none" stroke="#E5E5E5" strokeWidth="5" />
              <circle cx="36" cy="36" r="30" fill="none" stroke="#1B5E3F" strokeWidth="5"
                strokeDasharray={`${(85 / 100) * 188.5} 188.5`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[1.125rem] text-black">85</span>
            </div>
          </div>
          <div>
            <p className="font-sans text-[1rem] font-bold text-black">Compliance Score: Good</p>
            <p className="font-sans text-[0.85rem] text-gray-600">1 upcoming deadline requires attention. All current filings are up to date.</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        {/* Upcoming */}
        <div className="bg-white rounded-[1rem] border border-gray-200 p-6">
          <h2 className="font-sans font-bold text-[1rem] text-black mb-5">Upcoming Deadlines</h2>
          <div className="space-y-3">
            {deadlines.map((d) => (
              <div key={d.name} className={`p-4 rounded-lg flex items-center justify-between gap-3 ${
                d.status === "due-soon" ? "bg-amber-50 border border-amber-200" : "bg-ivory-100"
              }`}>
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Calendar className={`w-4 h-4 flex-shrink-0 ${d.status === "due-soon" ? "text-amber-600" : "text-gray-400"}`} />
                  <div className="min-w-0">
                    <p className="font-sans text-[0.85rem] font-medium text-black truncate">{d.name}</p>
                    <p className="font-sans text-[0.7rem] text-gray-400">{d.form} &middot; {d.date} &middot; Fee: {d.fee}</p>
                  </div>
                </div>
                <span className={`font-sans text-[0.7rem] font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${
                  d.status === "due-soon" ? "bg-amber-200 text-amber-800" : "bg-gray-100 text-gray-500"
                }`}>
                  {d.daysLeft}d
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Completed */}
        <div className="bg-white rounded-[1rem] border border-gray-200 p-6">
          <h2 className="font-sans font-bold text-[1rem] text-black mb-5">Completed</h2>
          <div className="space-y-3">
            {completedItems.map((item) => (
              <div key={item.name} className="flex items-center gap-3 p-3 bg-green-100/50 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-green-800 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[0.85rem] text-black truncate">{item.name}</p>
                  <p className="font-sans text-[0.7rem] text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Managed by */}
          <div className="mt-6 p-4 bg-ivory-100 rounded-lg">
            <p className="font-sans text-[0.8rem] text-gray-600 leading-[1.6]">
              Your compliance is managed by <strong className="text-black">Biz Legal</strong>. We track all deadlines, prepare filings, and handle payments on your behalf.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
