"use client";
import { motion } from "framer-motion";
import { ExternalLink, Activity } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Automated Data Quality Firewall",
      category: "Data Engineering & Backend",
      description: "A comprehensive system designed to automatically validate, clean, and monitor incoming data pipelines. It acts as an active firewall—detecting anomalies, enforcing rigorous data quality rules, and proactively preventing corrupted or dirty data from entering internal production databases.",
      impact: "Significantly improved data reliability and prevented downstream application failures by dynamically intercepting erratic datasets before they propagate.",
      tech: ["Python", "Pandas", "Node.js", "Data Engineering", "Automation"],
      github: "https://github.com/promsy3", // Placeholder for actual link
      demo: "#",
      mockup: (
        <>
          <p><span className="text-indigo-400">INFO</span> [Firewall]: Starting pipeline interceptor...</p>
          <p><span className="text-emerald-400">SUCCESS</span> Connected to datalake cluster</p>
          <p><span className="text-yellow-400">WARN</span> Detected anomaly in dataset batch_89A</p>
          <p className="text-zinc-500">{">>"} Executing cleansing ruleset...</p>
          <p><span className="text-emerald-400">SUCCESS</span> Cleansed 4,204 faulty rows.</p>
          <p className="text-zinc-500">{">>"} Forwarding payload.</p>
        </>
      )
    }
  ];

  return (
    <section id="projects" className="w-full py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Showcasing solutions built to solve real-world problems. Let the work speak.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative rounded-3xl glass overflow-hidden border border-white/10 flex flex-col lg:flex-row group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              {/* Decorative background glow inside card */}
              <div className="absolute -inset-10 bg-indigo-500/10 blur-[80px] -z-10 group-hover:bg-indigo-500/20 transition-all duration-500" />
              
              <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="text-indigo-400" size={20} />
                  <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6">
                  {project.title}
                </h3>
                
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-8">
                  <span className="block text-emerald-400 font-semibold mb-1 text-sm">Key Impact</span>
                  <p className="text-zinc-300 text-sm">
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                  >
                    <FiGithub size={18} />
                    Source Code
                  </a>
                </div>
              </div>
              
              {/* Aesthetic mockup side */}
              <div className="flex-1 bg-zinc-900/50 border-l border-white/5 flex items-center justify-center p-8 min-h-[300px]">
                <div className="w-full max-w-sm aspect-video rounded-xl bg-black/80 border border-white/10 flex flex-col overflow-hidden shadow-2xl relative group-hover:scale-105 transition-transform duration-500">
                  {/* Fake window top bar */}
                  <div className="h-8 bg-zinc-900 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  {/* Fake terminal code */}
                  <div className="p-4 font-mono text-xs text-zinc-400 flex flex-col gap-2 overflow-hidden h-full relative">
                    {project.mockup}
                    
                    {/* Glowing fade out at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
