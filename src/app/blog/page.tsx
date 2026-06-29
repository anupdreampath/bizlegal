import { redirect } from "next/navigation";

export const metadata = {
  title: "Blog — biz.legal",
};

export default function BlogPage() {
  redirect("/");
}
