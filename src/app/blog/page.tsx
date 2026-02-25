import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Engineering writing by Akarshan Sajja.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Writing about software engineering, AI-assisted development, and
          building products.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-[var(--color-text-muted)] py-12">
          Posts coming soon. Check back shortly.
        </p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block space-y-2">
                <div className="flex items-baseline gap-3">
                  <time className="text-sm text-[var(--color-text-muted)] shrink-0 tabular-nums">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-sm text-[var(--color-text-muted)]">
                    &middot; {post.readingTime}
                  </span>
                </div>
                <h2 className="text-lg font-medium group-hover:text-[var(--color-accent)] transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {post.excerpt}
                  </p>
                )}
                {post.tags && (
                  <div className="flex gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-1.5 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
