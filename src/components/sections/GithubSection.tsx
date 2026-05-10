"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch slightly more so we have enough after filtering
        const res = await fetch("https://api.github.com/users/promsy3/repos?sort=updated&per_page=15");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        
        // Filter out noisy repositories and inject descriptions where needed
        const processedRepos = data.filter((repo: Repo) => {
          // Explicitly hide these repos
          if (repo.name === 'Promise3' || repo.name === 'Promise-') return false;
          
          // Always keep the Job Market Analyzer
          if (repo.name === 'Nigerian-Job-Market-Analyzer') return true;
          
          if (!repo.description) return false;
          
          const name = repo.name.toLowerCase();
          if (name.includes('practice') || name.includes('assignment') || name.includes('group')) return false;
          
          return true;
        }).map((repo: Repo) => {
          // Inject a description for the Job Market Analyzer since it's missing one on GitHub
          if (repo.name === 'Nigerian-Job-Market-Analyzer' && !repo.description) {
             return { ...repo, description: "A comprehensive data analysis pipeline uncovering insights, salary trends, and remote work patterns across the Nigerian tech ecosystem." };
          }
          return repo;
        }).slice(0, 6);

        setRepos(processedRepos);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Decorative gradient for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-indigo-500/5 blur-[120px] -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 flex items-center gap-3">
              <FiGithub className="text-zinc-400" size={32} />
              Open Source <span className="text-gradient">Activity</span>
            </h2>
            <p className="text-zinc-400">
              Recent repositories and contributions from my GitHub profile.
            </p>
          </div>
          <a 
            href="https://github.com/promsy3" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            View Full Profile <ExternalLink size={16} />
          </a>
        </div>

        {error ? (
          <div className="w-full p-8 text-center glass rounded-2xl">
            <p className="text-red-400">Unable to load repositories at the moment. Please check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading 
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="glass p-6 rounded-2xl animate-pulse">
                    <div className="h-6 bg-white/10 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-white/5 rounded w-full mb-2"></div>
                    <div className="h-4 bg-white/5 rounded w-5/6 mb-8"></div>
                    <div className="flex gap-4">
                      <div className="h-4 bg-white/10 rounded w-12"></div>
                      <div className="h-4 bg-white/10 rounded w-12"></div>
                    </div>
                  </div>
                ))
              : repos.map((repo, idx) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="glass p-6 rounded-2xl hover:bg-white/[0.05] transition-all hover:-translate-y-1 block group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-zinc-200 truncate pr-4 group-hover:text-indigo-400 transition-colors">
                        {repo.name}
                      </h3>
                      <ExternalLink size={18} className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2 h-10">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={14} /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={14} /> {repo.forks_count}
                      </span>
                    </div>
                  </motion.a>
                ))
            }
          </div>
        )}
      </div>
    </section>
  );
}
