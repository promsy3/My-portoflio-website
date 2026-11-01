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

const REPO_METADATA: Record<string, { description: string; language?: string; priority: number }> = {
  "Red-Scroller-V1": {
    description: "A modern legal practice management system built for law firms to streamline case tracking, client management, and document workflows.",
    language: "TypeScript",
    priority: 1
  },
  "Nigerian-Job-Market-Analyzer": {
    description: "A comprehensive data analysis pipeline analyzing 1,000+ tech roles to reveal salary trends, skill demands, and tech hub patterns across Nigeria.",
    language: "Python",
    priority: 2
  },
  "marprom-stores": {
    description: "Full-stack e-commerce web application featuring a dynamic catalog, Express serverless backend, MongoDB, and automated WhatsApp checkout.",
    language: "JavaScript",
    priority: 3
  },
  "streams-of-joy-owerri": {
    description: "Centralized digital media hub built for Streams of Joy Owerri to archive service media, streamline broadcast access, and manage weekly bulletins.",
    language: "JavaScript",
    priority: 4
  },
  "data-quality-firewall": {
    description: "Automated data ingestion and validation engine built in Python to intercept, sanitize, and verify pipeline records for data warehouse integrity.",
    language: "Python",
    priority: 5
  },
  "My-portoflio-website": {
    description: "Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion showcasing web, backend, and data engineering projects.",
    language: "TypeScript",
    priority: 6
  }
};

const EXCLUDED_REPOS = new Set([
  "Promise3",
  "Promise-",
  "soe-405-group-16",
  "git-practice",
  "Task-1-Promisekamsy",
  "Task-2-Promise-kamsy",
  "Task-3-Promise-kamsy",
  "Data-Analytics-Bootcamp-Certification"
]);

const FALLBACK_REPOS: Repo[] = [
  {
    id: 1,
    name: "Red-Scroller-V1",
    description: "A modern legal practice management system built for law firms to streamline case tracking, client management, and document workflows.",
    html_url: "https://github.com/promsy3/Red-Scroller-V1",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript"
  },
  {
    id: 2,
    name: "Nigerian-Job-Market-Analyzer",
    description: "A comprehensive data analysis pipeline analyzing 1,000+ tech roles to reveal salary trends, skill demands, and tech hub patterns across Nigeria.",
    html_url: "https://github.com/promsy3/Nigerian-Job-Market-Analyzer",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python"
  },
  {
    id: 3,
    name: "marprom-stores",
    description: "Full-stack e-commerce web application featuring a dynamic catalog, Express serverless backend, MongoDB, and automated WhatsApp checkout.",
    html_url: "https://github.com/promsy3/marprom-stores",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript"
  },
  {
    id: 4,
    name: "streams-of-joy-owerri",
    description: "Centralized digital media hub built for Streams of Joy Owerri to archive service media, streamline broadcast access, and manage weekly bulletins.",
    html_url: "https://github.com/promsy3/streams-of-joy-owerri",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript"
  },
  {
    id: 5,
    name: "data-quality-firewall",
    description: "Automated data ingestion and validation engine built in Python to intercept, sanitize, and verify pipeline records for data warehouse integrity.",
    html_url: "https://github.com/promsy3/data-quality-firewall",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python"
  },
  {
    id: 6,
    name: "My-portoflio-website",
    description: "Personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion showcasing web, backend, and data engineering projects.",
    html_url: "https://github.com/promsy3/My-portoflio-website",
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript"
  }
];

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  Python: "bg-emerald-400",
  HTML: "bg-orange-400",
  "Jupyter Notebook": "bg-amber-500",
  CSS: "bg-sky-400"
};

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/promsy3/repos?sort=updated&per_page=30");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        
        // Filter out noisy repositories, enrich with metadata, and sort by priority
        const processedRepos = (data as Repo[])
          .filter((repo: Repo) => {
            if (EXCLUDED_REPOS.has(repo.name)) return false;
            const name = repo.name.toLowerCase();
            if (name.includes('practice') || name.includes('assignment') || name.includes('group') || name.startsWith('task-')) {
              return false;
            }
            return true;
          })
          .map((repo: Repo) => {
            const meta = REPO_METADATA[repo.name];
            return {
              ...repo,
              description: meta?.description || repo.description || "Open source project repository.",
              language: meta?.language || repo.language || "TypeScript"
            };
          })
          .sort((a, b) => {
            const prioA = REPO_METADATA[a.name]?.priority ?? 99;
            const prioB = REPO_METADATA[b.name]?.priority ?? 99;
            return prioA - prioB;
          })
          .slice(0, 6);

        if (processedRepos.length > 0) {
          setRepos(processedRepos);
        }
      } catch (err) {
        console.error("Using fallback repositories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const getLangColor = (lang: string) => LANGUAGE_COLORS[lang] || "bg-indigo-500";

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
              Featured public repositories, full-stack applications, and data projects on GitHub.
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
                        <span className={`w-2.5 h-2.5 rounded-full ${getLangColor(repo.language)}`}></span>
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
      </div>
    </section>
  );
}
