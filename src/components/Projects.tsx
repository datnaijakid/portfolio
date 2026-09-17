"use client";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { FALLBACK_PROJECTS } from "@/data/projectsFallback";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-accent text-xs tracking-widest mb-4">WORK</p>
        <h2 className="text-4xl font-bold text-light mb-14">Selected Projects</h2>
        <div className="space-y-6">
          {FALLBACK_PROJECTS.slice(0, 4).map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-surface border border-border rounded-xl p-8 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-light">{p.title}</h3>
                  <p className="text-sm text-accent/80 font-mono mt-1">{p.tagline}</p>
                </div>
                <div className="flex gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-light transition-colors">
                      <Code size={18} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-light transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tools.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}