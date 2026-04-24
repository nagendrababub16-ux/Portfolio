import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Database, Cloud, BarChart3, HardDrive } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "AI & GenAI",
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      skills: ["Azure OpenAI", "Copilot Studio", "Azure AI Foundry", "RAG", "LLMs"]
    },
    {
      title: "Programming",
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      skills: ["Python", "SQL", "JavaScript", "TypeScript"]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-8 h-8 text-green-500" />,
      skills: ["Azure Data Factory", "Synapse Analytics", "ADLS Gen2", "Databricks"]
    },
    {
      title: "Cloud & APIs",
      icon: <Cloud className="w-8 h-8 text-sky-500" />,
      skills: ["Microsoft Azure", "REST APIs", "Logic Apps", "Azure Functions"]
    },
    {
      title: "Business Intelligence",
      icon: <BarChart3 className="w-8 h-8 text-yellow-500" />,
      skills: ["Power BI", "Data Visualization", "DAX", "Power Query"]
    },
    {
      title: "Databases",
      icon: <HardDrive className="w-8 h-8 text-orange-500" />,
      skills: ["Azure SQL", "Cosmos DB", "PostgreSQL", "Vector Databases"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-slate-200 dark:border-slate-800"
            >
              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6 shadow-inner">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 w-full border-b border-slate-200 dark:border-slate-700 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mt-auto w-full">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
