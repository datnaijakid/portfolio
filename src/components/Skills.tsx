"use client";
import { motion } from "framer-motion";

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  Backend: ["Node.js", "Flask", "Express", "REST APIs"],
  Tools: ["Git", "GitHub", "PostgreSQL", "MySQL", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-accent text-xs tracking-widest mb-4">STACK</p>
        <h2 className="text-4xl font-bold text-light mb-14">Skills & Tools</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-muted font-mono text-xs tracking-widest mb-4">{category.toUpperCase()}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-light border border-border px-4 py-2 rounded-lg hover:border-accent/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}