import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="section-shell max-w-3xl py-32">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 font-mono text-sm text-ink-muted hover:text-accent-blue"
      >
        ← back to blog
      </Link>

      <p className="font-mono text-xs text-ink-faint">{formatDate(post.date)}</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {post.title}
      </h1>

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-bg-elevated px-2 py-0.5 font-mono text-xs text-accent-violet"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="prose prose-invert prose-headings:font-display prose-headings:font-semibold prose-a:text-accent-blue prose-code:font-mono prose-code:text-accent-violet prose-pre:bg-bg-elevated prose-pre:border prose-pre:border-border mt-10 max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
