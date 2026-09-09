import { motion } from 'framer-motion';
import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">My career path</span>
          <h2 className="section-title mt-3">Experience</h2>
          <span className="accent-line mt-4 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent sm:-translate-x-px" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 mt-6">
                <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-navy-900" />
                <div className="absolute inset-0 rounded-full bg-accent blur-md opacity-50" />
              </div>

              {/* Card */}
              <div className={`pl-14 sm:pl-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                <div className="glass-card rounded-xl p-6">
                  <div className={`inline-flex items-center gap-2 mb-3 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                    <exp.icon size={18} className="text-accent" />
                    <span className="text-xs font-mono text-accent uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-1">{exp.role}</h3>
                  <p className="text-gray-400 text-sm">{exp.company}</p>
                </div>
              </div>

              {/* Spacer for other side */}
              <div className="hidden sm:block sm:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
