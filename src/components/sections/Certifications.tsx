import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      title: "Azure AI Engineer Associate",
      issuer: "Microsoft",
      date: "2023",
      icon: <Award className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Databricks Data Engineer Associate",
      issuer: "Databricks",
      date: "2024",
      icon: <Award className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "2022",
      icon: <Award className="w-8 h-8 text-sky-500" />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-8 rounded-2xl flex items-center space-x-6 hover:-translate-y-1 transition-transform border border-slate-200 dark:border-slate-800 relative overflow-hidden"
          >
            {/* Background design */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
            
            <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl shrink-0 z-10">
              {cert.icon}
            </div>
            <div className="z-10">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1 leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">{cert.issuer}</p>
              <div className="flex items-center text-xs font-semibold text-green-600 dark:text-green-400">
                <CheckCircle className="w-4 h-4 mr-1" />
                Active • {cert.date}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
