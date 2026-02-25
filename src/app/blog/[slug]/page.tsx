import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { BASE_PATH } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-10 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold mt-10 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-4 space-y-1 text-[var(--color-text-secondary)]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1 text-[var(--color-text-secondary)]" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-[var(--color-border)] pl-4 my-4 text-[var(--color-text-muted)] italic" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => {
    const isInline = typeof props.children === "string";
    if (isInline) {
      return (
        <code className="text-sm px-1.5 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] font-mono" {...props} />
      );
    }
    return <code {...props} />;
  },
  hr: () => <hr className="border-[var(--color-border)] my-8" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg my-6" alt={props.alt ?? ""} {...props} />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="space-y-8">
      <header className="space-y-4">
        <Link
          href="/blog"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
        >
          &larr; Back to blog
        </Link>
        {post.coverImage && (
          <Image
            src={`${BASE_PATH}${post.coverImage}`}
            alt={post.title}
            width={768}
            height={400}
            className="rounded-xl w-full h-56 object-cover"
          />
        )}
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{post.readingTime}</span>
        </div>
        {post.tags && (
          <div className="flex gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="max-w-none">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypePrettyCode, { theme: "github-dark-default", keepBackground: false }],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
