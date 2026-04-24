import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800/50 rounded-full px-4 py-2 border border-slate-200 dark:border-slate-700 mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">Nagendra Babu B</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-6">
            Azure AI Engineer | Microsoft Copilot Developer
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Building intelligent AI copilots and enterprise-grade GenAI solutions that solve complex business challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(82,102,255,0.4)]"
          >
            View Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-semibold transition-all hover:scale-105"
          >
            Download Resume
            <Download className="ml-2 w-5 h-5" />
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 text-slate-700 dark:text-slate-300 rounded-xl font-semibold transition-all hover:scale-105"
          >
            Contact Me
            <Mail className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
