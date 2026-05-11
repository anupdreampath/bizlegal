export type CmsImage = { url: string; alt?: string; type?: "image" | "video" };
export type CmsCta = { label: string; href: string };

export type CmsBlock = {
  id: number;
  type: string;
  position: number;
  content: any;
  style: any;
  visible: boolean;
};
