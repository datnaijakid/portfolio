export const SITE = {
  name: "Johnpaul Akhator",
  role: "Computer Science Student & Software Developer",
  githubUsername: process.env.NEXT_PUBLIC_GITHUB_USERNAME || "datnaijakid",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/your-linkedin",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "you@example.com",
  tagline:
    "I build things at the intersection of clean code and clear thinking — currently studying CS and shipping side projects that stick.",
};

export const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "journey", href: "#journey" },
  { label: "blog", href: "/blog" },
  { label: "contact", href: "#contact" },
];

export type SkillGroup = {
  label: string;
  comment: string;
  skills: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    comment: "// what I think in",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C"],
  },
  {
    label: "Frontend",
    comment: "// what I build interfaces with",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    comment: "// what I build systems with",
    skills: ["Node.js", "Flask", "Express", "PostgreSQL", "MySQL", "REST APIs"],
  },
  {
    label: "Tools",
    comment: "// what I ship with",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Linux", "Postman"],
  },
];

export type TimelineEntry = {
  date: string;
  title: string;
  description: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    date: "2022",
    title: "Started CS degree",
    description:
      "Began formal study in computer science — data structures, algorithms, and the fundamentals that everything else builds on.",
  },
  {
    date: "2023",
    title: "First full-stack projects",
    description:
      "Moved from coursework to self-directed builds, pairing React frontends with Flask and Node backends.",
  },
  {
    date: "2024",
    title: "Deeper into systems & APIs",
    description:
      "Started designing projects around real data and third-party APIs instead of static demos — auth flows, databases, deployment.",
  },
  {
    date: "2025 — now",
    title: "Building in public",
    description:
      "Shipping polished, end-to-end products — from concept to deployed app — and writing about what I learn along the way.",
  },
];
