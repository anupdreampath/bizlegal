"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, Bell, Shield, Key } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-[1.75rem] text-black">Settings</h1>
        <p className="font-sans text-[0.9rem] text-gray-600 mt-1">Manage your account preferences.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-ivory-200 p-1 rounded-lg w-fit mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-[0.85rem] font-sans font-medium transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Profile */}
      {activeTab === "profile" && (
        <div className="bg-white rounded-[1rem] border border-gray-200 p-6 md:p-8 max-w-2xl">
          <h2 className="font-sans font-bold text-[1rem] text-black mb-6">Personal Information</h2>

          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-sans font-bold text-[0.8rem] text-black mb-1.5">First Name</label>
                <input type="text" defaultValue="John" className="w-full px-4 py-2.5 bg-ivory-100 border border-gray-200 rounded-lg font-sans text-[0.9rem] text-black focus:outline-none focus:border-green-800 transition-colors" />
              </div>
              <div>
                <label className="block font-sans font-bold text-[0.8rem] text-black mb-1.5">Last Name</label>
                <input type="text" defaultValue="Doe" className="w-full px-4 py-2.5 bg-ivory-100 border border-gray-200 rounded-lg font-sans text-[0.9rem] text-black focus:outline-none focus:border-green-800 transition-colors" />
              </div>
            </div>
            <div>
              <label className="block font-sans font-bold text-[0.8rem] text-black mb-1.5">Email</label>
              <input type="email" defaultValue="john@example.com" className="w-full px-4 py-2.5 bg-ivory-100 border border-gray-200 rounded-lg font-sans text-[0.9rem] text-black focus:outline-none focus:border-green-800 transition-colors" />
            </div>
            <div>
              <label className="block font-sans font-bold text-[0.8rem] text-black mb-1.5">Phone</label>
              <input type="tel" defaultValue="(555) 123-4567" className="w-full px-4 py-2.5 bg-ivory-100 border border-gray-200 rounded-lg font-sans text-[0.9rem] text-black focus:outline-none focus:border-green-800 transition-colors" />
            </div>
            <div>
              <label className="block font-sans font-bold text-[0.8rem] text-black mb-1.5">Address</label>
              <input type="text" defaultValue="123 Main St, Los Angeles, CA 90001" className="w-full px-4 py-2.5 bg-ivory-100 border border-gray-200 rounded-lg font-sans text-[0.9rem] text-black focus:outline-none focus:border-green-800 transition-colors" />
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button className="px-6 py-2.5 font-sans text-[0.85rem] font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors cursor-pointer">
              Save Changes
            </button>
            <button className="px-6 py-2.5 font-sans text-[0.85rem] font-medium text-gray-600 hover:text-black transition-colors cursor-pointer">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Notifications */}
      {activeTab === "notifications" && (
        <div className="bg-white rounded-[1rem] border border-gray-200 p-6 md:p-8 max-w-2xl">
          <h2 className="font-sans font-bold text-[1rem] text-black mb-6">Notification Preferences</h2>

          <div className="space-y-5">
            {[
              { label: "Filing status updates", desc: "Get notified when filings are submitted, approved, or require action.", default: true },
              { label: "Compliance deadline reminders", desc: "Receive alerts at 60, 30, and 7 days before upcoming deadlines.", default: true },
              { label: "Document uploads", desc: "Get notified when new documents are added to your portal.", default: true },
              { label: "Monthly compliance summary", desc: "Receive a monthly email summarizing your LLC's compliance status.", default: false },
              { label: "Marketing and updates", desc: "Receive news about new services, guides, and legal updates.", default: false },
            ].map((pref) => (
              <div key={pref.label} className="flex items-start justify-between gap-6 pb-5 border-b border-gray-100 last:border-0 last:pb-0">
                <div>
                  <p className="font-sans text-[0.9rem] font-medium text-black">{pref.label}</p>
                  <p className="font-sans text-[0.8rem] text-gray-400 mt-0.5">{pref.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-0.5">
                  <input type="checkbox" defaultChecked={pref.default} className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-checked:bg-green-800 rounded-full peer-focus:ring-2 peer-focus:ring-green-800/20 transition-colors after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full" />
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Security */}
      {activeTab === "security" && (
        <div className="space-y-6 max-w-2xl">
          <div className="bg-white rounded-[1rem] border border-gray-200 p-6 md:p-8">
            <h2 className="font-sans font-bold text-[1rem] text-black mb-6">Change Password</h2>
            <div className="space-y-5">
              <div>
                <label className="block font-sans font-bold text-[0.8rem] text-black mb-1.5">Current Password</label>
                <input type="password" placeholder="Enter current password" className="w-full px-4 py-2.5 bg-ivory-100 border border-gray-200 rounded-lg font-sans text-[0.9rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 transition-colors" />
              </div>
              <div>
                <label className="block font-sans font-bold text-[0.8rem] text-black mb-1.5">New Password</label>
                <input type="password" placeholder="Enter new password" className="w-full px-4 py-2.5 bg-ivory-100 border border-gray-200 rounded-lg font-sans text-[0.9rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 transition-colors" />
              </div>
              <div>
                <label className="block font-sans font-bold text-[0.8rem] text-black mb-1.5">Confirm New Password</label>
                <input type="password" placeholder="Re-enter new password" className="w-full px-4 py-2.5 bg-ivory-100 border border-gray-200 rounded-lg font-sans text-[0.9rem] text-black placeholder:text-gray-400 focus:outline-none focus:border-green-800 transition-colors" />
              </div>
            </div>
            <button className="mt-6 px-6 py-2.5 font-sans text-[0.85rem] font-medium text-white bg-green-800 hover:bg-green-600 rounded-full transition-colors cursor-pointer">
              Update Password
            </button>
          </div>

          <div className="bg-white rounded-[1rem] border border-gray-200 p-6 md:p-8">
            <h2 className="font-sans font-bold text-[1rem] text-black mb-2">Two-Factor Authentication</h2>
            <p className="font-sans text-[0.85rem] text-gray-600 mb-5">Add an extra layer of security to your account.</p>
            <button className="px-6 py-2.5 font-sans text-[0.85rem] font-medium text-green-800 border border-green-800 hover:bg-green-100 rounded-full transition-colors cursor-pointer">
              Enable 2FA
            </button>
          </div>

          <div className="bg-white rounded-[1rem] border border-red-200 p-6 md:p-8">
            <h2 className="font-sans font-bold text-[1rem] text-red-700 mb-2">Delete Account</h2>
            <p className="font-sans text-[0.85rem] text-gray-600 mb-5">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <button className="px-6 py-2.5 font-sans text-[0.85rem] font-medium text-white bg-red-600 hover:bg-red-700 rounded-full transition-colors cursor-pointer">
              Delete Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
