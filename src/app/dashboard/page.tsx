"use client";

import Link from "next/link";
import {
  FileText,
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Calendar,
  Shield,
  TrendingUp,
} from "lucide-react";

const statusSteps = [
  { label: "Request Submitted", done: true, date: "Mar 2, 2026" },
  { label: "Under Review", done: true, date: "Mar 3, 2026" },
  { label: "Documents Prepared", done: true, date: "Mar 5, 2026" },
  { label: "Filed with Secretary of State", done: true, date: "Mar 6, 2026" },
  { label: "LLC Approved", done: true, date: "Mar 12, 2026" },
  { label: "EIN Obtained", done: false, date: "Pending" },
  { label: "Documents Delivered", done: false, date: "Pending" },
];

const upcomingDeadlines = [
  { name: "Annual Franchise Tax ($800)", date: "Apr 15, 2026", daysLeft: 3, urgent: true, form: "Form 3522" },
  { name: "Statement of Information", date: "Jun 2, 2026", daysLeft: 51, urgent: false, form: "Form LLC-12" },
  { name: "BOI Report (FinCEN)", date: "Jun 10, 2026", daysLeft: 59, urgent: false, form: "BOI Report" },
];

const recentDocuments = [
  { name: "Articles of Organization (Stamped)", date: "Mar 12, 2026", type: "Formation" },
  { name: "Operating Agreement", date: "Mar 5, 2026", type: "Formation" },
  { name: "EIN Confirmation Letter", date: "Pending", type: "Tax" },
  { name: "Initial Statement of Information", date: "Mar 6, 2026", type: "Filing" },
];

const activityLog = [
  { action: "LLC approved by Secretary of State", time: "Mar 12, 2026 at 2:14 PM", icon: CheckCircle2 },
  { action: "Articles of Organization filed", time: "Mar 6, 2026 at 9:30 AM", icon: FileText },
  { action: "Operating Agreement signed by all members", time: "Mar 5, 2026 at 11:22 AM", icon: ClipboardCheck },
  { action: "Formation plan approved", time: "Mar 4, 2026 at 3:45 PM", icon: CheckCircle2 },
  { action: "Request submitted", time: "Mar 2, 2026 at 10:15 AM", icon: FileText },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="font-serif text-[1.75rem] md:text-[2rem] text-black">
          Welcome back, John
        </h1>
        <p className="font-sans text-[0.9rem] text-gray-600 mt-1">
          Here&apos;s the latest on your California LLC.
        </p>
      </div>

      {/* Status cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "LLC Status", value: "Active", sub: "Good standing", icon: Shield, color: "text-green-800", bg: "bg-green-100" },
          { label: "Filing Status", value: "In Progress", sub: "EIN pending", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Compliance", value: "1 Due Soon", sub: "Franchise tax Apr 15", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Documents", value: "4 Files", sub: "1 pending", icon: FileText, color: "text-green-800", bg: "bg-green-100" },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="bg-white rounded-[1rem] border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-3">
                <p className="font-sans text-[0.75rem] font-bold text-gray-400 uppercase tracking-wider">{card.label}</p>
                <div className={`w-8 h-8 ${card.bg} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${card.color}`} />
                </div>
              </div>
              <p className="font-serif text-[1.5rem] text-black leading-none">{card.value}</p>
              <p className="font-sans text-[0.8rem] text-gray-400 mt-1">{card.sub}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* Filing progress tracker */}
          <div className="bg-white rounded-[1rem] border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-sans font-bold text-[1rem] text-black">Filing Progress</h2>
              <span className="font-sans text-[0.75rem] font-bold text-green-800 bg-green-100 px-3 py-1 rounded-full">
                5 of 7 complete
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
              <div className="bg-green-800 h-2 rounded-full transition-all duration-500" style={{ width: "71%" }} />
            </div>

            {/* Steps */}
            <div className="space-y-0">
              {statusSteps.map((step, i) => (
                <div key={step.label} className="flex gap-4">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
                      step.done ? "bg-green-800" : "bg-gray-200 border-2 border-gray-300"
                    }`} />
                    {i < statusSteps.length - 1 && (
                      <div className={`w-px flex-1 my-1 ${
                        step.done && statusSteps[i + 1]?.done ? "bg-green-800" : "bg-gray-200"
                      }`} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-5 flex-1">
                    <div className="flex items-center justify-between">
                      <p className={`font-sans text-[0.85rem] ${step.done ? "text-black font-medium" : "text-gray-400"}`}>
                        {step.label}
                      </p>
                      <span className={`font-sans text-[0.75rem] ${step.done ? "text-gray-400" : "text-amber-600 font-bold"}`}>
                        {step.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming deadlines */}
          <div className="bg-white rounded-[1rem] border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-sans font-bold text-[1rem] text-black">Upcoming Deadlines</h2>
              <Link href="/dashboard/compliance" className="font-sans text-[0.8rem] font-medium text-green-800 hover:opacity-60 transition-opacity cursor-pointer">
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {upcomingDeadlines.map((d) => (
                <div key={d.name} className={`flex items-center justify-between p-4 rounded-lg ${d.urgent ? "bg-amber-50 border border-amber-200" : "bg-ivory-100"}`}>
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Calendar className={`w-4 h-4 flex-shrink-0 ${d.urgent ? "text-amber-600" : "text-gray-400"}`} />
                    <div className="min-w-0">
                      <p className="font-sans text-[0.85rem] font-medium text-black truncate">{d.name}</p>
                      <p className="font-sans text-[0.7rem] text-gray-400">{d.form} &middot; {d.date}</p>
                    </div>
                  </div>
                  <span className={`font-sans text-[0.75rem] font-bold flex-shrink-0 ml-3 px-2.5 py-1 rounded-full ${
                    d.urgent ? "bg-amber-200 text-amber-800" : "bg-gray-100 text-gray-600"
                  }`}>
                    {d.daysLeft}d left
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity log */}
          <div className="bg-white rounded-[1rem] border border-gray-200 p-6">
            <h2 className="font-sans font-bold text-[1rem] text-black mb-5">Recent Activity</h2>
            <div className="space-y-4">
              {activityLog.map((entry, i) => {
                const Icon = entry.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-ivory-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-green-800" />
                    </div>
                    <div>
                      <p className="font-sans text-[0.85rem] text-black">{entry.action}</p>
                      <p className="font-sans text-[0.7rem] text-gray-400">{entry.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* LLC info card */}
          <div className="bg-green-800 rounded-[1rem] p-6">
            <h2 className="font-sans font-bold text-[0.9rem] text-white/80 mb-4">Your LLC</h2>
            <div className="space-y-3">
              {[
                { label: "Name", value: "Pacific Coast Ventures LLC" },
                { label: "State", value: "California" },
                { label: "Type", value: "Multi-Member LLC" },
                { label: "Formed", value: "March 12, 2026" },
                { label: "EIN", value: "Pending" },
                { label: "Agent", value: "Biz Legal" },
                { label: "Status", value: "Active — Good Standing" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between border-b border-white/10 pb-2.5 last:border-0 last:pb-0">
                  <span className="font-sans text-[0.8rem] text-white/50">{row.label}</span>
                  <span className="font-sans text-[0.8rem] text-white font-medium text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent documents */}
          <div className="bg-white rounded-[1rem] border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-sans font-bold text-[1rem] text-black">Documents</h2>
              <Link href="/dashboard/documents" className="font-sans text-[0.8rem] font-medium text-green-800 hover:opacity-60 transition-opacity cursor-pointer">
                View All
              </Link>
            </div>

            <div className="space-y-2">
              {recentDocuments.map((doc) => (
                <div key={doc.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-ivory-100 transition-colors cursor-pointer group">
                  <div className="w-8 h-8 bg-ivory-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-ivory-200">
                    <FileText className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[0.85rem] text-black truncate">{doc.name}</p>
                    <p className="font-sans text-[0.7rem] text-gray-400">{doc.type} &middot; {doc.date}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-green-800 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Compliance score */}
          <div className="bg-white rounded-[1rem] border border-gray-200 p-6">
            <h2 className="font-sans font-bold text-[1rem] text-black mb-4">Compliance Score</h2>
            <div className="flex items-center gap-5 mb-4">
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 72 72">
                  <circle cx="36" cy="36" r="30" fill="none" stroke="#E5E5E5" strokeWidth="6" />
                  <circle cx="36" cy="36" r="30" fill="none" stroke="#1B5E3F" strokeWidth="6"
                    strokeDasharray={`${(85 / 100) * 188.5} 188.5`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-[1.25rem] text-black">85</span>
                </div>
              </div>
              <div>
                <p className="font-sans text-[0.85rem] font-bold text-black">Good</p>
                <p className="font-sans text-[0.75rem] text-gray-400 leading-[1.5]">
                  1 upcoming deadline. All filings current. EIN pending.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { item: "Formation", status: "complete" },
                { item: "Franchise Tax", status: "due-soon" },
                { item: "Statement of Info", status: "complete" },
                { item: "Registered Agent", status: "complete" },
                { item: "EIN", status: "pending" },
              ].map((row) => (
                <div key={row.item} className="flex items-center justify-between py-1.5">
                  <span className="font-sans text-[0.8rem] text-gray-600">{row.item}</span>
                  <span className={`font-sans text-[0.7rem] font-bold px-2 py-0.5 rounded-full ${
                    row.status === "complete" ? "bg-green-100 text-green-800" :
                    row.status === "due-soon" ? "bg-amber-50 text-amber-700" :
                    "bg-gray-100 text-gray-500"
                  }`}>
                    {row.status === "complete" ? "Complete" : row.status === "due-soon" ? "Due Soon" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Help card */}
          <div className="bg-ivory-200 rounded-[1rem] p-6">
            <h3 className="font-sans font-bold text-[0.9rem] text-black mb-2">Need help?</h3>
            <p className="font-sans text-[0.8rem] text-gray-600 leading-[1.6] mb-4">
              Your dedicated specialist is available Mon–Fri, 9AM–6PM PT.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2 text-[0.85rem] font-sans font-medium text-white bg-green-800 rounded-full hover:bg-green-600 transition-colors cursor-pointer"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
