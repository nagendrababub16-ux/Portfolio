import { motion } from 'framer-motion';
import { Target, Zap, Server } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Generative AI & LLMs",
      description: "Specialized in building RAG systems and fine-tuning language models for enterprise applications."
    },
    {
      icon: <Target className="w-6 h-6 text-primary-500" />,
      title: "Copilot Development",
      description: "Creating intelligent Microsoft Copilots to automate and enhance business workflows."
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "Data Engineering",
      description: "Architecting robust data pipelines and warehousing solutions using Azure Data ecosystem."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400">
            <p>
              I am a results-driven <strong className="text-slate-900 dark:text-slate-200">Azure AI Engineer</strong> and <strong className="text-slate-900 dark:text-slate-200">Microsoft Copilot Developer</strong> with over <strong className="text-primary-500">3.4+ years of experience</strong> bridging the gap between Data Engineering and Artificial Intelligence.
            </p>
            <p>
              My expertise lies in designing and deploying scalable enterprise solutions using the Azure Data & AI ecosystem. I am passionate about leveraging Generative AI to automate processes, generate insights, and build sophisticated RAG (Retrieval-Augmented Generation) systems.
            </p>
            <p>
              Currently, I focus on building custom Copilots and integrating state-of-the-art LLMs to solve real-world enterprise automation challenges.
            </p>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl flex items-start space-x-4 hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800"
              >
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
