import { Bot } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Bot className="w-6 h-6 text-primary-500" />
            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
              Nagendra<span className="text-primary-500">.ai</span>
            </span>
          </div>
          
          <div className="text-slate-500 dark:text-slate-400 text-sm">
            &copy; {currentYear} Nagendra Babu B. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm font-medium">
            <a href="#about" className="text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About</a>
            <a href="#projects" className="text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projects</a>
            <a href="#experience" className="text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Experience</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
