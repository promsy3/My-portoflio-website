"use client";
import { motion } from "framer-motion";
import { ExternalLink, Activity } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import React from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  impact?: string;
  findings?: string[];
  tech: string[];
  github: string;
  demo?: string;
  mockup: React.ReactNode;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Nigerian Job Market Analyzer",
      category: "Data Analysis",
      description: "Built a complete data analysis pipeline using Python and Pandas to collect, clean, and analyze 250 Nigerian tech job listings. Generated 6 interactive charts using Matplotlib and Seaborn covering skill demand, salary comparisons by role, job distribution by location, job types, top hiring companies, and experience level demand. Published findings as a professional Jupyter Notebook report.",
      findings: [
        "🔥 Most in-demand skill: SQL",
        "💰 Highest paying role: Machine Learning Engineer at ₦594,500/month",
        "📍 29.6% of jobs are fully remote",
        "🏢 Most active employer: Paystack",
        "📋 Contract roles dominate the market"
      ],
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Google Colab", "Jupyter Notebook"],
      github: "https://github.com/promsy3/Nigerian-Job-Market-Analyzer",
      demo: "https://colab.research.google.com/drive/16iXtquyU9T5etu8eTsu_szMInwo2MNa5?usp=sharing",
      mockup: (
        <div className="w-full h-full flex flex-col justify-center p-6 bg-zinc-900/50 text-white relative">
          <h4 className="text-sm font-semibold text-zinc-300 mb-6 text-center tracking-wide">Job Distribution by Location</h4>
          <div className="space-y-4 w-full max-w-[280px] mx-auto">
            {/* Remote */}
            <div className="flex items-center gap-3">
              <span className="w-24 text-xs text-zinc-400 text-right">Remote</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '29.6%' }} transition={{ duration: 1 }} className="h-full bg-emerald-500 rounded-full" />
              </div>
              <span className="w-10 text-[10px] text-emerald-400 font-mono">29.6%</span>
            </div>
            {/* Enugu */}
            <div className="flex items-center gap-3">
              <span className="w-24 text-xs text-zinc-400 text-right">Enugu</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '14.0%' }} transition={{ duration: 1, delay: 0.1 }} className="h-full bg-blue-500 rounded-full" />
              </div>
              <span className="w-10 text-[10px] text-blue-400 font-mono">14.0%</span>
            </div>
            {/* Ibadan */}
            <div className="flex items-center gap-3">
              <span className="w-24 text-xs text-zinc-400 text-right">Ibadan</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '12.4%' }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-indigo-400 rounded-full" />
              </div>
              <span className="w-10 text-[10px] text-indigo-400 font-mono">12.4%</span>
            </div>
            {/* Kano */}
            <div className="flex items-center gap-3">
              <span className="w-24 text-xs text-zinc-400 text-right">Kano</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '12.0%' }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-orange-500 rounded-full" />
              </div>
              <span className="w-10 text-[10px] text-orange-400 font-mono">12.0%</span>
            </div>
            {/* Abuja */}
            <div className="flex items-center gap-3">
              <span className="w-24 text-xs text-zinc-400 text-right">Abuja</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '11.6%' }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-yellow-500 rounded-full" />
              </div>
              <span className="w-10 text-[10px] text-yellow-400 font-mono">11.6%</span>
            </div>
            {/* Port Harcourt */}
            <div className="flex items-center gap-3">
              <span className="w-24 text-xs text-zinc-400 text-right">Port Harcourt</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '10.8%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-green-500 rounded-full" />
              </div>
              <span className="w-10 text-[10px] text-green-400 font-mono">10.8%</span>
            </div>
            {/* Lagos */}
            <div className="flex items-center gap-3">
              <span className="w-24 text-xs text-zinc-400 text-right">Lagos</span>
              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '9.6%' }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-pink-500 rounded-full" />
              </div>
              <span className="w-10 text-[10px] text-pink-400 font-mono">9.6%</span>
            </div>
          </div>
        </div>
      )
    },
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
    },
    {
      title: "Marprom Stores",
      category: "Full-Stack E-Commerce",
      description: "A full-stack e-commerce web application for premium organic apparel and accessories. Features a dynamic frontend, a Node.js/Express serverless backend, a MongoDB Atlas database, and seamless WhatsApp checkout integration to streamline the ordering process.",
      impact: "Provided a premium shopping experience and streamlined the customer checkout process through direct WhatsApp integration, catering perfectly to localized market convenience.",
      tech: ["HTML/CSS", "JavaScript", "Node.js", "Express", "MongoDB", "WhatsApp API"],
      github: "https://github.com/promsy3/marprom-stores",
      demo: "https://marprom-stores.vercel.app",
      mockup: (
        <div className="w-full h-full flex flex-col justify-center gap-3 p-2">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-md bg-zinc-800 shrink-0" />
            <div className="flex-1">
              <div className="h-2 w-20 bg-zinc-600 rounded mb-2" />
              <div className="h-2 w-12 bg-emerald-500/50 rounded" />
            </div>
            <div className="h-6 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-medium">
              Added
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-md bg-zinc-800 shrink-0" />
            <div className="flex-1">
              <div className="h-2 w-24 bg-zinc-600 rounded mb-2" />
              <div className="h-2 w-16 bg-emerald-500/50 rounded" />
            </div>
            <div className="h-6 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-medium">
              Added
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center px-1">
            <span className="text-zinc-400">Total:</span>
            <span className="text-emerald-400 font-bold">$124.99</span>
          </div>
          <button className="w-full mt-2 py-2 rounded-lg bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-medium flex items-center justify-center gap-2">
            Checkout via WhatsApp
          </button>
        </div>
      )
    },
    {
      title: "Codveda Internship Tasks",
      category: "Data Analytics & EDA",
      description: "Data Analytics projects and technical tasks completed during my internship at Codveda Technologies. The work heavily focused on Exploratory Data Analysis (EDA), extensive data cleaning, and creating insightful visualizations to drive data-informed decisions.",
      findings: [
        "🧹 Completed robust data cleaning pipelines to ensure high data integrity.",
        "📊 Conducted comprehensive Exploratory Data Analysis (EDA) on real-world datasets.",
        "📈 Built dynamic visual reports to uncover hidden trends and patterns.",
        "🐍 Leveraged Python ecosystems for end-to-end data processing."
      ],
      tech: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/promsy3/Codveda-Internship-Tasks",
      mockup: (
        <>
          <p><span className="text-blue-400">import</span> pandas <span className="text-blue-400">as</span> pd</p>
          <p><span className="text-blue-400">import</span> seaborn <span className="text-blue-400">as</span> sns</p>
          <p className="text-zinc-500 mt-2"># Clean missing values</p>
          <p>df.dropna(inplace=<span className="text-purple-400">True</span>)</p>
          <p>df[<span className="text-green-400">'Revenue'</span>] = pd.to_numeric(df[<span className="text-green-400">'Revenue'</span>])</p>
          <p className="text-zinc-500 mt-2"># Generate correlation heatmap</p>
          <p>correlation_matrix = df.corr()</p>
          <p>sns.heatmap(correlation_matrix, annot=<span className="text-purple-400">True</span>)</p>
          <p className="text-zinc-400 mt-2">{">>"} Rendering visualization...</p>
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
          <p className="text-zinc-400 max-w-2xl mb-8">
            Showcasing solutions built to solve real-world problems. Let the work speak.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {projects.map((project, index) => (
              <a 
                href={`#project-${index}`} 
                key={`outline-${index}`}
                className="p-4 rounded-xl glass border border-white/10 hover:bg-white/5 transition-colors flex flex-col gap-2 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 font-mono text-sm">
                    {index + 1}
                  </div>
                  <h4 className="text-white font-medium group-hover:text-indigo-400 transition-colors">{project.title}</h4>
                </div>
                <div className="pl-11">
                  <span className="text-indigo-400/80 text-xs font-semibold uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <p className="text-zinc-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              id={`project-${index}`}
              className="relative rounded-3xl glass overflow-hidden border border-white/10 flex flex-col lg:flex-row group scroll-mt-24"
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
                
                {project.impact && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-8">
                    <span className="block text-emerald-400 font-semibold mb-1 text-sm">Key Impact</span>
                    <p className="text-zinc-300 text-sm">
                      {project.impact}
                    </p>
                  </div>
                )}

                {project.findings && (
                  <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 mb-8">
                    <span className="block text-indigo-400 font-semibold mb-2 text-sm">Key Findings</span>
                    <ul className="text-zinc-300 text-sm space-y-1">
                      {project.findings.map((finding, idx) => (
                        <li key={idx}>{finding}</li>
                      ))}
                    </ul>
                  </div>
                )}

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

                <div className="flex flex-wrap gap-4 items-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                  >
                    <FiGithub size={18} />
                    Source Code
                  </a>
                  {project.demo && project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 border border-white/10 text-white font-semibold rounded-full hover:bg-zinc-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
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
