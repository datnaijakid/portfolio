import { NextResponse } from "next/server";
import { FALLBACK_PROJECTS, Project } from "@/data/projectsFallback";

export const revalidate = 3600; // Cache for 1 hour

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
  if (
    text.includes("ai") ||
    text.includes("lang") ||
    text.includes("tutor") ||
    text.includes("gpt") ||
    text.includes("copilot") ||
    text.includes("career") ||
    text.includes("full-stack")
  ) {
    return "AI & Full-Stack";
  }
  return "Mobile & Web Apps";
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
      console.warn(
        `GitHub API returned ${res.status}: ${res.statusText}. Using fallback dataset.`
      );
      return NextResponse.json({
        projects: FALLBACK_PROJECTS,
        lastSynced: new Date().toISOString(),
        source: "fallback",
      });
    }

    const repos: GitHubRepo[] = await res.json();
    const fallbackMap = new Map(FALLBACK_PROJECTS.map((p) => [p.name.toLowerCase(), p]));

    // Filter out forks or utility repos if needed, but include all original creations
    const originalRepos = repos.filter(
      (r) => !r.fork && r.name !== "portfolio" && r.name !== "day-71-music-blog"
    );

    const enrichedProjects: Project[] = await Promise.all(
      originalRepos.map(async (repo) => {
        const existing = fallbackMap.get(repo.name.toLowerCase());

        if (existing) {
          // Merge live metadata from GitHub
          return {
            ...existing,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            live: repo.homepage || existing.live,
            github: repo.html_url,
            updatedAt: repo.pushed_at.split("T")[0],
          };
        }

        // For newly created or discovered repos:
        const title = cleanTitle(repo.name);
        const tools: string[] = [];
        if (repo.language) tools.push(repo.language);
        if (repo.topics) tools.push(...repo.topics);

        let architecture = `Modular architecture built with ${repo.language || "modern technologies"} with clean component separation and automated continuous deployment.`;
        let description =
          repo.description ||
          `Interactive application engineered by Johnpaul Akhator leveraging ${repo.language || "modern full-stack tools"} to solve real-world user needs.`;

        // Attempt to fetch README for richer architecture & description
        try {
          const readmeRes = await fetch(
            `https://raw.githubusercontent.com/datnaijakid/${repo.name}/${repo.default_branch}/README.md`,
            { next: { revalidate: 3600 } }
          );
          if (readmeRes.ok) {
            const readmeText = await readmeRes.text();
            
            // Extract architecture section if present
            const archMatch = readmeText.match(/## (?:Production )?Architecture[\s\S]*?(?=##|$)/i);
            if (archMatch) {
              architecture = archMatch[0].replace(/## (?:Production )?Architecture/i, "").trim().slice(0, 350);
            }

            // Extract tools / badges if present
            const toolMatches = Array.from(readmeText.matchAll(/badge\/([A-Za-z0-9_.-]+)/g)).map(m => m[1]);
            toolMatches.forEach(t => {
              const cleanTool = t.replace(/_/g, " ").replace(/-/g, " ");
              if (!tools.includes(cleanTool) && tools.length < 7) {
                tools.push(cleanTool);
              }
            });
          }
        } catch {
          // ignore readme fetch error
        }

        return {
          id: repo.name,
          name: repo.name,
          title,
          tagline: repo.description ? repo.description.slice(0, 60) : `Built with ${repo.language || "TypeScript"}`,
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

    // Prioritize featured / top projects first
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
