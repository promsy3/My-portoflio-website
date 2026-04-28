"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6">
            <MessageSquare size={16} /> Let&apos;s Connect
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to build <span className="text-gradient">together?</span>
          </h2>
          
          <p className="text-zinc-400 text-lg mb-10">
            Whether you have a question, a project idea, or just want to chat about backend systems and data analysis, my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:promisekamsy3@gmail.com" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              <Mail size={18} />
              Say Hello
            </a>
            
            <a 
              href="https://linkedin.com/in/promise-kamsy-139241315" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors border-white/10"
            >
              <FiLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
