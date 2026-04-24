import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Code2, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-8"></div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 space-y-8"
        >
          <div className="glass p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a href="mailto:nagendrababub16@gmail.com" className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
                  <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-primary-500" />
                </div>
                <span className="font-medium">nagendrababub16@gmail.com</span>
              </a>
              
              <div className="flex items-center text-slate-600 dark:text-slate-400 group">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </div>
                <span className="font-medium">Hyderabad, India</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Social Profiles</h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="LinkedIn" className="w-12 h-12 bg-slate-100 dark:bg-slate-800 hover:bg-primary-500 hover:text-white rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" aria-label="GitHub" className="w-12 h-12 bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 transition-all">
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 glass p-8 rounded-2xl border border-slate-200 dark:border-slate-800"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="How can I help you?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(82,102,255,0.4)]"
            >
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
