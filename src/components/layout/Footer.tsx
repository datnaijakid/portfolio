import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="section-shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {SITE.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-ink-faint">
          <span className="text-accent-blue">git commit -m</span> &quot;still shipping&quot;
        </p>
      </div>
    </footer>
  );
}
