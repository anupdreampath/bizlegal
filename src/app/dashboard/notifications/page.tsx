import { Bell, AlertTriangle, CheckCircle2, FileText, Info } from "lucide-react";

const notifications = [
  { type: "urgent", icon: AlertTriangle, title: "Franchise Tax Due in 3 Days", message: "Your annual $800 franchise tax (Form 3522) is due April 15, 2026. We will process this payment on your behalf.", time: "2 hours ago", read: false },
  { type: "success", icon: CheckCircle2, title: "LLC Approved", message: "Your Articles of Organization have been approved by the California Secretary of State. Your LLC is now officially formed.", time: "1 day ago", read: false },
  { type: "document", icon: FileText, title: "Document Ready", message: "Your stamped Articles of Organization are now available in your Documents folder.", time: "1 day ago", read: true },
  { type: "info", icon: Info, title: "EIN Application Submitted", message: "Your EIN application (Form SS-4) has been submitted to the IRS. Expected processing: 1–2 business days.", time: "2 days ago", read: true },
  { type: "success", icon: CheckCircle2, title: "Statement of Information Filed", message: "Your Initial Statement of Information (Form LLC-12) has been filed with the Secretary of State.", time: "6 days ago", read: true },
  { type: "info", icon: Info, title: "Operating Agreement Signed", message: "All members have signed the Operating Agreement. A copy has been uploaded to your Documents folder.", time: "7 days ago", read: true },
  { type: "info", icon: Info, title: "Formation Plan Approved", message: "You approved the formation plan for Pacific Coast Ventures LLC. Document preparation has begun.", time: "8 days ago", read: true },
];

export default function NotificationsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-[1.75rem] text-black">Notifications</h1>
          <p className="font-sans text-[0.9rem] text-gray-600 mt-1">Updates on your LLC filings, documents, and deadlines.</p>
        </div>
        <button className="font-sans text-[0.8rem] font-medium text-green-800 hover:opacity-60 transition-opacity cursor-pointer">
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-[1rem] border border-gray-200">
        <div className="divide-y divide-gray-100">
          {notifications.map((n, i) => {
            const Icon = n.icon;
            return (
              <div key={i} className={`flex gap-4 px-6 py-5 cursor-pointer hover:bg-ivory-100 transition-colors ${!n.read ? "bg-green-100/20" : ""}`}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  n.type === "urgent" ? "bg-amber-50" :
                  n.type === "success" ? "bg-green-100" :
                  n.type === "document" ? "bg-ivory-200" :
                  "bg-ivory-100"
                }`}>
                  <Icon className={`w-4 h-4 ${
                    n.type === "urgent" ? "text-amber-600" :
                    n.type === "success" ? "text-green-800" :
                    "text-gray-400"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <p className={`font-sans text-[0.9rem] ${!n.read ? "font-bold text-black" : "font-medium text-black"}`}>
                      {n.title}
                    </p>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {!n.read && <span className="w-2 h-2 bg-green-800 rounded-full" />}
                      <span className="font-sans text-[0.7rem] text-gray-400">{n.time}</span>
                    </div>
                  </div>
                  <p className="font-sans text-[0.8rem] text-gray-600 leading-[1.5] mt-1">{n.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
