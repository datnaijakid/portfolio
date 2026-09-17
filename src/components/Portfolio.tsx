"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { FALLBACK_PROJECTS, Project } from "@/data/projectsFallback";

const LINKEDIN_URL = "https://www.linkedin.com/in/johnpaul-akhator-39150a314";
const GITHUB_URL = "https://github.com/datnaijakid";
const EMAIL_ADDRESS = "jpakhator@upei.ca";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function IconGitHub({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function IconMail({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconExternalLink({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconRefresh({ size = 14, spinning = false }: { size?: number; spinning?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={spinning ? "animate-spin" : ""}
    >
      <path d="M23 4v6h-6" />
      <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </svg>
  );
}

function IconSearch({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconArchitecture({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconCopy({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function IconCheck({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth={2.5}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconClose({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconSparkles({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M6.757 17.243l-2.121 2.121m12.728 0l-2.121-2.121M6.757 6.757L4.636 4.636" />
    </svg>
  );
}

// ─── Main Portfolio Component ─────────────────────────────────────────────────

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(false);
  const [syncSource, setSyncSource] = useState<"github" | "fallback">("fallback");
  const [lastSynced, setLastSynced] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

  // Atlantic Time Clock (PEI, Canada)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Halifax",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime("");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Projects from GitHub API route
  const fetchGitHubProjects = async (isManual = false) => {
    setLoading(true);
    try {
      const res = await fetch("/api/projects", { cache: isManual ? "no-store" : "default" });
      if (res.ok) {
        const data = await res.json();
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects);
          setSyncSource(data.source || "github");
          setLastSynced(new Date(data.lastSynced).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        }
      }
    } catch (e) {
      console.warn("Using fallback projects:", e);
      setSyncSource("fallback");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  // Copy Email handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  // Nav Scroll Spy
  const navSections = ["about", "projects", "skills", "contact"];
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const isScrolled = window.scrollY > 30;
      nav.style.background = isScrolled ? "rgba(8, 8, 12, 0.90)" : "transparent";
      nav.style.backdropFilter = isScrolled ? "blur(14px)" : "none";
      nav.style.borderBottom = isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none";

      let current = "";
      for (const id of navSections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) current = id;
      }
      linkRefs.current.forEach((a) => {
        if (!a) return;
        const active = a.dataset.section === current;
        a.style.color = active ? "#818cf8" : "#717182";
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tools.some((t) => t.toLowerCase().includes(q)) ||
        p.architecture.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const liveProjectsCount = useMemo(() => {
    return projects.filter((p) => Boolean(p.live)).length;
  }, [projects]);

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #08080c; }
        ::selection { background: #6366f1; color: #fff; }

        .portfolio-wrap {
          background: #08080c;
          color: #e2e2f0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-size: 15px;
          line-height: 1.65;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient Glow Blobs */
        .ambient-glow-1 {
          position: absolute;
          top: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 450px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.05) 45%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 0;
        }

        .ambient-glow-2 {
          position: absolute;
          top: 1400px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px; height: 68px;
          transition: background 0.3s ease, border-bottom 0.3s ease, backdrop-filter 0.3s ease;
        }
        .nav-logo {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px; color: #e2e2f0;
          letter-spacing: 0.12em; text-decoration: none; font-weight: 600;
          display: flex; align-items: center; gap: 8px;
        }
        .nav-logo-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 0 10px #6366f1;
        }
        .nav-links { display: flex; gap: 28px; list-style: none; align-items: center; }
        .nav-links a {
          font-size: 13px; color: #717182; text-decoration: none;
          transition: color 0.2s; font-weight: 500;
        }
        .nav-links a:hover { color: #f1f1f8; }

        .btn-status-pill {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(16, 185, 129, 0.10);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #34d399;
          font-size: 11px;
          font-family: 'JetBrains Mono', monospace;
          padding: 4px 12px;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.2s, border-color 0.2s;
        }
        .btn-status-pill:hover {
          background: rgba(16, 185, 129, 0.18);
          border-color: rgba(16, 185, 129, 0.4);
        }
        .pulse-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #10b981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 7px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* HERO */
        .hero {
          min-height: 92vh; display: flex; flex-direction: column;
          justify-content: center; padding: 110px 40px 40px;
          max-width: 960px; margin: 0 auto;
          position: relative; z-index: 1;
        }
        .hero-badge-row {
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .hero-location-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #88889a;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4px 10px; border-radius: 6px;
        }
        .hero-name {
          font-family: 'Outfit', 'Inter', sans-serif;
          font-size: clamp(48px, 8.5vw, 84px);
          font-weight: 700; line-height: 1.02;
          letter-spacing: -0.03em; color: #f8f8fc; margin-bottom: 20px;
        }
        .hero-name span {
          background: linear-gradient(135deg, #a5b4fc 0%, #6366f1 50%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-size: clamp(16px, 2.2vw, 19px); color: #9494a8;
          max-width: 620px; margin-bottom: 36px; line-height: 1.7; font-weight: 400;
        }
        .hero-sub strong { color: #e2e2f0; font-weight: 600; }
        .hero-ctas { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }

        .btn-primary {
          background: #6366f1; color: #ffffff;
          padding: 12px 24px; border-radius: 9px;
          text-decoration: none; font-size: 14px; font-weight: 600;
          transition: all 0.2s ease; display: inline-flex; align-items: center; gap: 8px;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .btn-primary:hover {
          background: #4f46e5;
          box-shadow: 0 6px 24px rgba(99, 102, 241, 0.45);
          transform: translateY(-1px);
        }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.10); color: #d0d0e2;
          padding: 12px 20px; border-radius: 9px;
          text-decoration: none; font-size: 14px; font-weight: 500;
          transition: all 0.2s ease; cursor: pointer;
        }
        .btn-outline:hover {
          border-color: rgba(99, 102, 241, 0.5);
          color: #ffffff;
          background: rgba(99, 102, 241, 0.08);
          transform: translateY(-1px);
        }

        .btn-ghost {
          color: #88889c; text-decoration: none; font-size: 14px;
          padding: 10px 14px; border-radius: 8px;
          transition: color 0.2s, background 0.2s; display: inline-flex; align-items: center; gap: 7px;
        }
        .btn-ghost:hover { color: #f1f1f8; background: rgba(255, 255, 255, 0.04); }

        /* GITHUB METRIC BAR */
        .github-metric-banner {
          margin-top: 48px;
          padding: 18px 24px;
          background: rgba(18, 18, 26, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
        }
        .metric-item { display: flex; flex-direction: column; }
        .metric-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #717184; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .metric-value {
          font-size: 18px; font-weight: 700; color: #f1f1f8;
          display: flex; align-items: center; gap: 6px; margin-top: 2px;
        }

        /* SECTIONS */
        .section {
          padding: 100px 40px; max-width: 960px; margin: 0 auto;
          position: relative; z-index: 1;
        }

        .eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #818cf8;
          letter-spacing: 0.22em; margin-bottom: 14px; font-weight: 600;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .section-title {
          font-family: 'Outfit', 'Inter', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700; letter-spacing: -0.025em;
          color: #f8f8fc; margin-bottom: 20px; line-height: 1.2;
        }
        .section-subtitle {
          color: #88889c; font-size: 15px; max-width: 620px; margin-bottom: 40px;
        }

        /* GITHUB AUTO-SYNC CONTROLS */
        .sync-bar {
          display: flex; justify-content: space-between; align-items: center;
          background: rgba(14, 14, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px; padding: 12px 18px;
          margin-bottom: 28px; flex-wrap: wrap; gap: 12px;
        }
        .sync-status {
          display: flex; align-items: center; gap: 10px; font-size: 12px; color: #88889c;
          font-family: 'JetBrains Mono', monospace;
        }
        .sync-dot-live {
          width: 8px; height: 8px; border-radius: 50%;
          background: #10b981; box-shadow: 0 0 8px #10b981;
        }
        .sync-dot-fallback {
          width: 8px; height: 8px; border-radius: 50%;
          background: #f59e0b; box-shadow: 0 0 8px #f59e0b;
        }
        .sync-btn {
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #a5b4fc; font-size: 12px; font-family: 'JetBrains Mono', monospace;
          padding: 6px 14px; border-radius: 8px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.2s;
        }
        .sync-btn:hover {
          background: rgba(99, 102, 241, 0.22);
          color: #ffffff;
        }

        /* FILTERS & SEARCH */
        .filter-search-row {
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; margin-bottom: 32px; flex-wrap: wrap;
        }
        .category-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .category-pill {
          font-size: 12px; font-weight: 500;
          padding: 7px 14px; border-radius: 8px; cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          color: #88889a; transition: all 0.2s ease;
        }
        .category-pill:hover {
          color: #f1f1f8; border-color: rgba(255, 255, 255, 0.15);
        }
        .category-pill.active {
          background: #6366f1; color: #ffffff;
          border-color: #6366f1;
          box-shadow: 0 2px 10px rgba(99, 102, 241, 0.35);
        }
        .search-box {
          position: relative; width: 100%; max-width: 260px;
        }
        .search-input {
          width: 100%;
          background: rgba(14, 14, 20, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px 8px 34px;
          color: #f1f1f8; font-size: 13px; outline: none;
          transition: border-color 0.2s;
        }
        .search-input:focus {
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
        }
        .search-icon {
          position: absolute; left: 11px; top: 50%; transform: translateY(-50%);
          color: #66667a; pointer-events: none;
        }

        /* PROJECT CARDS */
        .projects-grid {
          display: flex; flex-direction: column; gap: 20px;
        }
        .project-card {
          background: #0d0d13;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px; padding: 28px 32px;
          transition: transform 0.2s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          position: relative;
          backdrop-filter: blur(12px);
        }
        .project-card:hover {
          border-color: rgba(99, 102, 241, 0.45);
          box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.12);
          transform: translateY(-2px);
        }
        .project-header {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 16px; margin-bottom: 12px; flex-wrap: wrap;
        }
        .project-title-wrap {
          display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
        }
        .project-title {
          font-family: 'Outfit', 'Inter', sans-serif;
          font-size: 20px; font-weight: 700; color: #f1f1f8;
        }
        .live-tag {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; font-weight: 600;
          color: #34d399; background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 2px 8px; border-radius: 9999px;
        }
        .project-tagline {
          font-size: 13px; color: #818cf8; font-weight: 500; margin-top: 2px;
        }
        .project-actions {
          display: flex; align-items: center; gap: 10px;
        }
        .btn-card-live {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399; font-size: 12px; font-weight: 600;
          padding: 6px 14px; border-radius: 7px;
          text-decoration: none; transition: all 0.2s;
        }
        .btn-card-live:hover {
          background: #10b981; color: #ffffff;
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.4);
        }
        .btn-card-git {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.10);
          color: #d0d0e2; font-size: 12px; font-weight: 500;
          padding: 6px 12px; border-radius: 7px;
          text-decoration: none; transition: all 0.2s;
        }
        .btn-card-git:hover {
          border-color: rgba(99, 102, 241, 0.4);
          color: #ffffff; background: rgba(99, 102, 241, 0.1);
        }
        .project-desc {
          color: #9292a4; font-size: 14px; line-height: 1.7; margin-bottom: 18px;
        }

        /* Architecture Snippet in Card */
        .architecture-snippet {
          background: rgba(16, 16, 24, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-left: 3px solid #6366f1;
          border-radius: 6px; padding: 12px 16px;
          margin-bottom: 18px; font-size: 13px; color: #a4a4ba;
          line-height: 1.6;
        }
        .architecture-snippet strong {
          color: #e2e2f0; font-family: 'JetBrains Mono', monospace; font-size: 11px;
          display: block; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.08em;
        }
        .btn-view-architecture {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #818cf8; background: none; border: none;
          cursor: pointer; display: inline-flex; align-items: center; gap: 5px;
          margin-top: 6px; padding: 0; transition: color 0.2s;
        }
        .btn-view-architecture:hover { color: #a5b4fc; text-decoration: underline; }

        /* Tools Chips */
        .tag-list { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 14px; }
        .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #a5b4fc;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.18);
          padding: 3px 10px; border-radius: 6px;
        }

        /* ABOUT */
        .about-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 56px; align-items: start; }
        .about-text p { color: #9494a8; line-height: 1.85; margin-bottom: 18px; font-size: 15px; }
        .about-text p strong { color: #e2e2f0; }
        .fact-card {
          background: #0d0d13;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px; padding: 24px;
        }
        .fact-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 13px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .fact-row:last-child { border-bottom: none; padding-bottom: 0; }
        .fact-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: #717184; letter-spacing: 0.05em;
        }
        .fact-value { font-size: 13px; color: #f1f1f8; font-weight: 500; }
        .fact-link { color: #818cf8; text-decoration: none; transition: color 0.2s; }
        .fact-link:hover { color: #c7d2fe; text-decoration: underline; }

        /* SKILLS */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
        .skill-group-card {
          background: #0d0d13;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px; padding: 22px;
          transition: border-color 0.2s ease;
        }
        .skill-group-card:hover { border-color: rgba(99, 102, 241, 0.35); }
        .skill-group-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #818cf8;
          letter-spacing: 0.15em; margin-bottom: 14px; font-weight: 600;
        }
        .skill-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .skill-chip {
          font-size: 13px; color: #e2e2f0;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.07);
          padding: 6px 12px; border-radius: 7px; transition: border-color 0.2s, background 0.2s;
        }
        .skill-chip:hover {
          border-color: rgba(99, 102, 241, 0.4);
          background: rgba(99, 102, 241, 0.08);
        }

        /* CONTACT */
        .contact-box {
          background: linear-gradient(180deg, #0d0d14 0%, #09090e 100%);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 16px; padding: 56px 40px; text-align: center;
          box-shadow: 0 10px 40px -15px rgba(99, 102, 241, 0.15);
        }
        .contact-box .section-title { margin-bottom: 14px; }
        .contact-sub {
          color: #9292a4; max-width: 480px; margin: 0 auto 36px;
          font-size: 15px; line-height: 1.7;
        }
        .contact-ctas { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

        /* MODAL */
        .modal-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }
        .modal-card {
          background: #0d0d14;
          border: 1px solid rgba(99, 102, 241, 0.35);
          border-radius: 16px; max-width: 650px; width: 100%;
          max-height: 88vh; overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
          padding: 32px; position: relative;
        }
        .modal-close-btn {
          position: absolute; top: 20px; right: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #88889a; border-radius: 8px; width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.2s;
        }
        .modal-close-btn:hover { background: rgba(255, 255, 255, 0.12); color: #fff; }
        .modal-diagram-box {
          background: #06060a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px; padding: 18px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
          color: #818cf8; white-space: pre-wrap; line-height: 1.5;
          margin: 18px 0;
        }

        /* FOOTER */
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          text-align: center; padding: 40px 40px; margin-top: 60px;
        }
        .footer p {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; color: #66667a; letter-spacing: 0.05em;
        }
        .footer a { color: #818cf8; text-decoration: none; }

        @media (max-width: 768px) {
          .nav { padding: 0 20px; }
          .hero { padding: 90px 20px 40px; }
          .section { padding: 70px 20px; }
          .about-grid { grid-template-columns: 1fr; gap: 36px; }
          .contact-box { padding: 36px 20px; }
          .project-card { padding: 22px 20px; }
        }
      `}</style>

      <div className="portfolio-wrap">
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />

        {/* TOP NAVIGATION */}
        <nav ref={navRef} className="nav">
          <a href="#hero" className="nav-logo">
            <span className="nav-logo-dot" />
            JA.dev
          </a>

          <ul className="nav-links">
            {navSections.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  data-section={id}
                  ref={(el) => {
                    if (el) linkRefs.current[i] = el;
                  }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-status-pill"
                title="Johnpaul is actively seeking software engineering internships"
              >
                <span className="pulse-dot" />
                Available for Roles
              </a>
            </li>
          </ul>
        </nav>

        {/* HERO SECTION */}
        <section id="hero">
          <div className="hero">
            <div className="hero-badge-row">
              <span className="btn-status-pill">
                <span className="pulse-dot" />
                Open to Internships &amp; New Grad
              </span>
              <span className="hero-location-badge">
                📍 PEI, Canada {localTime ? `• ${localTime} AST` : ""}
              </span>
            </div>

            <h1 className="hero-name">
              Johnpaul<br />
              <span>Akhator.</span>
            </h1>

            <p className="hero-sub">
              <strong>Computer Science student &amp; full-stack builder</strong>. I design and engineer 
              human-centered web platforms, AI-driven tools, and high-performance system architectures 
              with relentless attention to craft.
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">
                Explore Projects ({projects.length})
              </a>
              <button onClick={handleCopyEmail} className="btn-outline">
                {copiedEmail ? <IconCheck /> : <IconCopy />}
                {copiedEmail ? "Email Copied!" : "Copy Email"}
              </button>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <IconGitHub size={17} /> GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <IconLinkedIn size={17} /> LinkedIn
              </a>
            </div>

            {/* LIVE GITHUB ACTIVITY BANNER */}
            <div className="github-metric-banner">
              <div className="metric-item">
                <span className="metric-label">Repositories</span>
                <span className="metric-value">
                  <IconGitHub size={17} /> 20+ Repos
                </span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Live Deployed Apps</span>
                <span className="metric-value">
                  <span className="pulse-dot" style={{ display: "inline-block" }} />
                  {liveProjectsCount} Active
                </span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Primary Stack</span>
                <span className="metric-value">TS • Python • Next.js</span>
              </div>
              <div className="metric-item">
                <span className="metric-label">Current Focus</span>
                <span className="metric-value">AI Systems &amp; Full-Stack</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <div className="section">
            <span className="eyebrow">
              <IconSparkles size={14} /> ABOUT ME
            </span>
            <h2 className="section-title">Software built with intention and taste.</h2>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Hey, I&apos;m <strong>Johnpaul Akhator</strong>. I&apos;m currently pursuing my Computer Science degree 
                  at the <strong>University of Prince Edward Island (UPEI)</strong> in Canada, originally from Nigeria.
                </p>
                <p>
                  I don&apos;t just write code to pass tests; I build things that real people rely on. Whether it&apos;s 
                  engineering <strong>Texted</strong> (an AI language buddy built to replicate natural texting), 
                  architecting <strong>CareerOS</strong> on serverless Postgres, or training predictive machine learning 
                  models over 4,000+ Premier League matches — I thrive at the intersection of system logic and refined UI engineering.
                </p>
                <p>
                  My engineering philosophy is simple: <strong>make it fast, keep it readable, and treat user experience like a product differentiator</strong>. 
                  When I&apos;m not writing code, you&apos;ll find me dissecting machine learning papers, following football tactics, 
                  or experimenting with edge runtime architectures.
                </p>
              </div>

              <div className="fact-card">
                {[
                  { label: "Education", value: "BSc Computer Science" },
                  { label: "Institution", value: "University of Prince Edward Island" },
                  { label: "Location", value: "Charlottetown, Canada 🇨🇦" },
                  { label: "Roots", value: "Nigeria 🇳🇬" },
                  { label: "Status", value: "Open to Internships & Co-ops" },
                  {
                    label: "GitHub",
                    value: (
                      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="fact-link">
                        @datnaijakid
                      </a>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    value: (
                      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="fact-link">
                        johnpaul-akhator
                      </a>
                    ),
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="fact-row">
                    <span className="fact-label">{label}</span>
                    <span className="fact-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (WITH LIVE GITHUB SYNC) */}
        <section id="projects">
          <div className="section">
            <span className="eyebrow">
              <IconArchitecture size={14} /> SELECTED WORK
            </span>
            <h2 className="section-title">Production Systems &amp; Experiments</h2>
            <p className="section-subtitle">
              This portfolio automatically syncs directly with my GitHub account, dynamically pulling 
              system architecture, technical tools, live URLs, and updates.
            </p>

            {/* SYNC STATUS BAR */}
            <div className="sync-bar">
              <div className="sync-status">
                <span className={syncSource === "github" ? "sync-dot-live" : "sync-dot-fallback"} />
                {syncSource === "github"
                  ? `Live connected to GitHub @datnaijakid (Updated ${lastSynced || "recently"})`
                  : "Connected with cached repository snapshots"}
                <span style={{ color: "#a5b4fc" }}>• {projects.length} Repositories loaded</span>
              </div>
              <button
                onClick={() => fetchGitHubProjects(true)}
                className="sync-btn"
                title="Fetch latest projects and commits from GitHub"
                disabled={loading}
              >
                <IconRefresh size={13} spinning={loading} />
                {loading ? "Syncing..." : "Sync from GitHub"}
              </button>
            </div>

            {/* FILTER & SEARCH ROW */}
            <div className="filter-search-row">
              <div className="category-pills">
                {["All", "AI & Full-Stack", "Mobile & Web Apps", "Machine Learning & Data"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="search-box">
                <span className="search-icon"><IconSearch size={14} /></span>
                <input
                  type="text"
                  placeholder="Filter by tech or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* PROJECT CARDS LIST */}
            <div className="projects-grid">
              {filteredProjects.map((p) => (
                <div key={p.id} className="project-card">
                  <div className="project-header">
                    <div>
                      <div className="project-title-wrap">
                        <h3 className="project-title">{p.title}</h3>
                        {p.live && (
                          <span className="live-tag">
                            <span className="pulse-dot" style={{ width: 5, height: 5 }} />
                            Live Demo
                          </span>
                        )}
                        {p.featured && (
                          <span className="tag" style={{ color: "#f59e0b", borderColor: "rgba(245, 158, 11, 0.3)", background: "rgba(245, 158, 11, 0.08)" }}>
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <p className="project-tagline">{p.tagline}</p>
                    </div>

                    <div className="project-actions">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-card-live"
                          title="Open live production app"
                        >
                          <IconExternalLink size={14} /> Launch Site
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-card-git"
                          title="View source code on GitHub"
                        >
                          <IconGitHub size={14} /> Code
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-desc">{p.description}</p>

                  {/* Architecture Highlight Snippet */}
                  <div className="architecture-snippet">
                    <strong>Architecture &amp; Data Flow:</strong>
                    {p.architecture}
                    <div>
                      <button
                        onClick={() => setActiveModalProject(p)}
                        className="btn-view-architecture"
                      >
                        <IconArchitecture size={13} /> Deep Dive Architecture &amp; System Specs →
                      </button>
                    </div>
                  </div>

                  {/* Tools Stack Chips */}
                  <div className="tag-list">
                    {p.tools.map((tool) => (
                      <span key={tool} className="tag">
                        {tool}
                      </span>
                    ))}
                    {p.updatedAt && (
                      <span
                        className="tag"
                        style={{
                          marginLeft: "auto",
                          color: "#6b7280",
                          borderColor: "rgba(255,255,255,0.06)",
                          background: "transparent",
                        }}
                      >
                        Updated {p.updatedAt}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "#88889a" }}>
                  <p>No projects match your filter query.</p>
                  <button
                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                    className="btn-outline"
                    style={{ marginTop: 14 }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ARCHITECTURE DEEP DIVE MODAL */}
        {activeModalProject && (
          <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveModalProject(null)}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <IconClose size={16} />
              </button>

              <span className="eyebrow" style={{ marginBottom: 8 }}>
                SYSTEM DESIGN DEEP DIVE
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#f8f8fc", marginBottom: 6 }}>
                {activeModalProject.title}
              </h3>
              <p style={{ color: "#818cf8", fontSize: 13, marginBottom: 20 }}>
                {activeModalProject.tagline}
              </p>

              <div style={{ marginBottom: 20 }}>
                <h4 style={{ fontSize: 13, textTransform: "uppercase", color: "#e2e2f0", letterSpacing: "0.06em", marginBottom: 8 }}>
                  System Architecture Overview
                </h4>
                <p style={{ color: "#9da3b4", fontSize: 14, lineHeight: 1.7 }}>
                  {activeModalProject.architecture}
                </p>
              </div>

              {/* Visual ASCII / System Pipeline Box */}
              <div className="modal-diagram-box">
                {`[Client / UI] ── (HTTPS / REST / WebSocket) ──> [Application Layer]
       │                                                      │
       ▼                                                      ▼
[Vercel Edge / CDN]                                  [LLM / Postgres / Fast Engine]
       │                                                      │
       └────────────── [Hydrated State & User Stream] ────────┘`}
              </div>

              <div style={{ marginBottom: 24 }}>
                <h4 style={{ fontSize: 13, textTransform: "uppercase", color: "#e2e2f0", letterSpacing: "0.06em", marginBottom: 10 }}>
                  Technologies &amp; Libraries
                </h4>
                <div className="tag-list">
                  {activeModalProject.tools.map((t) => (
                    <span key={t} className="tag" style={{ fontSize: 12, padding: "5px 12px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 12, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
                {activeModalProject.live && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "10px 18px", fontSize: 13 }}
                  >
                    <IconExternalLink size={14} /> Visit Live Production App
                  </a>
                )}
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ padding: "10px 18px", fontSize: 13 }}
                  >
                    <IconGitHub size={14} /> View Repository on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* SKILLS & TECHNICAL TOOLKIT SECTION */}
        <section id="skills">
          <div className="section">
            <span className="eyebrow">
              <IconSparkles size={14} /> TECHNICAL TOOLKIT
            </span>
            <h2 className="section-title">Languages, Frameworks &amp; Systems</h2>
            <p className="section-subtitle">
              Technologies and tools I use to take projects from zero to production.
            </p>

            <div className="skills-grid">
              {[
                {
                  category: "LANGUAGES",
                  items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL", "HTML5/CSS3"],
                },
                {
                  category: "FRONTEND ARCHITECTURE",
                  items: ["React 19 / 18", "Next.js (App Router)", "Vite", "Tailwind CSS", "Expo (React Native)"],
                },
                {
                  category: "BACKEND & DATA",
                  items: ["FastAPI", "Node.js", "Express", "Flask", "PostgreSQL (Neon)", "Prisma ORM", "REST APIs"],
                },
                {
                  category: "AI & MACHINE LEARNING",
                  items: ["OpenAI API", "LangChain", "Prompt Design", "Scikit-Learn", "Pandas", "NumPy", "XGBoost"],
                },
                {
                  category: "INFRASTRUCTURE & TOOLS",
                  items: ["Git & GitHub", "Vercel Deployments", "Linux / Bash", "Jupyter", "Turbopack", "VS Code"],
                },
                {
                  category: "CORE DISCIPLINES",
                  items: ["System Architecture", "Algorithms & Data Structures", "Responsive UX", "API Contract Design"],
                },
              ].map(({ category, items }) => (
                <div key={category} className="skill-group-card">
                  <p className="skill-group-label">{category}</p>
                  <div className="skill-chips">
                    {items.map((s) => (
                      <span key={s} className="skill-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <div className="section">
            <div className="contact-box">
              <span className="eyebrow">GET IN TOUCH</span>
              <h2 className="section-title">Let&apos;s build something great.</h2>
              <p className="contact-sub">
                I&apos;m actively seeking Summer &amp; Fall software engineering internships, co-op placements, 
                and full-stack collaboration opportunities. Whether you have an open role or just want to discuss 
                engineering, my inbox is always open.
              </p>

              <div className="contact-ctas">
                <a href={`mailto:${EMAIL_ADDRESS}`} className="btn-primary">
                  <IconMail size={16} /> Send Email ({EMAIL_ADDRESS})
                </a>
                <button onClick={handleCopyEmail} className="btn-outline">
                  {copiedEmail ? <IconCheck /> : <IconCopy />}
                  {copiedEmail ? "Copied to Clipboard!" : "Copy Email"}
                </button>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <IconLinkedIn size={16} /> LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <IconGitHub size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>
            Designed &amp; engineered by <strong>Johnpaul Akhator</strong> • Automated GitHub Sync powered by Next.js
          </p>
          <p style={{ marginTop: 6, fontSize: 11, color: "#525263" }}>
            Charlottetown, PEI, Canada • Built with Next.js 16, React 19, &amp; Tailwind CSS
          </p>
        </footer>
      </div>
    </>
  );
}