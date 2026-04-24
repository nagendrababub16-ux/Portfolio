import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Bot } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-primary-500" />
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
              Nagendra<span className="text-primary-500">.ai</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-500 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-slate-300 hover:text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600 hover:text-slate-900" />
              )}
            </button>
          </div>

          {/* Mobile Nav Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full glass mt-2 py-4 px-4 flex flex-col space-y-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
