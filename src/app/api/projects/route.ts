import { NextResponse } from "next/server";
import { FALLBACK_PROJECTS, Project } from "@/data/projectsFallback";

export const revalidate = 3600;

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  pushed_at: string;
  default_branch: string;
}

function cleanTitle(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function determineCategory(
  name: string,
  lang: string | null,
  desc: string = "",
  tools: string[] = []
): Project["category"] {
  const text = `${name} ${lang || ""} ${desc} ${tools.join(" ")}`.toLowerCase();
  if (
    text.includes("predictor") ||
    text.includes("learning") ||
    text.includes("jupyter") ||
    text.includes("pandas") ||
    text.includes("regression") ||
    text.includes("scikit")
  ) {
    return "Machine Learning & Data";
  }
  return "Full-Stack & Web";
}

export async function GET() {
  const headers: Record<string, string> = {
    "User-Agent": "Johnpaul-Portfolio-Sync",
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      "https://api.github.com/users/datnaijakid/repos?per_page=100&sort=pushed",
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        projects: FALLBACK_PROJECTS,
        lastSynced: new Date().toISOString(),
        source: "fallback",
      });
    }

    const repos: GitHubRepo[] = await res.json();
    const fallbackMap = new Map(FALLBACK_PROJECTS.map((p) => [p.name.toLowerCase(), p]));

    const originalRepos = repos.filter(
      (r) => !r.fork && r.name !== "portfolio" && r.name !== "day-71-music-blog"
    );

    const enrichedProjects: Project[] = await Promise.all(
      originalRepos.map(async (repo) => {
        const existing = fallbackMap.get(repo.name.toLowerCase());

        if (existing) {
          return {
            ...existing,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            live: repo.homepage || existing.live,
            github: repo.html_url,
            updatedAt: repo.pushed_at.split("T")[0],
          };
        }

        const title = cleanTitle(repo.name);
        const tools: string[] = [];
        if (repo.language) tools.push(repo.language);
        if (repo.topics) tools.push(...repo.topics);

        let architecture = `Built with ${repo.language || "modern tools"} and structured into clean, reusable modules with continuous deployment on Vercel.`;
        let description =
          repo.description ||
          `A software project developed by Johnpaul Akhator using ${repo.language || "modern web technologies"}.`;

        try {
          const readmeRes = await fetch(
            `https://raw.githubusercontent.com/datnaijakid/${repo.name}/${repo.default_branch}/README.md`,
            { next: { revalidate: 3600 } }
          );
          if (readmeRes.ok) {
            const readmeText = await readmeRes.text();
            
            const archMatch = readmeText.match(/## (?:Production )?Architecture[\s\S]*?(?=##|$)/i);
            if (archMatch) {
              architecture = archMatch[0]
                .replace(/## (?:Production )?Architecture/i, "")
                .trim()
                .slice(0, 250);
            }

            const toolMatches = Array.from(readmeText.matchAll(/badge\/([A-Za-z0-9_.-]+)/g)).map((m) => m[1]);
            toolMatches.forEach((t) => {
              const cleanTool = t.replace(/_/g, " ").replace(/-/g, " ");
              if (!tools.includes(cleanTool) && tools.length < 6) {
                tools.push(cleanTool);
              }
            });
          }
        } catch {
          // ignore
        }

        return {
          id: repo.name,
          name: repo.name,
          title,
          tagline: repo.description ? repo.description.slice(0, 50) : `Built with ${repo.language || "TypeScript"}`,
          description,
          architecture,
          tools: tools.length > 0 ? tools : [repo.language || "Code"],
          category: determineCategory(repo.name, repo.language, repo.description || "", tools),
          github: repo.html_url,
          live: repo.homepage || "",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          featured: false,
          updatedAt: repo.pushed_at.split("T")[0],
        };
      })
    );

    enrichedProjects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      if (a.live && !b.live) return -1;
      if (!a.live && b.live) return 1;
      return (b.updatedAt || "").localeCompare(a.updatedAt || "");
    });

    return NextResponse.json({
      projects: enrichedProjects.length > 0 ? enrichedProjects : FALLBACK_PROJECTS,
      lastSynced: new Date().toISOString(),
      source: "github",
    });
  } catch (error) {
    console.error("Error in /api/projects:", error);
    return NextResponse.json({
      projects: FALLBACK_PROJECTS,
      lastSynced: new Date().toISOString(),
      source: "fallback",
    });
  }
}
