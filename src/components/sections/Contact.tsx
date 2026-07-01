"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // UI-only submit handler. No backend is wired up yet — swap this for a
  // real request (e.g. to Resend, Formspree, or your own API route) when
  // you're ready to actually receive messages.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="section-shell py-24">
      <SectionHeading
        eyebrow="// 05 — contact"
        title="Let's talk"
        description="Have a project, an internship, or just want to say hi? My inbox is open."
      />

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            reach me directly
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="block text-ink hover:text-accent-blue"
            >
              {SITE.contactEmail}
            </a>
            <a
              href={`https://github.com/${SITE.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-ink-muted hover:text-accent-blue"
            >
              github.com/{SITE.githubUsername}
            </a>
            <a
              href={SITE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-ink-muted hover:text-accent-blue"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-ink-muted">
                name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Ada Lovelace"
                className="w-full rounded-lg border border-border bg-bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-ink-muted">
                email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-ink-muted">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className="w-full resize-none rounded-lg border border-border bg-bg-elevated px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:border-accent-violet"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="rounded-lg bg-accent-gradient px-5 py-2.5 text-sm font-medium text-white shadow-glow-sm transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
            >
              Send message
            </button>
            {sent && (
              <p className="font-mono text-xs text-accent-blue">
                sent — I&apos;ll reply within a couple days.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
