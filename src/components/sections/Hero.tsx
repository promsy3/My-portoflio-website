"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="flex flex-col md:flex-row items-center gap-12 sm:gap-20 w-full">
        <motion.div 
          className="flex-1 space-y-8 mt-10 md:mt-0 text-center md:text-left z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            I build <span className="text-gradient">scalable backend systems</span> & intelligent data solutions.
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto md:mx-0">
            Hi, I&apos;m Promise Kamsy. A Backend Developer and Data Analyst bridging the gap between robust system architecture and data-driven insights.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link 
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
        
        {/* Abstract Data Visual or Image Placeholder */}
        <motion.div 
          className="flex-1 w-full max-w-md hidden lg:block z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square rounded-full glass border border-white/10 flex items-center justify-center p-8">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-transparent flex items-center justify-center blur-sm relative animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-x-0 w-3/4 h-3/4 m-auto rounded-full border border-white/10 flex items-center justify-center bg-background/50 backdrop-blur-sm">
                <span className="text-4xl">💻 📊</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
