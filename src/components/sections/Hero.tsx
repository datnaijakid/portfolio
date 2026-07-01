import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="section-shell relative grid gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3.5 py-1.5 font-mono text-xs text-accent-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
            open to opportunities
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-accent-violet sm:text-xl">
            {SITE.role}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {SITE.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              href={`https://github.com/${SITE.githubUsername}`}
              external
              icon={
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
              }
            >
              GitHub
            </Button>
            <Button href={SITE.linkedinUrl} external variant="secondary">
              LinkedIn
            </Button>
            <Button href="#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms] [opacity:0]">
          <div className="card-surface overflow-hidden shadow-glow-sm">
            <div className="flex items-center gap-1.5 border-b border-border-subtle bg-bg-elevated px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-ink-faint">whoami.sh</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-ink-muted">
<span className="text-accent-blue">$</span> whoami{"\n"}
<span className="text-ink">{SITE.name.toLowerCase().replace(" ", "_")}</span>{"\n\n"}
<span className="text-accent-blue">$</span> cat focus.txt{"\n"}
<span className="text-ink">- computer science, third year</span>{"\n"}
<span className="text-ink">- full-stack development</span>{"\n"}
<span className="text-ink">- clean, readable, shippable code</span>{"\n\n"}
<span className="text-accent-blue">$</span> ./fetch_projects.sh{"\n"}
<span className="text-accent-violet">→ pulling from github.com/{SITE.githubUsername}</span>{"\n"}
<span className="text-ink-faint">  see below ↓</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
