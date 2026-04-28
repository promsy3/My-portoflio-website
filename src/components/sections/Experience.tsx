"use client";
import { motion } from "framer-motion";
import { Briefcase, BookOpen } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Freelance & Open Source",
      period: "2023 - Present",
      description: "Building scalable backend services using Python, Node.js, and Express. Leading database design and architecture for various client projects.",
      icon: <Briefcase size={20} className="text-indigo-400" />
    },
    {
      title: "Aspiring Data Analyst / Data Engineer",
      company: "Self-Directed Learning",
      period: "Ongoing",
      description: "Deep diving into Python, Pandas, and Data Engineering concepts. Architected an automated Data Quality Firewall to intercept and sanitize pipeline data natively.",
      icon: <BookOpen size={20} className="text-emerald-400" />
    }
  ];

  return (
    <section id="experience" className="w-full py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Experience & <span className="text-gradient">Learning</span>
          </h2>
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
                <h4 className="text-indigo-400 text-sm font-medium mb-4">{exp.company}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
