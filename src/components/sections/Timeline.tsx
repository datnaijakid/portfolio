import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/constants";

export default function Timeline() {
  return (
    <section id="journey" className="section-shell py-24">
      <SectionHeading eyebrow="// 04 — journey" title="How I got here" />

      <div className="relative pl-8">
        <div className="absolute bottom-0 left-[7px] top-1 w-px bg-gradient-to-b from-accent-blue via-accent-violet to-transparent" />

        <ol className="space-y-10">
          {TIMELINE.map((entry) => (
            <li key={entry.title} className="relative">
              <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent-gradient shadow-glow-sm" />
              <p className="font-mono text-xs text-accent-blue">{entry.date}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                {entry.title}
              </h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink-muted">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
