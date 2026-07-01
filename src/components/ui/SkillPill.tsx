export default function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-bg-elevated px-3.5 py-1.5 text-sm text-ink-muted transition-colors duration-200 hover:border-accent-violet/50 hover:text-ink">
      {label}
    </span>
  );
}
