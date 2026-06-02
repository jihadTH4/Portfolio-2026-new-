import { motion } from "motion/react";
import { Cpu, Layout, Layers, Terminal, Grid3X3, Brush, GitBranch, Server, Database, Code, Sparkles } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export function Skills() {
  const { t } = useLanguage();

  const skills = [
    { name: "HTML5", icon: Cpu },
    { name: "CSS3", icon: Brush },
    { name: "JAVASCRIPT", icon: Terminal },
    { name: "REACT", icon: Layers },
    { name: "TAILWIND", icon: Layout },
    { name: "SASS/SCSS", icon: Grid3X3 },
    { name: "GIT / GITHUB", icon: GitBranch },
    { name: "DJANGO", icon: Server },
    { name: "PYTHON", icon: Code },
    { name: "SQL", icon: Database },
    { name: "GOOD USE OF AI TOOLS", icon: Sparkles },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="skills">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="font-mono text-sm text-secondary-container tracking-[0.3em] uppercase mb-4">{t.expertise.title}</span>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold">{t.expertise.sub}</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.07, 0.5) }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass p-8 flex flex-col items-center text-center gap-4 group shimmer-mask"
          >
            <div className="w-12 h-12 flex items-center justify-center text-secondary-container">
              <skill.icon className="w-10 h-10" />
            </div>
            <span className="font-mono text-xs font-bold tracking-widest">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
