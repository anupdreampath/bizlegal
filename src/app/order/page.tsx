import PageShell from "@/components/PageShell";
import OrderClient from "./OrderClient";

export const metadata = {
  title: "Order Your California LLC Formation — $750 — biz.legal",
  description:
    "Order your California LLC formation package. Attorney-drafted documents, professional filing, and 1 year of law firm support.",
};

export default function OrderPage() {
  return (
    <PageShell
      label="Order Now"
      title="California LLC Formation Package"
      description="Attorney-drafted documents, attorney-guided decisions, professional filing, fast delivery, and no guesswork."
      heroImage="/amyersnapa-attachments/iStock-2243799864.jpg"
      heroAlt="Business owner ready to form a California LLC with biz.legal"
    >
      <OrderClient />
    </PageShell>
  );
}
