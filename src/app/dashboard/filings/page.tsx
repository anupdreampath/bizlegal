import { FileText, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const filings = [
  { name: "Articles of Organization", form: "Form LLC-1", status: "filed", date: "Mar 6, 2026", agency: "Secretary of State" },
  { name: "Initial Statement of Information", form: "Form LLC-12", status: "filed", date: "Mar 6, 2026", agency: "Secretary of State" },
  { name: "EIN Application", form: "Form SS-4", status: "pending", date: "Pending", agency: "IRS" },
  { name: "Annual Franchise Tax", form: "Form 3522", status: "due-soon", date: "Due Apr 15, 2026", agency: "Franchise Tax Board" },
  { name: "Biennial Statement of Information", form: "Form LLC-12", status: "upcoming", date: "Due Mar 2028", agency: "Secretary of State" },
  { name: "LLC Annual Return", form: "Form 568", status: "upcoming", date: "Due Apr 15, 2027", agency: "Franchise Tax Board" },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    filed: "bg-green-100 text-green-800",
    pending: "bg-gray-100 text-gray-600",
    "due-soon": "bg-amber-50 text-amber-700",
    upcoming: "bg-ivory-200 text-gray-500",
  };
  const labels = { filed: "Filed", pending: "Pending", "due-soon": "Due Soon", upcoming: "Upcoming" };
  return (
    <span className={`font-sans text-[0.7rem] font-bold px-2.5 py-1 rounded-full ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
}

export default function FilingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-[1.75rem] text-black">Filings</h1>
        <p className="font-sans text-[0.9rem] text-gray-600 mt-1">All state and federal filings for your LLC.</p>
      </div>

      {/* Summary cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Filed", count: "2", icon: CheckCircle2, color: "text-green-800", bg: "bg-green-100" },
          { label: "Pending", count: "1", icon: Clock, color: "text-gray-600", bg: "bg-gray-100" },
          { label: "Due Soon", count: "1", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50" },
        ].map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="bg-white rounded-[1rem] border border-gray-200 p-5 flex items-center gap-4">
              <div className={`w-10 h-10 ${c.bg} rounded-lg flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${c.color}`} />
              </div>
              <div>
                <p className="font-serif text-[1.5rem] text-black leading-none">{c.count}</p>
                <p className="font-sans text-[0.75rem] text-gray-400 mt-0.5">{c.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filings list */}
      <div className="bg-white rounded-[1rem] border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="font-sans font-bold text-[0.9rem] text-black">All Filings</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {filings.map((f) => (
            <div key={f.name + f.form} className="flex items-center gap-4 px-6 py-4 hover:bg-ivory-100 transition-colors cursor-pointer">
              <div className="w-9 h-9 bg-ivory-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-sans text-[0.85rem] font-medium text-black truncate">{f.name}</p>
                <p className="font-sans text-[0.7rem] text-gray-400">{f.form} &middot; {f.agency}</p>
              </div>
              <p className="font-sans text-[0.8rem] text-gray-400 hidden sm:block flex-shrink-0">{f.date}</p>
              <StatusBadge status={f.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
