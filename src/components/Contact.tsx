import { motion } from 'framer-motion';
import { contactLinks, personalInfo } from '@/data/portfolio';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Let's connect</span>
          <h2 className="section-title mt-3">Get in Touch</h2>
          <span className="accent-line mt-4 mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <link.icon size={24} className="text-accent" />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{link.label}</div>
                <div className="text-white font-medium truncate group-hover:text-accent transition-colors duration-300">
                  {link.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
