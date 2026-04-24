import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: "Cognizant",
      role: "Azure Generative AI Engineer / Copilot Developer",
      timeline: "Jan 2023 – Present",
      achievements: [
        "Architected and deployed Retrieval-Augmented Generation (RAG) pipelines using Azure OpenAI and AI Search for enterprise knowledge management.",
        "Developed custom Microsoft Copilots using Copilot Studio to automate HR and IT service workflows.",
        "Engineered robust data pipelines integrating Azure Data Factory (ADF), Databricks, and Synapse Analytics.",
        "Optimized LLM prompts and fine-tuned models to improve response accuracy by 40%.",
        "Collaborated with cross-functional teams to translate business requirements into sophisticated AI-driven applications."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:space-x-8">
                {/* Timeline info for larger screens */}
                <div className="hidden md:block col-span-1 text-right pt-2 border-r-2 border-slate-200 dark:border-slate-800 pr-8">
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</div>
                  <div className="flex items-center justify-end text-primary-500 mt-2 text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.timeline}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 pb-8 md:pb-0 relative">
                  {/* Timeline dot */}
                  <div className="absolute w-4 h-4 rounded-full bg-primary-500 left-[-39px] md:left-[-41px] top-3 border-4 border-slate-50 dark:border-slate-900" />
                  
                  <div className="glass p-8 rounded-2xl hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800">
                    <div className="md:hidden mb-4">
                      <div className="text-xl font-bold text-slate-900 dark:text-white">{exp.company}</div>
                      <div className="flex items-center text-primary-500 mt-2 text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.timeline}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
                      <Briefcase className="w-6 h-6 mr-3 text-slate-400" />
                      {exp.role}
                    </h3>
                    
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-2 w-2 mt-2 mr-3 bg-primary-500 rounded-full flex-shrink-0" />
                          <span className="text-slate-600 dark:text-slate-400">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
