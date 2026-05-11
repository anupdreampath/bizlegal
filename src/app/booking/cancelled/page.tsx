import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookingCancelledPage() {
  return (
    <>
      <Header />
      <main className="bg-ivory-100 pt-[9rem] pb-[6rem]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-[3rem] text-black mb-4">Booking not completed</h1>
          <p className="font-sans text-gray-600 mb-6">Your slot is not confirmed until the $25 booking fee is paid.</p>
          <Link href="/booking" className="inline-flex bg-green-800 text-white rounded-full px-6 py-3 font-sans">
            Choose another slot
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
