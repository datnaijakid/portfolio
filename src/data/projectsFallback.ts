export interface Project {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string;
  tools: string[];
  category: "AI & Full-Stack" | "Mobile & Web Apps" | "Machine Learning & Data";
  github: string;
  live?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
  updatedAt?: string;
}

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: "texted-lang-app",
    name: "texted-lang-app",
    title: "Texted",
    tagline: "Learn a Language by Texting an AI Friend",
    description:
      "An AI companion you text with to build authentic conversational language skills. Designed to feel like direct messaging a close friend rather than drilling through sterile flashcards, offering natural dialogue turns with contextual corrections.",
    architecture:
      "React 18 + Vite SPA client hosted on Vercel interfacing with a FastAPI (Python) backend. Orchestrates conversational memory buffers, pedagogical prompt templates, and streaming OpenAI responses with custom error feedback loops.",
    tools: ["React 18", "FastAPI", "Python", "OpenAI API", "Vite", "Tailwind CSS", "Vercel"],
    category: "AI & Full-Stack",
    github: "https://github.com/datnaijakid/texted-lang-app",
    live: "https://texted-lang-app.vercel.app",
    stars: 0,
    featured: true,
    updatedAt: "2026-09-12",
  },
  {
    id: "career-os",
    name: "career-os",
    title: "CareerOS",
    tagline: "Intelligent AI Job Application & Career Operating System",
    description:
      "An intelligent, keyboard-first career copilot engineered to streamline job tracking, dynamically tailor resumes against ATS requirements via LLMs, and monitor application pipelines in one unified workspace.",
    architecture:
      "Next.js App Router full-stack architecture powered by Neon Serverless PostgreSQL and Prisma ORM. Employs Server Actions for zero-bundle authenticated mutations, asynchronous document parsing, and token-optimized AI evaluation.",
    tools: ["Next.js 14", "TypeScript", "PostgreSQL", "Neon", "Prisma ORM", "Tailwind CSS", "OpenAI"],
    category: "AI & Full-Stack",
    github: "https://github.com/datnaijakid/career-os",
    live: "https://career-os-pi-steel.vercel.app",
    stars: 0,
    featured: true,
    updatedAt: "2026-09-10",
  },
  {
    id: "STREAK",
    name: "STREAK",
    title: "STREAK",
    tagline: "Accountability & Habit Discipline Engine",
    description:
      "A cross-platform habit discipline platform rooted in cognitive behavioral principles — engineered to conquer cravings, break addictive dopamine cycles, and forge unbreakable mental discipline with daily accountability.",
    architecture:
      "Cross-platform React Native & Expo Web framework delivering a unified codebase across Mobile and Web. Features local-first state persistence, reactive milestone triggers, and low-latency interaction loops.",
    tools: ["React Native", "Expo Web", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "Mobile & Web Apps",
    github: "https://github.com/datnaijakid/STREAK",
    live: "https://streak-livid-mu.vercel.app",
    stars: 0,
    featured: true,
    updatedAt: "2026-08-27",
  },
  {
    id: "ai_personal_tutor",
    name: "ai_personal_tutor",
    title: "Professor DOTU",
    tagline: "Adaptive Socratic AI Academic Tutor",
    description:
      "An interactive academic tutor that champions active student learning through Socratic questioning, dynamic concept scaffolding, and structured problem walkthroughs instead of passively handing over solutions.",
    architecture:
      "Decoupled microservice architecture: Python 3.10+ FastAPI backend managing syllabus alignment and conversational state, communicating asynchronously with a Next.js 16 and React 19 frontend.",
    tools: ["FastAPI", "Python 3.10+", "Next.js 16", "React 19", "LangChain", "OpenAI", "Tailwind CSS"],
    category: "AI & Full-Stack",
    github: "https://github.com/datnaijakid/ai_personal_tutor",
    live: "https://prof-dotu.vercel.app",
    stars: 0,
    featured: true,
    updatedAt: "2026-08-25",
  },
  {
    id: "study-companion",
    name: "study-companion",
    title: "Study Companion",
    tagline: "Guided Coursework Breakdown Engine",
    description:
      "Transforms overwhelming assignment prompts into structured step-by-step learning roadmaps with built-in anti-cheating guardrails, student upload limits, and Lemon Squeezy premium unlock checkout.",
    architecture:
      "Next.js App Router with secure server-side session cookies, rate-limited OpenAI prompts, automated syllabus segmenting, and webhook-verified subscription fulfillment.",
    tools: ["Next.js 16", "TypeScript", "OpenAI API", "Lemon Squeezy", "Tailwind CSS"],
    category: "AI & Full-Stack",
    github: "https://github.com/datnaijakid/study-companion",
    live: "https://study-companion-roan.vercel.app",
    stars: 0,
    featured: false,
    updatedAt: "2026-07-01",
  },
  {
    id: "Neetzmadeit",
    name: "Neetzmadeit",
    title: "Neetzmadeit",
    tagline: "Artisan Boutique E-Commerce Platform",
    description:
      "A bespoke e-commerce experience designed for a handmade fashion & artisan brand. Features interactive product showcases, seasonal collections, custom commission forms, and direct client ordering workflows.",
    architecture:
      "Mobile-optimized responsive architecture featuring modular component cards, client-side dynamic order modal state, and CDN-cached static assets for instantaneous page loads.",
    tools: ["JavaScript", "HTML5", "CSS3", "Vercel", "Responsive Design"],
    category: "Mobile & Web Apps",
    github: "https://github.com/datnaijakid/Neetzmadeit",
    live: "https://neetzmadeit.vercel.app",
    stars: 0,
    featured: false,
    updatedAt: "2026-08-28",
  },
  {
    id: "Premier-League-Predictor",
    name: "Premier-League-Predictor",
    title: "Premier League Match Predictor",
    tagline: "11-Season Match Outcome Machine Learning Pipeline",
    description:
      "A machine learning pipeline predicting match outcomes (Home Win, Draw, Away Win) trained on 4,180 Premier League matches spanning 11 consecutive seasons (2015–2026) using 220+ engineered statistical features.",
    architecture:
      "Multi-stage data engineering and modeling pipeline: raw data ingestion, automated rolling form calculation, team attacking/defensive rating matrices, followed by hyperparameter-tuned ensemble models (XGBoost & Logistic Regression).",
    tools: ["Python", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "Jupyter Notebook"],
    category: "Machine Learning & Data",
    github: "https://github.com/datnaijakid/Premier-League-Predictor",
    live: "",
    stars: 0,
    featured: false,
    updatedAt: "2026-08-14",
  },
  {
    id: "house-prices-predictor",
    name: "house-prices-predictor",
    title: "California Housing Price Predictor",
    tagline: "Demographic & Census Regression Engine",
    description:
      "Predictive machine learning regression model built to forecast California median house values by analyzing multi-dimensional geographic, demographic, and economic features.",
    architecture:
      "Exploratory data analysis, target distribution normalization, feature correlation filtering, and multi-variable regression with cross-validation and loss metric diagnostics.",
    tools: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Seaborn"],
    category: "Machine Learning & Data",
    github: "https://github.com/datnaijakid/house-prices-predictor",
    live: "",
    stars: 0,
    featured: false,
    updatedAt: "2026-06-03",
  },
];
