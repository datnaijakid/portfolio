import type { GitHubRepo, ProjectCardData } from "@/types/github";

const GITHUB_API = "https://api.github.com";

/**
 * Fetches public repositories for a GitHub user, filters out forks and
 * archived repos, and maps them into the shape the Projects section needs.
 * Sorted by most recently pushed to.
 */
export async function getGitHubProjects(
  username: string
): Promise<ProjectCardData[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `${GITHUB_API}/users/${username}/repos?per_page=100&type=owner`,
    {
      headers,
      // Revalidate hourly so new repos / stars show up without a full rebuild
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error(`GitHub user "${username}" was not found.`);
    }
    if (res.status === 403) {
      throw new Error(
        "GitHub API rate limit exceeded. Add a GITHUB_TOKEN to .env.local to raise the limit."
      );
    }
    throw new Error(`GitHub API request failed with status ${res.status}.`);
  }

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort(
      (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    )
    .map(
      (repo): ProjectCardData => ({
        id: repo.id,
        name: repo.name,
        description: repo.description ?? "No description provided yet.",
        url: repo.html_url,
        homepage: repo.homepage || null,
        language: repo.language,
        topics: repo.topics ?? [],
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.pushed_at,
      })
    );
}
