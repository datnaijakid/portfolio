import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog — ${SITE.name}`,
  description: "Notes on what I'm building and learning.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="section-shell py-32">
      <p className="mb-3 font-mono text-sm text-accent-blue">{"// blog"}</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Notes &amp; write-ups
      </h1>
      <p className="mt-4 max-w-xl text-base text-ink-muted">
        Short posts on projects, things I learn while building, and the odd
        opinion about software.
      </p>

      {posts.length === 0 ? (
        <div className="card-surface mt-12 p-8 text-sm text-ink-muted">
          Nothing published yet — drop a markdown file into{" "}
          <code className="font-mono text-accent-blue">content/blog</code> to
          get started.
        </div>
      ) : (
        <ul className="mt-12 divide-y divide-border-subtle">
          {posts.map((post) => (
            <li key={post.slug} className="py-6">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-lg font-semibold text-ink group-hover:text-accent-blue">
                    {post.title}
                  </h2>
                  <span className="shrink-0 font-mono text-xs text-ink-faint">
                    {formatDate(post.date)}
                  </span>
                </div>
                {post.excerpt && (
                  <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
                )}
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
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
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
