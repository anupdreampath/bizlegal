"use client";

import CmsPageRuntime from "@/components/cms/CmsPageRuntime";
import CmsStandaloneShell from "@/components/cms/CmsStandaloneShell";

export default function BookingSuccessPage() {
  return (
    <CmsStandaloneShell>
      <CmsPageRuntime
        slug="booking-success"
        fallback={
          <div className="bg-ivory-100 min-h-screen pt-[9rem] pb-[6rem] px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-[3rem] text-black mb-4">Your call is booked</h1>
            <p className="font-sans text-gray-600">Payment was received and your consultation slot is reserved.</p>
          </div>
          </div>
        }
      />
    </CmsStandaloneShell>
  );
}
