import type { ProjectCardData } from "@/types/github";
import { timeAgo } from "@/lib/utils";

const LANGUAGE_DOT: Record<string, string> = {
  TypeScript: "#5b8cff",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
};

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  const dotColor = project.language ? LANGUAGE_DOT[project.language] ?? "#8b5cf6" : null;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group card-surface flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-violet/40 hover:shadow-glow"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-accent-gradient">
            {project.name}
          </h3>
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            className="mt-1 shrink-0 text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-blue"
            aria-hidden="true"
          >
            <path d="M3.75 2h5.5a.75.75 0 0 1 0 1.5h-5.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.75.75 0 0 1 1.5 0v5.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.062-1.06l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z" />
          </svg>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        {project.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="rounded-md bg-bg-elevated px-2 py-0.5 font-mono text-xs text-accent-blue"
              >
                {topic}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4 text-xs text-ink-faint">
        <div className="flex items-center gap-3">
          {project.language && (
            <span className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: dotColor ?? "#8b5cf6" }}
              />
              {project.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            <StarIcon /> {project.stars}
          </span>
          <span className="flex items-center gap-1">
            <ForkIcon /> {project.forks}
          </span>
        </div>
        <span>updated {timeAgo(project.updatedAt)}</span>
      </div>
    </a>
  );
}
