import { Post, RSS2JSONResponse } from "@/types/posts";

const username = "rishiraj.chirchi";
const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;

export async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch(rssUrl, {
      cache: "force-cache",
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }

    const data: RSS2JSONResponse = await response.json();

    if (data.status !== "ok") {
      throw new Error("RSS feed returned error status");
    }

    return data.items.map((item) => ({
      ...item,
      // Clean up the content snippet by removing HTML tags and limiting length
      contentSnippet: item.contentSnippet
        ? item.contentSnippet.replace(/<[^>]*>/g, "").substring(0, 150) + "..."
        : item.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
      // Extract thumbnail from content if available
      thumbnail: extractThumbnail(item.content),
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

function extractThumbnail(content: string): string | undefined {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : undefined;
}

export async function getLatestPosts(limit: number = 3): Promise<Post[]> {
  const posts = await fetchPosts();
  return posts.slice(0, limit);
}
