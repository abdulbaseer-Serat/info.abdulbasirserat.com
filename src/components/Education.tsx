import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education, certifications, languages } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">My academic background</span>
          <h2 className="section-title mt-3">Education</h2>
          <span className="accent-line mt-4 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="font-display font-semibold text-xl text-white mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-accent" />
              Academic Qualifications
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <edu.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-semibold text-xl text-white mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-accent" />
              Professional Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <cert.icon size={20} className="text-accent" />
                  </div>
                  <span className="text-gray-200 text-sm font-medium">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="font-display font-semibold text-xl text-white mb-6">Languages</h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {languages.map((lang, i) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="px-5 py-2 glass rounded-full text-gray-200 font-medium hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
