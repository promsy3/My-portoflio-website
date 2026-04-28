import Link from "next/link";
import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            P<span className="text-indigo-400">K.</span>
          </Link>
          <p className="text-zinc-500 text-sm mt-2">
            © {new Date().getFullYear()} Promise Kamsy. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/promsy3" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/promise-kamsy-139241315" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:promisekamsy3@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
