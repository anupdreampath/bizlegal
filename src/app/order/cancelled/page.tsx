import Link from "next/link";

export const metadata = {
  title: "Order Cancelled — biz.legal",
};

export default function OrderCancelledPage() {
  return (
    <div className="min-h-screen bg-ivory-100 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl font-bold text-black mb-4">
          Order Not Completed
        </h1>
        <p className="font-sans text-gray-600 mb-8 leading-relaxed">
          Your payment was not completed. If you have questions or would like to place your order over the phone, we&apos;re happy to help.
        </p>
        <div className="space-y-3">
          <Link
            href="/order"
            className="block w-full py-3 font-sans font-bold text-white bg-green-800 hover:bg-green-600 rounded-[0.7rem] transition-colors text-center"
          >
            Try Again
          </Link>
          <Link
            href="/contact"
            className="block w-full py-3 font-sans font-medium text-black border border-gray-200 hover:bg-white rounded-[0.7rem] transition-colors text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
