import EditorClient from "./EditorClient";

export default async function EditorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <EditorClient slug={slug} />;
}
