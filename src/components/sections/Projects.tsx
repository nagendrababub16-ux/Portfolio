import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, Bot, Database, Sparkles } from 'lucide-react';

export function Projects() {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'AI', 'Copilot', 'Data'];

  const projects = [
    {
      title: "Enterprise Knowledge Copilot",
      category: "Copilot",
      icon: <Bot className="w-6 h-6" />,
      problem: "Employees spent 4+ hours weekly searching through scattered enterprise documents and wikis.",
      solution: "Developed an intelligent conversational agent using RAG, Azure OpenAI, and Azure AI Search for highly accurate document retrieval.",
      impact: "Reduced information retrieval time by 80%, driving productivity gains and enhanced knowledge sharing.",
      tech: ["Azure OpenAI", "Azure AI Search", "Copilot Studio", "Python"],
      github: "#",
      demo: "#"
    },
    {
      title: "Customer Support Copilot",
      category: "AI",
      icon: <Sparkles className="w-6 h-6" />,
      problem: "High volume of repetitive L1 support tickets leading to increased response times.",
      solution: "Built a generative AI support assistant to auto-resolve L1 queries by grounding on historical ticket data.",
      impact: "Automated 45% of L1 support tickets and improved CSAT scores by 2.5 points.",
      tech: ["LangChain", "Azure OpenAI", "Cosmos DB", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "Business Insights Analytics (NL to SQL)",
      category: "Data",
      icon: <Database className="w-6 h-6" />,
      problem: "Business users lacked technical skills to query SQL databases directly for on-the-fly reporting.",
      solution: "Implemented an NL2SQL pipeline translating Natural Language to complex SQL statements using LLMs.",
      impact: "Enabled self-serve analytics for 100+ business users without data engineering intervention.",
      tech: ["Azure SQL", "GPT-4", "Prompt Engineering", "FastAPI"],
      github: "#",
      demo: "#"
    }
  ];

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8"></div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === f 
                  ? 'bg-primary-500 text-white shadow-lg scale-105' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="glass rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all border border-slate-200 dark:border-slate-800 group"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.github} className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub Repository">
                      <Code2 className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-slate-400 hover:text-primary-500 transition-colors" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-500">Problem</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-500">Solution</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{project.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-500">Impact</span>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-1">{project.impact}</p>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 bg-slate-50 dark:bg-slate-900/50 mt-auto border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
