"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <p className="font-mono text-accent text-xs tracking-widest mb-4">ABOUT ME</p>
          <h2 className="text-4xl font-bold text-light mb-6">
            Building software with purpose
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            I&apos;m Johnpaul Akhator, a Computer Science student with a strong interest in 
            full-stack development, algorithms, and building tools that solve real problems.
          </p>
          <p className="text-muted leading-relaxed">
            Currently studying CS and looking for opportunities to grow, contribute to meaningful 
            projects, and connect with people building the future.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { label: "Degree", value: "BSc Computer Science" },
            { label: "Focus", value: "Full-Stack Development" },
            { label: "Available", value: "Open to internships & roles" },
            { label: "Location", value: "Nigeria" },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between border-b border-border pb-4">
              <span className="text-muted text-sm font-mono">{label}</span>
              <span className="text-light text-sm">{value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}