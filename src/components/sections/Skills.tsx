"use client";
import { motion } from "framer-motion";
import { Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="text-indigo-400" size={24} />,
      skills: ["Python", "Node.js", "Express", "RESTful APIs", "System Architecture"]
    },
    {
      title: "Data & Analytics",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["Python", "Pandas", "Data Engineering", "Data Automation", "Data Cleansing"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="text-emerald-400" size={24} />,
      skills: ["Git", "GitHub", "Vercel", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="w-full py-24 scroll-mt-20 relative">
      <div className="absolute inset-0 bg-zinc-900/30 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My toolbelt is constantly expanding. Here are the core technologies and concepts I use to bring ideas to life.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass p-8 rounded-2xl hover:bg-white/[0.02] transition-colors border-white/[0.05]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-200">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 text-sm">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-zinc-800/50 text-zinc-300 rounded-lg border border-zinc-700/50 hover:border-zinc-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
