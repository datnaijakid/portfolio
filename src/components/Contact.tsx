"use client";
import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-mono text-accent text-xs tracking-widest mb-4">GET IN TOUCH</p>
        <h2 className="text-5xl md:text-6xl font-bold text-light mb-6">
          Let&apos;s connect
        </h2>
        <p className="text-muted max-w-md mx-auto mb-12 leading-relaxed">
          Open to internships, collaborations, and full-time opportunities. 
          My inbox is always open.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:jpakhator@upei.ca"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dim text-white px-8 py-4 rounded-lg transition-colors font-medium"
          >
            <Mail size={16} /> Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/johnpaul-akhator-39150a314"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border hover:border-accent/40 text-light px-8 py-4 rounded-lg transition-colors"
          >
            <ExternalLink size={16} /> LinkedIn
          </a>
        </div>
      </motion.div>
      <div className="mt-32 pt-8 border-t border-border text-center">
        <p className="text-muted font-mono text-xs">
          © {new Date().getFullYear()} Johnpaul Akhator
        </p>
      </div>
    </section>
  );
}