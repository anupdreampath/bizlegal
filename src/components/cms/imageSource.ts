const optimizedLocalImages: Record<string, string> = {
  "/amyersnapa-attachments/iStock-2161275481.jpg":
    "/amyersnapa-attachments/optimized/iStock-2161275481-1600.jpg",
  "/amyersnapa-attachments/iStock-2187548708.jpg":
    "/amyersnapa-attachments/optimized/iStock-2187548708-1600.jpg",
  "/amyersnapa-attachments/iStock-2218831325.jpg":
    "/amyersnapa-attachments/optimized/iStock-2218831325-1600.jpg",
  "/amyersnapa-attachments/iStock-2238258267.jpg":
    "/amyersnapa-attachments/optimized/iStock-2238258267-1600.jpg",
  "/amyersnapa-attachments/iStock-2239904274.jpg":
    "/amyersnapa-attachments/optimized/iStock-2239904274-1600.jpg",
  "/amyersnapa-attachments/iStock-2241575917.jpg":
    "/amyersnapa-attachments/optimized/iStock-2241575917-1600.jpg",
  "/amyersnapa-attachments/iStock-2243642331.jpg":
    "/amyersnapa-attachments/optimized/iStock-2243642331-1600.jpg",
  "/amyersnapa-attachments/iStock-2243799864.jpg":
    "/amyersnapa-attachments/optimized/iStock-2243799864-1600.jpg",
};

export function fastImageUrl(url?: string) {
  if (!url) return "";
  return optimizedLocalImages[url] || url;
}
