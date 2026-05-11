import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookingSuccessPage() {
  return (
    <>
      <Header />
      <main className="bg-ivory-100 pt-[9rem] pb-[6rem]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-[3rem] text-black mb-4">Your call is booked</h1>
          <p className="font-sans text-gray-600">Payment was received and your consultation slot is reserved.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
