"use client";

import CmsPageRuntime from "@/components/cms/CmsPageRuntime";

export default function LoginPage() {
  return (
    <CmsPageRuntime
      slug="login"
      fallback={
        <main className="min-h-screen bg-ivory-100 flex items-center justify-center px-6">
          <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 p-8">
            <h1 className="font-serif text-3xl text-black mb-2">Welcome back</h1>
            <p className="font-sans text-gray-600">Sign in to access your LLC dashboard.</p>
          </div>
        </main>
      }
    />
  );
}
