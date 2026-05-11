import { NextResponse } from "next/server";
import { getPageWithBlocks } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getPageWithBlocks(slug);

  if (!data || !data.blocks.length) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  return NextResponse.json({ page: data.page, blocks: data.blocks });
}
