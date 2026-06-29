"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Eye,
  BarChart3,
  CalendarDays,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
  Palette,
  PencilRuler,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/admin/editor/home", label: "Visual Editor", icon: PencilRuler },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/admin/theme", label: "Theme", icon: Palette },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(() => pathname.startsWith("/admin/editor"));

  useEffect(() => {
    if (pathname.startsWith("/admin/editor")) setCollapsed(true);
  }, [pathname]);

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-zinc-950 text-zinc-100">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
      <aside
        className={`border-r border-zinc-800 bg-zinc-950 flex flex-col transition-[width] duration-200 ${
          collapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="h-16 px-4 border-b border-zinc-800 flex items-center justify-between">
          <Link
            href="/admin/editor/home"
            className={`font-semibold whitespace-nowrap overflow-hidden ${collapsed ? "w-0" : "w-auto"}`}
          >
            <span>biz</span>
            <span className="text-emerald-400">.</span>
            <span>legal CMS</span>
          </Link>
          <button
            type="button"
            onClick={() => setCollapsed((next) => !next)}
            className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href ||
              (item.href.includes("/editor/") && pathname.startsWith("/admin/editor"));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`h-10 px-3 rounded-lg flex items-center gap-3 text-sm transition ${
                  active
                    ? "bg-emerald-500 text-black"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                }`}
                title={collapsed ? item.label : undefined}
              >
                <Icon size={18} className="shrink-0" />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-zinc-800 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="h-10 px-3 rounded-lg flex items-center gap-3 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
            title={collapsed ? "View site" : undefined}
          >
            <Eye size={18} className="shrink-0" />
            {!collapsed && <span>View Site</span>}
          </Link>
          <form action="/api/admin/logout" method="post">
            <button
              className="w-full h-10 px-3 rounded-lg flex items-center gap-3 text-sm text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              title={collapsed ? "Sign out" : undefined}
            >
              <LogOut size={18} className="shrink-0" />
              {!collapsed && <span>Sign out</span>}
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
