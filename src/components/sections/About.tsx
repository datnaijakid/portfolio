import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeading eyebrow="// 01 — about" title="A bit about me" />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-relaxed text-ink-muted">
          <p>
            I&apos;m a computer science student who spends more time in side
            projects than I probably should — mostly because building
            something end-to-end teaches me things a lecture never will.
            I care about code that reads clearly a year from now, not just
            code that runs today.
          </p>
          <p>
            Most of what I build starts as a rough idea — a habit tracker,
            a study tool, a small utility I wish existed — and turns into a
            full-stack app with a real database, real auth, and a UI I&apos;m
            not embarrassed to show people. I like owning a project from
            schema to deploy.
          </p>
          <p>
            Outside of coursework, I&apos;m usually deep in a personal
            project, reading up on system design, or refactoring something
            that already worked fine, just because I found a cleaner way to
            do it.
          </p>
        </div>

        <div className="card-surface flex flex-col gap-4 p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
            currently
          </p>
          <ul className="space-y-3 text-sm text-ink-muted">
            <li className="flex gap-2.5">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
              Studying computer science full-time
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
              Building full-stack projects end to end
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
              Learning something new about systems every week
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet" />
              Open to internships &amp; collaborative projects
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
