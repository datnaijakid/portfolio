"use client";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="font-mono text-accent text-sm tracking-widest mb-4">Hi, I&apos;m</p>
        <h1 className="text-6xl md:text-8xl font-bold text-light leading-none mb-4">
          Johnpaul<br />
          <span className="text-muted">Akhator</span>
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-xl mt-6 mb-10 leading-relaxed">
          Computer Science student passionate about building things that live on the internet. 
          From backend systems to polished frontends.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="bg-accent hover:bg-accent-dim text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://www.linkedin.com/in/johnpaul-akhator-39150a314"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-light transition-colors text-sm"
          >
            <ExternalLink size={16} /> LinkedIn
          </a>
          <a
            href="https://github.com/datnaijakid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted hover:text-light transition-colors text-sm"
          >
            <ExternalLink size={16} /> GitHub
          </a>
        </div>
      </motion.div>
      <motion.div
        className="mt-24 flex items-center gap-2 text-muted text-xs font-mono"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={14} /> scroll down
      </motion.div>
    </section>
  );
}