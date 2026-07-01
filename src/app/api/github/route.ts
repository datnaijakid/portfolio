import { NextResponse } from "next/server";
import { getGitHubProjects } from "@/lib/github";
import { SITE } from "@/lib/constants";

export async function GET() {
  try {
    const projects = await getGitHubProjects(SITE.githubUsername);
    return NextResponse.json({ projects });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch GitHub projects.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
