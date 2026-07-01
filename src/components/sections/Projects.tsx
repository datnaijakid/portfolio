"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import type { ProjectCardData } from "@/types/github";

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; projects: ProjectCardData[] };

function ProjectSkeleton() {
  return (
    <div className="card-surface h-56 animate-pulse p-6">
      <div className="h-4 w-1/2 rounded bg-bg-elevated" />
      <div className="mt-4 h-3 w-full rounded bg-bg-elevated" />
      <div className="mt-2 h-3 w-5/6 rounded bg-bg-elevated" />
      <div className="mt-2 h-3 w-2/3 rounded bg-bg-elevated" />
      <div className="mt-8 h-3 w-1/3 rounded bg-bg-elevated" />
    </div>
  );
}

export default function Projects() {
  const [state, setState] = useState<State>({ status: "loading" });
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });

    fetch("/api/github")
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
        return data.projects as ProjectCardData[];
      })
      .then((projects) => {
        if (!cancelled) setState({ status: "success", projects });
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ status: "error", message: err.message });
      });

    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

  return (
    <section id="projects" className="section-shell py-24">
      <SectionHeading
        eyebrow="// 02 — projects"
        title="Recent work"
        description={`Pulled live from github.com/${SITE.githubUsername}, sorted by most recently updated.`}
      />

      {state.status === "loading" && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectSkeleton key={i} />
          ))}
        </div>
      )}

      {state.status === "error" && (
        <div className="card-surface flex flex-col items-start gap-4 p-8">
          <p className="font-mono text-sm text-ink-muted">
            <span className="text-[#ff6b6b]">error:</span> {state.message}
          </p>
          <button
            onClick={() => setReloadKey((k) => k + 1)}
            className="rounded-lg border border-border px-4 py-2 text-sm text-ink hover:border-accent-violet/50"
          >
            Try again
          </button>
        </div>
      )}

      {state.status === "success" && state.projects.length === 0 && (
        <div className="card-surface p-8 text-sm text-ink-muted">
          No public repositories found yet — check back soon.
        </div>
      )}

      {state.status === "success" && state.projects.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {state.projects.slice(0, 9).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <div className="mt-10">
        <Button href={`https://github.com/${SITE.githubUsername}?tab=repositories`} external variant="secondary">
          View all repositories
        </Button>
      </div>
    </section>
  );
}
