import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/portfolio';

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  phone: FiPhone,
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] relative overflow-hidden">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium relative z-10">
        <div className="flex flex-col gap-3">
          <p className="text-white font-sans text-base font-bold tracking-tight">{personalInfo.brand}</p>
          <p className="text-gray-500">{personalInfo.role}</p>
          <p className="text-gray-500">Based {personalInfo.location}</p>
        </div>

        <div className="flex flex-col gap-3 md:items-center">
          <p className="text-gray-400">Building the future with AI</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">
            View Projects
          </a>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon] || FiMail;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  title={link.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
            <button
              onClick={scrollToTop}
              className="text-gray-500 hover:text-white transition-colors ml-2"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-600">{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden relative z-10">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4]/5 w-full text-center">
          {personalInfo.name}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium relative z-10">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">
            Contact
          </a>
          <p className="text-white/30 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} {personalInfo.brand} | Built with React + AI
          </p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <a href={`mailto:${personalInfo.email}`} className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase text-gray-400">
            {personalInfo.email}
          </a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
