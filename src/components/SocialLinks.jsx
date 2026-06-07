import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { socialLinks } from '../data/portfolio';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  phone: FiPhone,
};

const SocialLinks = () => {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-black z-0" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-4">
            Connect With Me
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10">Let's Connect</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {socialLinks.map((link, idx) => {
            const Icon = iconMap[link.icon] || FiGithub;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                title={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative"
              >
                <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 md:p-6 hover:bg-white/[0.08] hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,42,42,0.15)]">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <span className="block text-xs text-gray-500 mt-2 group-hover:text-gray-300 transition-colors duration-300 font-medium">
                    {link.name}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
