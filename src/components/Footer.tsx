import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-semibold text-white text-lg">
                {personalInfo.name.split(' ').slice(0, 2).join(' ')}
                <span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {personalInfo.footerTagline}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-gray-400 hover:text-accent transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://wa.me/93728973718"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-accent hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
            <p className="text-sm text-gray-400">{personalInfo.email}</p>
            <p className="text-sm text-gray-400">{personalInfo.phone}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
          >
            Back to top
            <span className="w-8 h-8 glass rounded-full flex items-center justify-center">
              <ArrowUp size={16} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
