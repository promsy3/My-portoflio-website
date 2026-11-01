"use client";
import { motion } from "framer-motion";
import { Briefcase, Globe, Database } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Backend & Web Developer",
      company: "Freelance & Client Projects",
      period: "2023 - Present",
      description: "Architecting and developing responsive full-stack applications and robust backend services. Designing relational and NoSQL databases, building RESTful APIs, and delivering client solutions including legal practice management software (RedScroller V1) and e-commerce platforms with automated WhatsApp checkout (Marprom Stores).",
      skills: ["Next.js", "NestJS", "Node.js", "Express", "PostgreSQL", "MongoDB", "TypeScript"],
      icon: <Briefcase size={20} className="text-indigo-400" />
    },
    {
      title: "Web Developer",
      company: "Streams of Joy Owerri",
      period: "2024",
      description: "Designed and built a dedicated digital media hub for the media ministry. Created responsive interfaces to streamline service video archiving, facilitate broadcast access, and manage weekly bulletin distributions for the congregation.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      icon: <Globe size={20} className="text-sky-400" />
    },
    {
      title: "Data Engineering & Analytics",
      company: "Self-Directed & Project Research",
      period: "2024 - Present",
      description: "Deepening expertise in Python, Pandas, data extraction, and pipeline automation. Engineered the Nigerian Job Market Analyzer to ingest, clean, and visualize compensation and skill demand patterns across key technology hubs in Nigeria.",
      skills: ["Python", "Pandas", "Data Pipelines", "Data Extraction", "Data Cleaning", "Analytics"],
      icon: <Database size={20} className="text-emerald-400" />
    }
  ];

  return (
    <section id="experience" className="w-full py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Experience & <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            My professional journey across full-stack web development, backend architectures, and data engineering.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-6 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[39px] p-2 rounded-full glass bg-background">
                {exp.icon}
              </div>
              
              <div className="glass p-6 rounded-2xl hover:bg-white/[0.02] transition-colors border-white/[0.05]">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-zinc-200">{exp.title}</h3>
                <h4 className="text-indigo-400 text-sm font-medium mb-3">{exp.company}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.05]">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10 font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
