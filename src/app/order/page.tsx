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
      title="Build Your Business on the Right Foundation"
      description="Stop paying thousands at a traditional law firm or risking your business with a generic online filing service."
      heroImage="/amyersnapa-attachments/iStock-2243799864.jpg"
      heroAlt="Business owner ready to form a California LLC with biz.legal"
    >
      <OrderClient />
    </PageShell>
  );
}
