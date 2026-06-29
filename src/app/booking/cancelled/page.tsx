"use client";

import CmsPageRuntime from "@/components/cms/CmsPageRuntime";
import CmsStandaloneShell from "@/components/cms/CmsStandaloneShell";

export default function BookingCancelledPage() {
  return (
    <CmsStandaloneShell>
      <CmsPageRuntime
        slug="booking-cancelled"
        fallback={
          <div className="bg-ivory-100 min-h-screen pt-[9rem] pb-[6rem] px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-[3rem] text-black mb-4">Booking not completed</h1>
            <p className="font-sans text-gray-600">Your slot is not confirmed until the booking fee is paid.</p>
          </div>
          </div>
        }
      />
    </CmsStandaloneShell>
  );
}
