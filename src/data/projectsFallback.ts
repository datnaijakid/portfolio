export interface Project {
  id: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string;
  tools: string[];
  category: "Full-Stack & Web" | "Machine Learning & Data";
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
    tagline: "Learn languages by texting an AI friend",
    description:
      "A language learning web app designed like Instagram direct messages. Instead of drilling flashcards or repetitive quizzes, you practice conversational Spanish, French, or German by chatting back and forth with an AI that replies naturally and corrects your grammar in context.",
    architecture:
      "React 18 and Vite on the frontend with a Python FastAPI backend. Manages conversation history buffers to maintain multi-turn dialogue context and stream real-time corrections from the OpenAI API.",
    tools: ["React", "FastAPI", "Python", "OpenAI", "Vite", "Tailwind CSS"],
    category: "Full-Stack & Web",
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
    tagline: "Job application tracker & resume assistant",
    description:
      "A personal job hunting workspace to organize job applications, track interview stages, and compare resume bullet points against job postings to spot missing keywords and improve application fit.",
    architecture:
      "Next.js App Router full-stack app with server actions. Uses Neon serverless PostgreSQL and Prisma ORM for database storage and relational queries.",
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Neon", "Prisma", "Tailwind CSS"],
    category: "Full-Stack & Web",
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
    tagline: "Habit tracking & accountability app",
    description:
      "A habit tracking app focused on consistency and discipline. Lets you define daily routines, check in, and maintain unbroken streaks with visual progress over time.",
    architecture:
      "Cross-platform app built with React Native and Expo Web sharing one unified codebase across mobile and browser, with local storage for instant offline access.",
    tools: ["React Native", "Expo", "TypeScript", "Tailwind CSS"],
    category: "Full-Stack & Web",
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
    tagline: "Interactive AI study tutor",
    description:
      "A study companion that helps you work through homework and difficult concepts step-by-step. Instead of giving away direct answers, it asks guiding questions to help you understand the core logic.",
    architecture:
      "FastAPI backend handling session state and prompt structure, paired with a Next.js frontend with Markdown rendering and streaming responses.",
    tools: ["FastAPI", "Python", "Next.js", "React", "OpenAI", "Tailwind CSS"],
    category: "Full-Stack & Web",
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
    tagline: "Assignment breakdown & study planner",
    description:
      "A student productivity tool that takes assignment prompts or course outlines and turns them into manageable, step-by-step study plans with built-in milestones.",
    architecture:
      "Next.js web application with cookie-based session management, OpenAI API integration for prompt parsing, and Lemon Squeezy integration for subscription billing.",
    tools: ["Next.js", "TypeScript", "OpenAI", "Lemon Squeezy", "Tailwind CSS"],
    category: "Full-Stack & Web",
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
    tagline: "Custom knitwear & artisan shop",
    description:
      "An e-commerce website for a handmade clothing and knitwear brand, featuring dynamic product galleries, seasonal collections, and a custom order inquiry flow.",
    architecture:
      "Responsive frontend with client-side product filtering, image lightbox views, and an interactive inquiry form for custom commissions.",
    tools: ["JavaScript", "HTML5", "CSS3", "Vercel"],
    category: "Full-Stack & Web",
    github: "https://github.com/datnaijakid/Neetzmadeit",
    live: "https://neetzmadeit.vercel.app",
    stars: 0,
    featured: false,
    updatedAt: "2026-08-28",
  },
  {
    id: "Premier-League-Predictor",
    name: "Premier-League-Predictor",
    title: "Premier League Predictor",
    tagline: "Match outcome forecasting with ML",
    description:
      "A machine learning pipeline that predicts Premier League match outcomes (home win, draw, away win). Trained on 4,180 matches across 11 complete seasons (2015 to 2026) using team form, head-to-head records, and rolling match stats.",
    architecture:
      "Python data pipeline with Pandas and Scikit-learn: automated match data processing, rolling form calculations, and evaluation across Logistic Regression, Random Forest, and XGBoost classifiers.",
    tools: ["Python", "Scikit-Learn", "Pandas", "NumPy", "XGBoost", "Jupyter"],
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
    title: "California Housing Predictor",
    tagline: "Census housing price regression",
    description:
      "A machine learning project exploring the California Housing census dataset to predict median home values based on location coordinates, room counts, and demographic indicators.",
    architecture:
      "Feature engineering, outlier detection, and regression modeling with cross-validation and error diagnostics using Scikit-learn and Matplotlib.",
    tools: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    category: "Machine Learning & Data",
    github: "https://github.com/datnaijakid/house-prices-predictor",
    live: "",
    stars: 0,
    featured: false,
    updatedAt: "2026-06-03",
  },
];
