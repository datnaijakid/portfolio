import SectionHeading from "@/components/ui/SectionHeading";
import SkillPill from "@/components/ui/SkillPill";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24">
      <SectionHeading eyebrow="// 03 — skills" title="Toolbox" />

      <div className="grid gap-6 sm:grid-cols-2">
        {SKILLS.map((group) => (
          <div key={group.label} className="card-surface p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <h3 className="font-display text-base font-semibold text-ink">
                {group.label}
              </h3>
              <span className="font-mono text-xs text-ink-faint">
                {group.comment}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
