import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaTrophy } from 'react-icons/fa';
import { personalInfo } from '@/data/portfolio';

const githubStats = [
  { label: 'Public Repos', value: '15+', icon: FaStar, color: 'text-accent' },
  { label: 'Total Stars', value: '25+', icon: FaTrophy, color: 'text-yellow-400' },
  { label: 'Contributions', value: '500+', icon: FaCodeBranch, color: 'text-green-400' },
  { label: 'Followers', value: '30+', icon: FaUsers, color: 'text-blue-400' },
];

export default function GitHubStats() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase">Open Source Activity</span>
          <h2 className="section-title mt-3">GitHub Stats</h2>
          <span className="accent-line mt-4 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
            <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center">
              <FaGithub size={28} className="text-white" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white">{personalInfo.github.split('/').pop()}</h3>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-accent transition-colors"
              >
                {personalInfo.github}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {githubStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon size={28} className={`mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
