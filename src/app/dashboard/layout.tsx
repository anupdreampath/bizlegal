"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  FolderOpen,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
  User,
  Loader2,
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Filings", href: "/dashboard/filings", icon: FileText },
  { label: "Compliance", href: "/dashboard/compliance", icon: ClipboardCheck },
  { label: "Documents", href: "/dashboard/documents", icon: FolderOpen },
];

const bottomItems = [
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isLoading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  // Show loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-ivory-100 flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-green-800 animate-spin" />
      </div>
    );
  }

  // Don't render dashboard if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-ivory-100 flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-green-800 animate-spin" />
      </div>
    );
  }

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 pt-6 pb-8">
        <Link href="/" className="font-serif text-[1.25rem] text-black">
          Biz Legal
        </Link>
        <p className="font-sans text-[0.7rem] text-gray-400 uppercase tracking-wider mt-0.5">
          Client Portal
        </p>
      </div>

      {/* Main nav */}
      <nav className="flex-1 px-3 space-y-1">
        <p className="px-3 mb-2 font-sans text-[0.65rem] font-bold text-gray-400 uppercase tracking-wider">
          Main
        </p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[0.9rem] font-sans font-medium transition-colors duration-150 cursor-pointer ${
                active
                  ? "bg-green-800 text-white"
                  : "text-gray-600 hover:bg-ivory-200 hover:text-black"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={active ? 2 : 1.5} />
              {item.label}
            </Link>
          );
        })}

        <div className="pt-6">
          <p className="px-3 mb-2 font-sans text-[0.65rem] font-bold text-gray-400 uppercase tracking-wider">
            Account
          </p>
          {bottomItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[0.9rem] font-sans font-medium transition-colors duration-150 cursor-pointer ${
                  active
                    ? "bg-green-800 text-white"
                    : "text-gray-600 hover:bg-ivory-200 hover:text-black"
                }`}
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={active ? 2 : 1.5} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User card */}
      <div className="px-3 pb-4 mt-auto">
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-sans text-[0.7rem] font-bold text-white">{user.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-sans text-[0.8rem] font-bold text-black truncate">{user.name}</p>
              <p className="font-sans text-[0.7rem] text-gray-400 truncate">{user.email}</p>
            </div>
            <button onClick={logout} className="text-gray-400 hover:text-black transition-colors cursor-pointer" aria-label="Log out">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-ivory-100 flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-[240px] bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative w-[260px] bg-white h-full shadow-xl">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 lg:ml-[240px]">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-gray-200 h-[3.5rem] flex items-center px-4 md:px-8">
          <button
            className="lg:hidden mr-3 text-gray-600 hover:text-black cursor-pointer"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex-1" />

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/notifications"
              className="relative p-2 text-gray-400 hover:text-black transition-colors cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="w-[18px] h-[18px]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-800 rounded-full" />
            </Link>

            {/* User dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="w-7 h-7 bg-green-800 rounded-full flex items-center justify-center">
                  <span className="font-sans text-[0.6rem] font-bold text-white">{user.initials}</span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 hidden sm:block" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-2 px-4 py-2 text-[0.85rem] font-sans text-gray-600 hover:bg-ivory-100 cursor-pointer"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-2 px-4 py-2 text-[0.85rem] font-sans text-gray-600 hover:bg-ivory-100 cursor-pointer"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                  <div className="border-t border-gray-200 my-1" />
                  <button
                    className="flex items-center gap-2 px-4 py-2 text-[0.85rem] font-sans text-red-600 hover:bg-ivory-100 cursor-pointer w-full text-left"
                    onClick={() => { setUserMenuOpen(false); logout(); }}
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
