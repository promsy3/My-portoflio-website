"use client";
import { motion } from "framer-motion";
import { Terminal, Database, Code2 } from "lucide-react";

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
              I am a <strong className="text-zinc-200">Backend Developer</strong> transitioning into the world of <strong className="text-zinc-200">Data Engineering and Data Science</strong>. My journey started with building APIs and web services using Python and Node.js, where I developed a passion for system architecture, database optimization, and performance scaling.
            </p>
            <p>
              Along the way, I became fascinated by the data itself. How it flows, how it&apos;s structured, and how it can be leveraged to drive intelligence. This led me to dive deep into Python, Pandas, and data pipeline automation.
            </p>
            <p>
              My ultimate career goal is to become an expert Data Engineer who understands both the application backend and the robust data infrastructures. I strive to build scalable systems that not only serve users quickly but also process and maintain high-quality data.
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
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Backend Systems</h3>
            <p className="text-zinc-400 text-sm">Designing resilient architectures and robust RESTful APIs.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 sm:translate-y-8 hover:bg-white/[0.05] transition-colors">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Data Quality</h3>
            <p className="text-zinc-400 text-sm">Ensuring integrity, cleansing, and validating data pipelines.</p>
          </div>
          <div className="glass p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/[0.05] transition-colors sm:col-span-2 mt-0 sm:mt-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-200">Continuous Learning</h3>
            <p className="text-zinc-400 text-sm">Constantly evolving my skill set bridging the software engineering and data science divide.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
