import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiMail } from 'react-icons/fi';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { personalInfo, typingWords } from '../data/portfolio';
import heroVideo from '../assets/hero video/Create_a_cinematic_portfolio_h.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const { text: typedText, cursor } = useTypingAnimation(typingWords, {
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseTime: 2000,
  });

  useEffect(() => {
    // Restore scroll position to top
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-[1]" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-3xl">
            {/* Brand chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-red-400 uppercase mb-6 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                {personalInfo.brand}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight leading-[1.05]"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6"
            >
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-300">
                {typedText}
                <span className="inline-block w-[3px] h-[1em] ml-1 bg-red-500 align-middle">
                  {cursor}
                </span>
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Resume */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-sm hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,42,42,0.3)] hover:shadow-[0_0_30px_rgba(255,42,42,0.5)]"
              >
                <FiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Resume
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-300"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>

              {/* Contact */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                <FiMail className="w-4 h-4" />
                Contact
              </button>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] text-gray-500 tracking-widest uppercase font-medium">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-red-400 rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
