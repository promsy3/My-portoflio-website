"use client";
import { motion } from "framer-motion";
import { Terminal, Database, Code2, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 px-4 py-8 items-center">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full mb-6" />
          
          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              I am a <strong className="text-zinc-200">Backend and Web Developer</strong> transitioning into the world of <strong className="text-zinc-200">Data Engineering and Data Science</strong>. My journey started with building APIs, web applications, and backend services using Python, Node.js, and modern web technologies. Through these experiences, I developed a passion for software architecture, database optimization, responsive web development, and building scalable digital solutions.
            </p>
            <p>
              My web development experience has strengthened my understanding of how applications work — from designing interactive user interfaces with HTML, CSS, and JavaScript to developing robust backend systems, integrating APIs, and managing databases. I enjoy building functional, user-friendly, and efficient web applications that solve real-world problems.
            </p>
            <p>
              Along the way, I became fascinated by the data itself: how it flows, how it&apos;s structured, and how it can be leveraged to drive intelligence. This curiosity led me to explore Python, Pandas, data analysis, and data pipeline automation, expanding my interests beyond traditional software development.
            </p>
            <p>
              My ultimate career goal is to become a well-rounded technology professional with expertise in <strong className="text-zinc-200">Web Development, Backend Engineering, and Data Engineering</strong>. I aspire to build scalable applications and intelligent systems that not only deliver excellent user experiences but also process, manage, and transform high-quality data into meaningful insights.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/[0.05] transition-colors">
            <div className="p-3 bg-sky-500/10 text-sky-400 rounded-xl">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Web Development</h3>
            <p className="text-zinc-400 text-sm">Building responsive, user-friendly interfaces and full-stack web applications.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 sm:translate-y-8 hover:bg-white/[0.05] transition-colors">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Backend Engineering</h3>
            <p className="text-zinc-400 text-sm">Designing resilient architectures, APIs, and scalable backend services.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/[0.05] transition-colors">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Data Engineering</h3>
            <p className="text-zinc-400 text-sm">Building data pipelines, automating workflows, and transforming raw data into insights.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 sm:translate-y-8 hover:bg-white/[0.05] transition-colors">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Continuous Learning</h3>
            <p className="text-zinc-400 text-sm">Constantly evolving across web, backend, and data engineering disciplines.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
