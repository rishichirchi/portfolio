"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { Post } from "@/types/posts";
import { getLatestPosts } from "@/data/posts";

interface PostsProps {
  limit?: number;
  showTitle?: boolean;
}

export default function Posts({ limit = 3, showTitle = true }: PostsProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await getLatestPosts(limit);
        setPosts(fetchedPosts);
      } catch (err) {
        setError("Failed to load blog posts");
        console.error("Error loading posts:", err);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, [limit]);
  // Return null when loading to not show anything until posts are fetched
  if (loading) {
    return null;
  }
  // Return null when there are errors or no posts to display
  if (error || posts.length === 0) {
    return null;
  }

  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 font-bricolage">
          Recent Posts
        </h2>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <article
              key={post.guid || index}
              className={
                index < posts.length - 1 ? "border-b border-border pb-12" : ""
              }
            >
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <span>
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span>5 min read</span>
                {post.categories && post.categories.length > 0 && (
                  <span className="bg-secondary px-2 py-1 rounded text-xs text-secondary-foreground">
                    {post.categories[0]}
                  </span>
                )}
              </div>
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-2xl font-semibold mb-4 font-bricolage hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
              <p className="text-muted-foreground leading-relaxed">
                {post.contentSnippet}
              </p>{" "}
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`https://medium.com/@rishiraj.chirchi`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium border border-border hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded transition-colors"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
