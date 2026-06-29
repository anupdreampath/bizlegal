import Link from "next/link";

export const metadata = {
  title: "Order Confirmed — biz.legal",
};

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-ivory-100 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-green-800/10 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-serif text-3xl font-bold text-black mb-4">
          Order Confirmed
        </h1>
        <p className="font-sans text-gray-600 mb-8 leading-relaxed">
          Thank you for your order. Payment was received and our legal team will contact you within 1 business day to begin your LLC formation.
        </p>
        <div className="space-y-3">
          <Link
            href="/signup"
            className="block w-full py-3 font-sans font-bold text-white bg-green-800 hover:bg-green-600 rounded-[0.7rem] transition-colors text-center"
          >
            Create Your Account
          </Link>
          <Link
            href="/"
            className="block w-full py-3 font-sans font-medium text-black border border-gray-200 hover:bg-white rounded-[0.7rem] transition-colors text-center"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
