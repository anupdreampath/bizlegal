import { Shield, FileText, CheckCircle2, Clock } from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-[1rem] overflow-hidden">
      {/* Mini top bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-white/10 rounded px-8 py-0.5">
            <span className="font-sans text-[0.55rem] text-white/30">bizlegal.com/dashboard</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Mini sidebar */}
        <div className="w-[70px] border-r border-white/10 p-3 space-y-2 hidden sm:block">
          <div className="w-full h-3 bg-white/10 rounded" />
          <div className="mt-4 space-y-2">
            <div className="w-full h-2 bg-white/20 rounded" />
            <div className="w-full h-2 bg-white/10 rounded" />
            <div className="w-full h-2 bg-white/10 rounded" />
            <div className="w-full h-2 bg-white/10 rounded" />
          </div>
        </div>

        {/* Mini content */}
        <div className="flex-1 p-4">
          {/* Welcome */}
          <div className="h-3 w-32 bg-white/15 rounded mb-1" />
          <div className="h-2 w-44 bg-white/8 rounded mb-4" />

          {/* Status cards */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {[
              { label: "Active", icon: Shield, color: "bg-green-500/30" },
              { label: "In Progress", icon: Clock, color: "bg-amber-500/20" },
              { label: "1 Due", icon: FileText, color: "bg-amber-500/20" },
              { label: "4 Files", icon: FileText, color: "bg-green-500/30" },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="bg-white/5 rounded-lg p-2">
                  <div className={`w-4 h-4 ${card.color} rounded flex items-center justify-center mb-1.5`}>
                    <Icon className="w-2.5 h-2.5 text-white/50" />
                  </div>
                  <div className="h-2.5 w-8 bg-white/15 rounded mb-0.5" />
                  <div className="h-1.5 w-12 bg-white/8 rounded" />
                </div>
              );
            })}
          </div>

          {/* Filing progress */}
          <div className="bg-white/5 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="h-2 w-20 bg-white/15 rounded" />
              <div className="h-2 w-14 bg-green-500/30 rounded" />
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full mb-3">
              <div className="w-[71%] h-1 bg-green-500/50 rounded-full" />
            </div>
            <div className="space-y-1.5">
              {[true, true, true, true, false].map((done, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${done ? "bg-green-500/60" : "bg-white/15"}`} />
                  <div className={`h-1.5 rounded ${done ? "bg-white/12 w-28" : "bg-white/8 w-20"}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
