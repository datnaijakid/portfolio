"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { FALLBACK_PROJECTS, Project } from "@/data/projectsFallback";

const LINKEDIN_URL = "https://www.linkedin.com/in/johnpaul-akhator-39150a314";
const GITHUB_URL = "https://github.com/datnaijakid";
const EMAIL_ADDRESS = "jpakhator@upei.ca";

// ─── SVG Icons (Clean & Built-in) ─────────────────────────────────────────────

function IconGitHub({ size = 15, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function IconMail({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconExternalLink({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconRefresh({ size = 13, spinning = false }: { size?: number; spinning?: boolean }) {
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconCopy({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function IconCheck({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={2.2}>
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

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(false);
  const [syncSource, setSyncSource] = useState<"github" | "fallback">("fallback");
  const [lastSynced, setLastSynced] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

  // Fetch Projects from GitHub API
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
    } catch {
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
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Nav Scroll Spy
  const navSections = ["about", "projects", "skills", "contact"];
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      nav.style.background = isScrolled ? "rgba(10, 10, 13, 0.92)" : "transparent";
      nav.style.backdropFilter = isScrolled ? "blur(10px)" : "none";
      nav.style.borderBottom = isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none";

      let current = "";
      for (const id of navSections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
      }
      linkRefs.current.forEach((a) => {
        if (!a) return;
        const active = a.dataset.section === current;
        a.style.color = active ? "#f4f4f7" : "#787887";
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
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

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0c; color: #ececf1; }
        ::selection { background: #33333d; color: #fff; }

        .portfolio-wrap {
          background: #0a0a0c;
          color: #ececf1;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-size: 15px;
          line-height: 1.65;
          min-height: 100vh;
        }

        /* NAVIGATION */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 36px; height: 64px;
          transition: background 0.25s ease, border-bottom 0.25s ease, backdrop-filter 0.25s ease;
        }
        .nav-logo {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px; color: #ececf1;
          letter-spacing: 0.06em; text-decoration: none; font-weight: 500;
        }
        .nav-links { display: flex; gap: 24px; list-style: none; align-items: center; }
        .nav-links a {
          font-size: 13px; color: #787887; text-decoration: none;
          transition: color 0.15s; font-weight: 400;
        }
        .nav-links a:hover { color: #ffffff; }

        .status-badge {
          display: inline-flex; align-items: center; gap: 7px;
          color: #22c55e;
          font-size: 12px;
          font-family: 'JetBrains Mono', monospace;
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.2);
          padding: 4px 10px;
          border-radius: 6px;
        }
        .status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #22c55e;
        }

        /* HERO */
        .hero {
          min-height: 84vh; display: flex; flex-direction: column;
          justify-content: center; padding: 120px 36px 40px;
          max-width: 860px; margin: 0 auto;
        }
        .hero-top {
          display: flex; align-items: center; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;
        }
        .hero-title {
          font-size: clamp(40px, 6.5vw, 68px);
          font-weight: 600; line-height: 1.08;
          letter-spacing: -0.03em; color: #ffffff; margin-bottom: 20px;
        }
        .hero-title span { color: #828292; font-weight: 400; }
        .hero-bio {
          font-size: clamp(16px, 2vw, 18px); color: #8e8e9e;
          max-width: 580px; margin-bottom: 34px; line-height: 1.65;
        }
        .hero-bio strong { color: #e4e4eb; font-weight: 500; }

        .hero-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }

        .btn-primary {
          background: #f4f4f7; color: #0a0a0c;
          padding: 10px 18px; border-radius: 7px;
          text-decoration: none; font-size: 13px; font-weight: 500;
          transition: background 0.15s, transform 0.15s;
          display: inline-flex; align-items: center; gap: 7px; border: none; cursor: pointer;
        }
        .btn-primary:hover { background: #ffffff; transform: translateY(-1px); }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          color: #d1d1dc; padding: 10px 16px; border-radius: 7px;
          text-decoration: none; font-size: 13px; font-weight: 400;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
          display: inline-flex; align-items: center; gap: 7px; cursor: pointer;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.18);
          color: #ffffff;
        }

        /* SECTIONS */
        .section {
          padding: 80px 36px; max-width: 860px; margin: 0 auto;
        }
        .section-header {
          margin-bottom: 32px;
        }
        .section-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #787887;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;
        }
        .section-title {
          font-size: 28px; font-weight: 600;
          letter-spacing: -0.02em; color: #ffffff; margin-bottom: 8px;
        }
        .section-desc {
          color: #828292; font-size: 14px; max-width: 580px;
        }

        /* GITHUB SYNC STATUS */
        .sync-row {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 24px; padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          flex-wrap: wrap; gap: 10px; font-size: 12px; color: #787887;
          font-family: 'JetBrains Mono', monospace;
        }
        .sync-left { display: flex; align-items: center; gap: 8px; }
        .sync-refresh-btn {
          background: none; border: 1px solid rgba(255, 255, 255, 0.08);
          color: #8e8e9e; padding: 4px 10px; border-radius: 5px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          transition: border-color 0.15s, color 0.15s;
        }
        .sync-refresh-btn:hover { border-color: rgba(255, 255, 255, 0.2); color: #ffffff; }

        /* FILTERS & SEARCH */
        .filter-row {
          display: flex; justify-content: space-between; align-items: center;
          gap: 12px; margin-bottom: 28px; flex-wrap: wrap;
        }
        .filter-tabs { display: flex; gap: 6px; flex-wrap: wrap; }
        .filter-tab {
          font-size: 12px; padding: 6px 12px; border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: transparent; color: #787887; cursor: pointer;
          transition: all 0.15s;
        }
        .filter-tab:hover { color: #d1d1dc; border-color: rgba(255, 255, 255, 0.14); }
        .filter-tab.active {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff; border-color: rgba(255, 255, 255, 0.2);
        }

        .search-wrap { position: relative; width: 100%; max-width: 240px; }
        .search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          padding: 6px 10px 6px 30px;
          color: #ececf1; font-size: 12px; outline: none;
          transition: border-color 0.15s;
        }
        .search-input:focus { border-color: rgba(255, 255, 255, 0.25); }
        .search-icon {
          position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
          color: #555562; pointer-events: none;
        }

        /* PROJECT CARDS */
        .projects-list { display: flex; flex-direction: column; gap: 16px; }
        .project-card {
          background: #0e0e11;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px; padding: 24px 26px;
          transition: border-color 0.2s ease;
        }
        .project-card:hover {
          border-color: rgba(255, 255, 255, 0.18);
        }
        .project-top {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 16px; margin-bottom: 8px; flex-wrap: wrap;
        }
        .project-title-group { display: flex; align-items: baseline; gap: 10px; flex-wrap: wrap; }
        .project-title { font-size: 18px; font-weight: 600; color: #ffffff; }
        .project-live-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; color: #22c55e;
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.2);
          padding: 2px 7px; border-radius: 4px;
        }
        .project-links { display: flex; align-items: center; gap: 8px; }
        .link-live {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; font-weight: 500; color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 4px 10px; border-radius: 5px;
          text-decoration: none; transition: background 0.15s;
        }
        .link-live:hover { background: rgba(255, 255, 255, 0.15); }
        .link-code {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 12px; color: #8e8e9e;
          padding: 4px 8px; border-radius: 5px;
          text-decoration: none; transition: color 0.15s;
        }
        .link-code:hover { color: #ffffff; }

        .project-tagline {
          font-size: 13px; color: #787887; margin-bottom: 12px;
        }
        .project-desc {
          font-size: 14px; color: #9a9aa8; line-height: 1.6; margin-bottom: 16px;
        }

        .architecture-box {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-left: 2px solid #525263;
          border-radius: 4px; padding: 10px 14px;
          font-size: 13px; color: #8e8e9e; line-height: 1.55;
          margin-bottom: 14px;
        }
        .architecture-label {
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          color: #d1d1dc; text-transform: uppercase; letter-spacing: 0.06em;
          margin-bottom: 2px;
        }
        .btn-modal-trigger {
          background: none; border: none; color: #d1d1dc;
          font-family: 'JetBrains Mono', monospace; font-size: 11px;
          cursor: pointer; padding: 0; margin-top: 6px;
          display: inline-flex; align-items: center; gap: 4px;
          transition: color 0.15s;
        }
        .btn-modal-trigger:hover { color: #ffffff; text-decoration: underline; }

        .tools-list { display: flex; flex-wrap: wrap; gap: 6px; }
        .tool-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #8e8e9e;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 2px 8px; border-radius: 4px;
        }

        /* ABOUT */
        .about-grid { display: grid; grid-template-columns: 1.3fr 0.9fr; gap: 44px; align-items: start; }
        .about-text p { color: #9494a4; line-height: 1.75; margin-bottom: 16px; font-size: 15px; }
        .about-text strong { color: #ececf1; font-weight: 500; }
        .info-card {
          background: #0e0e11;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px; padding: 20px 22px;
        }
        .info-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 10px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 13px;
        }
        .info-row:last-child { border-bottom: none; }
        .info-label { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #717180; }
        .info-value { color: #ececf1; }
        .info-value a { color: #ececf1; text-decoration: none; }
        .info-value a:hover { text-decoration: underline; }

        /* SKILLS */
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .skill-box {
          background: #0e0e11;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px; padding: 18px;
        }
        .skill-group-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; color: #717180;
          letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;
        }
        .skill-items { display: flex; flex-wrap: wrap; gap: 6px; }
        .skill-pill {
          font-size: 12px; color: #d1d1dc;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 4px 9px; border-radius: 5px;
        }

        /* CONTACT */
        .contact-card {
          background: #0e0e11;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px; padding: 36px 32px;
        }
        .contact-card h2 { font-size: 24px; font-weight: 600; color: #fff; margin-bottom: 10px; }
        .contact-card p { color: #8e8e9e; font-size: 14px; max-width: 500px; margin-bottom: 24px; line-height: 1.6; }
        .contact-actions { display: flex; gap: 10px; flex-wrap: wrap; }

        /* MODAL */
        .modal-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }
        .modal-card {
          background: #111115;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px; max-width: 580px; width: 100%;
          max-height: 85vh; overflow-y: auto;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
          padding: 28px; position: relative;
        }
        .modal-close-btn {
          position: absolute; top: 20px; right: 20px;
          background: none; border: none; color: #787887;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          padding: 4px; border-radius: 4px; transition: color 0.15s;
        }
        .modal-close-btn:hover { color: #ffffff; }
        .modal-title { font-size: 20px; font-weight: 600; color: #fff; margin-bottom: 4px; }
        .modal-tagline { font-size: 13px; color: #787887; margin-bottom: 20px; }
        .modal-section { margin-bottom: 18px; }
        .modal-section-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; text-transform: uppercase; color: #8e8e9e;
          letter-spacing: 0.06em; margin-bottom: 6px;
        }
        .modal-body-text { color: #a4a4b2; font-size: 13.5px; line-height: 1.65; }

        /* FOOTER */
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 32px 36px; max-width: 860px; margin: 40px auto 0;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 12px; font-size: 12px; color: #5a5a68;
          font-family: 'JetBrains Mono', monospace;
        }

        @media (max-width: 768px) {
          .nav { padding: 0 20px; }
          .hero { padding: 100px 20px 40px; }
          .section { padding: 60px 20px; }
          .about-grid { grid-template-columns: 1fr; gap: 28px; }
          .footer { padding: 24px 20px; }
          .project-card { padding: 20px; }
        }
      `}</style>

      <div className="portfolio-wrap">
        {/* NAVIGATION */}
        <nav ref={navRef} className="nav">
          <a href="#hero" className="nav-logo">
            Johnpaul Akhator
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
          </ul>
        </nav>

        {/* HERO */}
        <section id="hero">
          <div className="hero">
            <div className="hero-top">
              <span className="status-badge">
                <span className="status-dot" />
                Available for internships &amp; co-op
              </span>
              <span style={{ fontSize: 12, color: "#6e6e7d", fontFamily: "'JetBrains Mono', monospace" }}>
                Charlottetown, PEI, Canada
              </span>
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m Johnpaul Akhator.
            </h1>

            <p className="hero-bio">
              Computer Science student at the <strong>University of Prince Edward Island</strong>. 
              I build web applications, backend APIs, and applied machine learning projects.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View Projects ({projects.length})
              </a>
              <button onClick={handleCopyEmail} className="btn-secondary">
                {copiedEmail ? <IconCheck /> : <IconCopy />}
                {copiedEmail ? "Copied" : "Copy Email"}
              </button>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <IconGitHub /> GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <IconLinkedIn /> LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="section">
            <div className="section-header">
              <p className="section-eyebrow">Projects</p>
              <h2 className="section-title">Selected Work</h2>
              <p className="section-desc">
                Applications and tools I&apos;ve built, synced directly from my GitHub with architecture notes and live deployments.
              </p>
            </div>

            {/* SYNC STATUS ROW */}
            <div className="sync-row">
              <div className="sync-left">
                <span style={{ color: "#22c55e" }}>●</span>
                <span>
                  {syncSource === "github"
                    ? `Synced with GitHub @datnaijakid (${lastSynced || "just now"})`
                    : "Using cached project data"}
                </span>
                <span>• {projects.length} repositories</span>
              </div>
              <button
                onClick={() => fetchGitHubProjects(true)}
                className="sync-refresh-btn"
                disabled={loading}
                title="Refresh project list from GitHub"
              >
                <IconRefresh spinning={loading} />
                {loading ? "Refreshing..." : "Refresh"}
              </button>
            </div>

            {/* FILTERS & SEARCH */}
            <div className="filter-row">
              <div className="filter-tabs">
                {["All", "Full-Stack & Web", "Machine Learning & Data"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`filter-tab ${selectedCategory === cat ? "active" : ""}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="search-wrap">
                <span className="search-icon"><IconSearch /></span>
                <input
                  type="text"
                  placeholder="Search projects or tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {/* PROJECTS LIST */}
            <div className="projects-list">
              {filteredProjects.map((p) => (
                <div key={p.id} className="project-card">
                  <div className="project-top">
                    <div className="project-title-group">
                      <h3 className="project-title">{p.title}</h3>
                      {p.live && <span className="project-live-pill">Live Demo</span>}
                    </div>

                    <div className="project-links">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-live"
                        >
                          Live Site <IconExternalLink />
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-code"
                        >
                          <IconGitHub /> Code
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-tagline">{p.tagline}</p>
                  <p className="project-desc">{p.description}</p>

                  <div className="architecture-box">
                    <div className="architecture-label">How it&apos;s built</div>
                    <div>{p.architecture}</div>
                    <button
                      onClick={() => setActiveModalProject(p)}
                      className="btn-modal-trigger"
                    >
                      Technical Details →
                    </button>
                  </div>

                  <div className="tools-list">
                    {p.tools.map((t) => (
                      <span key={t} className="tool-tag">
                        {t}
                      </span>
                    ))}
                    {p.updatedAt && (
                      <span
                        className="tool-tag"
                        style={{ marginLeft: "auto", color: "#5a5a68", border: "none" }}
                      >
                        Updated {p.updatedAt}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <div style={{ textAlign: "center", padding: "40px 0", color: "#787887" }}>
                  <p>No projects match your filter query.</p>
                  <button
                    onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                    className="btn-secondary"
                    style={{ marginTop: 12 }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* TECHNICAL DETAILS MODAL */}
        {activeModalProject && (
          <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveModalProject(null)}
                className="modal-close-btn"
                aria-label="Close"
              >
                <IconClose />
              </button>

              <h3 className="modal-title">{activeModalProject.title}</h3>
              <p className="modal-tagline">{activeModalProject.tagline}</p>

              <div className="modal-section">
                <div className="modal-section-title">Overview</div>
                <p className="modal-body-text">{activeModalProject.description}</p>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">Architecture &amp; Data Flow</div>
                <p className="modal-body-text">{activeModalProject.architecture}</p>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">Technologies Used</div>
                <div className="tools-list" style={{ marginTop: 8 }}>
                  {activeModalProject.tools.map((t) => (
                    <span key={t} className="tool-tag" style={{ color: "#d1d1dc", padding: "4px 10px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                {activeModalProject.live && (
                  <a
                    href={activeModalProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Visit Live Site <IconExternalLink />
                  </a>
                )}
                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <IconGitHub /> View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ABOUT */}
        <section id="about">
          <div className="section">
            <div className="section-header">
              <p className="section-eyebrow">Background</p>
              <h2 className="section-title">About Me</h2>
            </div>

            <div className="about-grid">
              <div className="about-text">
                <p>
                  I&apos;m a Computer Science student at the <strong>University of Prince Edward Island</strong> in Charlottetown, Canada, originally from Nigeria.
                </p>
                <p>
                  I enjoy writing code across the stack—from clean, responsive user interfaces with React and Next.js, to reliable backend services with Python, FastAPI, and PostgreSQL. I also build data science and machine learning projects using Pandas and Scikit-learn.
                </p>
                <p>
                  I like building practical tools that solve real issues for everyday use. When I&apos;m not studying or building projects, I follow European football and keep up with software engineering discussions.
                </p>
              </div>

              <div className="info-card">
                {[
                  { label: "Degree", value: "BSc Computer Science" },
                  { label: "University", value: "UPEI (Canada)" },
                  { label: "Location", value: "Charlottetown, PEI" },
                  { label: "Focus", value: "Full-Stack & Systems" },
                  {
                    label: "GitHub",
                    value: (
                      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                        @datnaijakid
                      </a>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    value: (
                      <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        johnpaul-akhator
                      </a>
                    ),
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="info-row">
                    <span className="info-label">{label}</span>
                    <span className="info-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="section">
            <div className="section-header">
              <p className="section-eyebrow">Skills</p>
              <h2 className="section-title">Technical Skills</h2>
            </div>

            <div className="skills-grid">
              {[
                {
                  category: "Languages",
                  items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "HTML/CSS"],
                },
                {
                  category: "Frontend",
                  items: ["React", "Next.js", "Vite", "Tailwind CSS", "Expo / React Native"],
                },
                {
                  category: "Backend & DB",
                  items: ["FastAPI", "Node.js", "Express", "Flask", "PostgreSQL (Neon)", "Prisma ORM"],
                },
                {
                  category: "Machine Learning & Tools",
                  items: ["Scikit-Learn", "Pandas", "NumPy", "XGBoost", "Git", "GitHub", "Vercel", "Linux"],
                },
              ].map(({ category, items }) => (
                <div key={category} className="skill-box">
                  <div className="skill-group-title">{category}</div>
                  <div className="skill-items">
                    {items.map((s) => (
                      <span key={s} className="skill-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="section">
            <div className="contact-card">
              <h2>Get in Touch</h2>
              <p>
                I&apos;m currently open to internship and junior software engineering roles. 
                Whether you have an opening, want to discuss a project, or just say hello, 
                feel free to reach out.
              </p>

              <div className="contact-actions">
                <a href={`mailto:${EMAIL_ADDRESS}`} className="btn-primary">
                  <IconMail /> Send Email ({EMAIL_ADDRESS})
                </a>
                <button onClick={handleCopyEmail} className="btn-secondary">
                  {copiedEmail ? <IconCheck /> : <IconCopy />}
                  {copiedEmail ? "Copied" : "Copy Email"}
                </button>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <IconLinkedIn /> LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <IconGitHub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div>© {new Date().getFullYear()} Johnpaul Akhator</div>
          <div>Built with Next.js &amp; TypeScript</div>
        </footer>
      </div>
    </>
  );
}